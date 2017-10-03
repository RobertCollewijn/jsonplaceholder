import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {HomeComponent} from './web/home/home.component';
import {RemoteServiceService} from 'app/services/remote-service.service';
import { AlbumComponent } from './web/home/album/album.component';
import { PhotoComponent } from './web/home/photo/photo.component';
import {DatePipe} from '@angular/common';


@NgModule({
  declarations: [
    HomeComponent,
    AlbumComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RemoteServiceService, DatePipe],
  bootstrap: [HomeComponent]
})
export class AppModule {
}
