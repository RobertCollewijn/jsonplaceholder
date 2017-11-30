import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  tabLinks = [
    {label: 'home', link: 'home'},
    {label: 'Users', link: 'users'},
  ];

  tabs = [
    {
      label: 'Home',
      content: 'This is the body of the homepage'
    }, {
      label: 'Users',
      disabled: true,
      content: 'This is the body of the users page'
    },
  ];


  constructor() {
  }

  ngOnInit() {
  }

}
