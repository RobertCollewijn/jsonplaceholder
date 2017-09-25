/**
 * Created by Robert on 27-6-2017.
 */

import {Photo} from './photo';

export class Album {
  userId: string;
  id: string;
  title: string;
  photos: Photo[];

  constructor(userId: string, id: string, title: string) {
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.photos = new Array();
  }

  addPhoto(photo: Photo) {
   // console.log(this.id + 'photo added')
    this.photos.push(photo);
  }
}
