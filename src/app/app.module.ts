import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {DatePipe} from '@angular/common';

import {HomeComponent} from './web/home/home.component';
import {RemoteServiceService} from 'app/services/remote-service.service';
import {RouteModule} from './app.router';
import {NavBarComponent} from './web/nav-bar/nav-bar.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {environment} from '../environments/environment';


@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouteModule,
    AngularFireModule.initializeApp(environment.firestore),
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence()
  ],
  exports: [RouteModule],
  providers: [RemoteServiceService, DatePipe],
  bootstrap: [HomeComponent]
})
export class AppModule {
}


