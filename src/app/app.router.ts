import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './app.material';

// import {HomeComponent} from "./web/home/home.component";
import {AlbumComponent} from './web/home/album/album.component';
import {PhotoComponent} from './web/home/photo/photo.component';
import {UserComponent} from './web/home/user/user.component';
import {UserFormComponent} from './web/home/user/user-form.component';
import {UsersComponent} from './web/users/users.component';
import {DashboardComponent} from './web/dashboard/dashboard.component';
import {PersonFormComponent} from './web/person/person-form.component';
import {PersonsComponent} from './web/persons/persons.component';
import {PersonComponent} from './web/person/person.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: DashboardComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'user',
    component: UserFormComponent
  },
  {
    path: 'person',
    component: PersonFormComponent
  },
  {
    path: 'persons',
    component: PersonsComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {path: '**', component: DashboardComponent}
];

@NgModule({
  declarations: [
    DashboardComponent,
    AlbumComponent,
    PhotoComponent,
    UserComponent,
    UserFormComponent,
    UsersComponent,
    PersonFormComponent,
    PersonComponent,
    PersonsComponent,
  ],
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false} // <-- debugging purposes only
    )
  ],
  exports: [RouterModule, MaterialModule],
})
export class RouteModule {
}
