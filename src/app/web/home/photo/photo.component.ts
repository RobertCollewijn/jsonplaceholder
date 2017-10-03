import {Component, Input, OnInit} from '@angular/core';

import {IPhoto} from '../../../model/interfaces';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  @Input() photo: IPhoto;

  constructor() {
  }

  ngOnInit() {
  }

}
