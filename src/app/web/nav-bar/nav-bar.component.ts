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
    {label: 'Persons', link: 'persons'},
  ];

  constructor() {
  }

  ngOnInit() {
  }
  
  openJSONPlaceholder() {
    window.open('https://jsonplaceholder.typicode.com/', '_blank');
  }
}
