import {Injectable} from '@angular/core';
import {DatePipe} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {IAlbum, IPhoto, IUser} from '../model/interfaces';


@Injectable()
export class RemoteServiceService {

  getApiUrl = 'https://jsonplaceholder.typicode.com';
  users: IUser[];

  constructor(private http: HttpClient, private datePipe: DatePipe) {
    this.users = [];
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

  getAllUsers() {
    console.log('Start: ' + this.datePipe.transform(Date.now(), 'yyyy-MM-dd hh:mm:ss'));
    this.http.get<IUser[]>(this.getApiUrl + '/users')
      .subscribe(data => {
          data.map(user => {
            user.albums = [];
            this.users.push(user);
            this.addAllAlbumsByUser(user);
          });
        }
      );
  }
}
