import { Component, OnInit } from '@angular/core';
import {IUser} from '../../../model/interfaces';
import {RemoteServiceService} from '../../../services/remote-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUser[];

  constructor(private remoteService: RemoteServiceService) {
    this.users = remoteService.users;
  }

  ngOnInit() {
  }

}
