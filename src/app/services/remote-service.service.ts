import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {User} from 'app/model/user';
import {Album} from 'app/model/album';
import {Photo} from '../model/photo';

import 'rxjs/Rx';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import {DatePipe} from '@angular/common';


@Injectable()
export class RemoteServiceService {

  getApiUrl = 'https://jsonplaceholder.typicode.com';
  users: User[];

  constructor(private http: Http, private datePipe: DatePipe) {
    this.users = new Array();
  }

  addAllPhotosByAlbum(album: Album) {
    return this.http.get(this.getApiUrl + '/albums/' + album.id + '/photos')
      .map(
        (response: Response) => {
          response.json().map(photoJson => {
            album.addPhoto(new Photo(photoJson.id, photoJson.albumId, photoJson.title, photoJson.url, photoJson.thumbnailUrl));
           // console.log('Finish: ' + this.datePipe.transform(Date.now(), 'yyyy-MM-dd hh:mm:ss'));
          });
        }
      );
  }

  /*hiet de .mergeMap(*/
  addAllAlbumsByUser(user: User) {
    return this.http.get(this.getApiUrl + '/users/' + user.id + '/albums')
      .map((response: Response) => {
          response.json().map(albumJson => {
            const album: Album = new Album(albumJson.userId, albumJson.id, albumJson.title);
            user.addAlbum(album);
            this.addAllPhotosByAlbum(album).subscribe(
              () => {
               // console.log('Finish: ' + this.datePipe.transform(Date.now(), 'yyyy-MM-dd hh:mm:ss'));
              },
              (error) => console.log(error)
            );
          });
        }
      );
  }

  oAllUsers() {
    return this.http.get(this.getApiUrl + '/users');
  }

  getJson(url: string): Observable<any> {
    return this.http.get(url)
      .flatMap((response) => response.json());
  }

  getUsers(): Observable<User> {
    return this.getJson(this.getApiUrl + '/users')
      .map(userJson => new User(userJson));
  }

  getAlbums(): Observable<Album> {
    const albumObs = this.getUsers()
      .mergeMap(user => this.getJson(this.getApiUrl + '/users/' + user.id + '/albums'))
      .map(albumJson => new Album(albumJson.userId, albumJson.id, albumJson.title));

    return albumObs;
  }

  getAlbumsByUser(user: User): Observable<Album> {
    const albumObs = this.getJson(this.getApiUrl + '/users/' + user.id + '/albums')
      .map(albumJson => new Album(albumJson.userId, albumJson.id, albumJson.title));

    albumObs.map(album => user.addAlbum(album));
    return albumObs;
  }

  getFotosByAlbum(album: Album): Observable<Photo> {
    return this.getJson(this.getApiUrl + '/albums/' + album.id + '/photos')
      .map(photoJson => new Photo(photoJson.id, photoJson.albumId, photoJson.title, photoJson.url, photoJson.thumbnailUrl)
      );
  }

  mergeAllUsersFlat() {
    console.log('TEST : flatmp album functies');

    this.getUsers().flatMap(user => this.getAlbumsByUser(user))
      .subscribe(user => {
        console.log(user);
      });
  }

  mergeAllUsers() {
    console.log('Start: ' + this.datePipe.transform(Date.now(), 'yyyy-MM-dd hh:mm:ss'));
    this.getUsers()
      .subscribe(user => {
        console.log(user);
        this.users.push(user);
        this.getAlbumsByUser(user).subscribe(album => {
            user.addAlbum(album);
            this.getFotosByAlbum(album).subscribe(photo => {
              album.addPhoto(photo);
             // console.log('Finish: ' + this.datePipe.transform(Date.now(), 'yyyy-MM-dd hh:mm:ss'));
            });
          }
        );
      });
   // console.log('Finish: ' + this.datePipe.transform(Date.now(), 'yyyy-MM-dd hh:mm:ss'));
  }

  mergeAllUsers2() {
    console.log('TEST1 : user functies');
// het lijkt erop dat ik in 1 keer het reulstaat terug krijg, dus alle users als een array

    const watBenIk = this.http.get(this.getApiUrl + '/users');

    const usersObserv: Observable<User> = this.http.get(this.getApiUrl + '/users')
      .map(res => res.json().map(userJson => new User(userJson)));

    usersObserv.map(data => console.log(data)).subscribe();
//    const usersJSON = usersObserv.map(userJSON => userJSON.json());
// const users = usersJSON.map(userJSON => new User (userJSON));
    usersObserv.mergeMap(user => this.http.get(this.getApiUrl + '/users/1' + user.id + '/albums')).subscribe(data => console.log(data));

    // usersObserv.subscribe(data => console.log(data));
  }


  mergeAllUsers1() {
    console.log('TEST2 : userId');
// het lijkt erop dat ik in 1 keer het reulstaat terug krijg, dus alle users als een array
    this.http.get(this.getApiUrl + '/users')
      .map((res: any) => {
          res.map(userj => {
            return userj.json();
          })
            .mergeMap(user => this.http.get(this.getApiUrl + '/users/' + user + '/albums')
              .map(res2 => console.log('userId: ' + +': ' + res2.json())));


        }
      )


      .subscribe();


  }

  getBookAuthorForkJoin(): Observable<any> {
    return Observable.forkJoin([
      this.http.get(this.getApiUrl + '/users/1')
        .map((res: any) => res.json()),
      this.http.get(this.getApiUrl + '/users/' + '1' + '/albums')
        .map((res: any) => res.json())
    ]);
  }


  getAllUsers() {
    console.log('Start: ' + this.datePipe.transform(Date.now(), 'yyyy-MM-dd hh:mm:ss'));
    return this.http.get(this.getApiUrl + '/users')
      .map((response: Response) => {
          response.json()
            .map(userJson => {
                const user = new User(userJson);
                /*new User(userJson.id, userJson.name, userJson.email);*/
                this.users.push(user);
                this.addAllAlbumsByUser(user).subscribe(
                  () => {
                  },
                  (error) => console.log(error)
                );
              }
            );
        }
      );
  }
}
