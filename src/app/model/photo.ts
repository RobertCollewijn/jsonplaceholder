/**
 * Created by Robert on 4-7-2017
 */
export class Photo {
  id: string;
  albumId: string;
  title: string;
  url: string;
  thumbnailUrl: string;

  constructor(id: string, albumId: string, title: string, url: string, thumbnailUrl: string) {
    this.id = id;
    this.albumId = albumId;
    this.title = title;
    this.url = url;
    this.thumbnailUrl = thumbnailUrl;
  }


}
