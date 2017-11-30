import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {DatePipe} from '@angular/common';

import {HomeComponent} from './web/home/home.component';
import {RemoteServiceService} from 'app/services/remote-service.service';
import {RouteModule} from './app.router';
import { NavBarComponent } from './web/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouteModule,
  ],
  exports: [RouteModule],
  providers: [RemoteServiceService, DatePipe],
  bootstrap: [HomeComponent]
})
export class AppModule {
}


