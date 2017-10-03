import {Component, OnInit} from '@angular/core';
import {RemoteServiceService} from 'app/services/remote-service.service';
import {DatePipe} from '@angular/common';

import {IUser} from 'app/model/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: IUser[];
  visibleCategory: Array<IUser>;


  constructor(private remoteService: RemoteServiceService, private datePipe: DatePipe) {
    this.users = remoteService.users;
    this.visibleCategory = new Array();
  }

  ngOnInit(): void {
    console.log('ngOnInit2 ');
    // this.remoteService.mergeAllUsers();
    this.getAllUsers();
  }

  consoleClick() {
    console.log('click')
    this.users.map(t => console.log(t));
  }
  eventClick(userNav: IUser) {
    const index = this.visibleCategory.indexOf(userNav, 0);
    if (index > -1) {
      this.visibleCategory.splice(index, 1);
    } else {
      this.visibleCategory.push(userNav);
    }
  }


  getAllUsers() {
    this.remoteService.getAllUsers();
  }

}
