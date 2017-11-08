import {Component, OnInit} from '@angular/core';

import {RemoteServiceService} from 'app/services/remote-service.service';
import {IUser} from 'app/model/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: IUser[];

  constructor(private remoteService: RemoteServiceService) {
    this.users = remoteService.users;
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  consoleClick() {
    this.remoteService.sortByUserName('asc');
  }

  openJSONPlaceholder() {
    window.open('https://jsonplaceholder.typicode.com/', '_blank');
  }

  getAllUsers() {
    this.remoteService.getAllUsers();
  }

}
