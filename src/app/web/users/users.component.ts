import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {IUser} from '../../model/interfaces';
import {RemoteServiceService} from '../../services/remote-service.service';
import {MatTableDataSource, MatSort} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, AfterViewInit {
  title = 'Users';
  dataSource = new MatTableDataSource<IUser>();
  displayedColumns = ['name', 'email', 'phone', 'company'];

  @ViewChild(MatSort) sort: MatSort;

  constructor(private userService: RemoteServiceService, private _router: Router) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      data => this.dataSource.data = data
    );
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      data => this.dataSource.data = data
    );
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  rowClick(user: IUser) {
    console.log('click');
    this._router.navigate(['/person'], {queryParams: {id: user.id , from: 'jsonPlaceholder'}});
  }

}




