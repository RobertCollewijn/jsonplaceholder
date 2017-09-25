import {Component, Input, OnInit} from '@angular/core';
import {Album} from '../../../model/album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  @Input() album: Album;
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
