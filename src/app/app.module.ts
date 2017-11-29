import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {DatePipe} from '@angular/common';

// materialize
import {MaterialModule} from './app.material';



import {HomeComponent} from './web/home/home.component';
import {RemoteServiceService} from 'app/services/remote-service.service';
import {AlbumComponent} from './web/home/album/album.component';
import {PhotoComponent} from './web/home/photo/photo.component';
import {UserComponent} from './web/home/user/user.component';
import {UserFormComponent} from './web/home/user/user-form.component';
import {UsersComponent} from './web/home/users/users.component';



const appRoutes: Routes = [
  {
    path: 'user/:id',
    component: UserFormComponent
  },
  {
    path: 'home',
    component: UsersComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {path: '**', component: UsersComponent}
];

@NgModule({
  declarations: [
    HomeComponent,
    AlbumComponent,
    PhotoComponent,
    UserComponent,
    UserFormComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    // FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false} // <-- debugging purposes only
    )
  ],
  exports: [RouterModule],
  providers: [RemoteServiceService, DatePipe],
  bootstrap: [HomeComponent]
})
export class AppModule {
}


