import {Component, OnInit} from '@angular/core';
import {IUser} from '../../../model/interfaces';
import {RemoteServiceService} from '../../../services/remote-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user: IUser;

  constructor(private route: ActivatedRoute, private remoteService: RemoteServiceService) {
    this.getUser();
  }

  ngOnInit() {
  }

  getUser(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('id: ' + id);
    this.user = this.remoteService.getUser(id);
    console.log(this.user);
  }
}
