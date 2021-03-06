import {Component, OnInit} from '@angular/core';

import {RemoteServiceService} from 'app/services/remote-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private remoteService: RemoteServiceService) {
  }

  ngOnInit(): void {
    this.getAllUsers();
  }


  getAllUsers() {
    this.remoteService.getAllUsers();
  }


}
