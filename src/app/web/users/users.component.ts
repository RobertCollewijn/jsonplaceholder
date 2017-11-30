import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {IUser} from '../../model/interfaces';
import {RemoteServiceService} from '../../services/remote-service.service';
import {MatTableDataSource, MatSort} from '@angular/material';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, AfterViewInit {
  title = "Users";
  dataSource = new MatTableDataSource<IUser>();
  displayedColumns = ['name', 'email', 'phone', 'company'];

  @ViewChild(MatSort) sort: MatSort;

  constructor(private userService: RemoteServiceService) {
  }

  ngOnInit() {
   this.getUsers();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  getUsers(){
    this.userService.getUsers().subscribe(
      data => {
        this.dataSource.data = data;
      },
      // The 2nd callback handles errors.
      (err) => console.error(err),
      // The 3rd callback handles the "complete" event.
      () => {
        // this.dataSource.data = this.users;
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}




