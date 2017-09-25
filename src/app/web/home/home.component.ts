import {Component, OnInit} from '@angular/core';
import {RemoteServiceService} from 'app/services/remote-service.service';
import {User} from 'app/model/user';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User[];
  visibleCategory: Array<User>;


  constructor(private remoteService: RemoteServiceService, private datePipe: DatePipe) {
    this.users = remoteService.users;
    this.visibleCategory = new Array();
  }

  ngOnInit(): void {
    console.log('ngOnInit2 ');
    // this.remoteService.mergeAllUsers();
    this.getAllUsers();
  }

  eventClick(userNav: User) {
    const index = this.visibleCategory.indexOf(userNav, 0);
    if (index > -1) {
      this.visibleCategory.splice(index, 1);
    } else {
      this.visibleCategory.push(userNav);
    }
  }


  getAllUsers() {

    this.remoteService.getAllUsers().subscribe(
      () => console.log('Finish: ' + this.datePipe.transform(Date.now(), 'yyyy-MM-dd hh:mm:ss')),
      (error) => console.log('error: ' + error)
    );
  }

}
