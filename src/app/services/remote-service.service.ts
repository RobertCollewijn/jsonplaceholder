import {Injectable} from '@angular/core';
import {DatePipe} from '@angular/common';
import {HttpClient} from '@angular/common/http';

import {IAlbum, IPhoto, IUser} from '../model/interfaces';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class RemoteServiceService {

  getApiUrl = 'https://jsonplaceholder.typicode.com';
  users: IUser[] = [];

  constructor(private http: HttpClient, private datePipe: DatePipe) {
    // this.users = [];
  }

  addAllPhotosByAlbum(album: IAlbum) {
    return this.http.get<IPhoto[]>(this.getApiUrl + '/albums/' + album.id + '/photos')
      .subscribe(data => {
        data.map(photo => {
          album.photos.push(photo);
        });
      });
  }

  addAllAlbumsByUser(user: IUser) {
    return this.http.get<IAlbum[]>(this.getApiUrl + '/users/' + user.id + '/albums')
      .subscribe(data => {
          data.map(album => {
            album.photos = [];
            user.albums.push(album);
            this.addAllPhotosByAlbum(album);
          });
        }
      );
  }

  sortByUserName(order = 'asc') {
    this.users = this.users.sort(
      (a: IUser, b: IUser) => {
        return (order === 'asc' ? 1 : -1) * (a.username > b.username ? 1 : -1);
      });
  }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.getApiUrl + '/users');
  }

  getAllUsers() {
    console.log('Start: ' + this.datePipe.transform(Date.now(), 'yyyy-MM-dd hh:mm:ss'));
    this.http.get<IUser[]>(this.getApiUrl + '/users')
    // The .subscribe() method accepts 3 callbacks
      .subscribe(
        // The 1st callback handles the data emitted by the observable.
        data => {
          data.map(user => {
            user.albums = [];
            this.users.push(user);
            this.addAllAlbumsByUser(user);
          });
        },
        // The 2nd callback handles errors.
        (err) => console.error(err),
        // The 3rd callback handles the "complete" event.
        () => {
          this.sortByUserName('desc');
          sessionStorage.setItem('users', JSON.stringify(this.users));
        }
      );

  }

  getUser(id: string): IUser {
   // JSON.parse(sessionStorage.getItem('users')).map(user => console.log(user.id + 1));
    return JSON.parse(sessionStorage.getItem('users')).find(user => user.id.toString() === id);
  }
}
