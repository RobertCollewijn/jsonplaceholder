import {Component, Input, OnInit} from '@angular/core';

import {IAlbum} from '../../../model/interfaces';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  @Input() album: IAlbum;
  showAlbum: boolean;

  constructor() {
    this.showAlbum = false;
  }

  ngOnInit() {
  }

  eventClick() {
    this.showAlbum = !this.showAlbum;
  }
}
