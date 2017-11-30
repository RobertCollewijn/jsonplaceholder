import { Component, OnInit } from '@angular/core';
import {IUser} from '../../model/interfaces';
import {RemoteServiceService} from '../../services/remote-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: IUser[];

  constructor(private remoteService: RemoteServiceService) {
    this.users = remoteService.users;
  }

  ngOnInit() {
  }

}
