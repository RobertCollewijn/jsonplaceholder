import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../../model/interfaces';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: IUser;
  visibleAlbums: boolean;
  visibleEmail: boolean;
  visiblePhone: boolean;
  visibleAddress: boolean;
  visibleWeb: boolean;
  visibleMap: boolean;
  visibleCompany: boolean;

  constructor() {
    this.visibleAlbums = false;
    this.visibleEmail = false;
    this.visiblePhone = false;
    this.visibleAddress = false;
    this.visibleWeb = false;
    this.visibleMap = false;
    this.visibleCompany = false;
  }

  ngOnInit() {
  }

  showAlbumsClick() {
    this.visibleAlbums = !this.visibleAlbums;
  }

  showEmail() {
    this.visibleEmail = !this.visibleEmail;
  }

  showPhone() {
    this.visiblePhone = !this.visiblePhone;
  }

  showAddress() {
    this.visibleAddress = !this.visibleAddress;
  }

  showWeb() {
    this.visibleWeb = !this.visibleWeb;
  }

  showMap() {
    this.visibleMap = !this.visibleMap;
  }
  showCompany() {
    this.visibleCompany = !this.visibleCompany;
  }
}
