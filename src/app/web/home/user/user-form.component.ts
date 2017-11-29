import {Component, OnInit} from '@angular/core';
import {IUser} from '../../../model/interfaces';
import {RemoteServiceService} from '../../../services/remote-service.service';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user: IUser;
  userForm: FormGroup;


  constructor(private fb: FormBuilder, private route: ActivatedRoute, private remoteService: RemoteServiceService) {
    this.getUser();
    this.createForm();
  }

  ngOnInit() {
    /*

    this.userForm.setValue({
      name: this.user.name,
      username:this.user.username,
          });

     */
    this.userForm.valueChanges.subscribe(f => console.log('form: ' + JSON.stringify(f)));
    this.userForm.get('name')
      .valueChanges.subscribe(w => {
        console.log('name: ' + w);
        this.user.name = w;
    })
  }

  getUser(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('id: ' + id);
    this.user = this.remoteService.getUser(id);
    console.log(this.user);
  }

  createForm() {
    this.userForm = this.fb.group({ // <-- the parent FormGroup
      name: [this.user.name, Validators.required],
      username: [this.user.username],
      email: [this.user.email],
      phone: [this.user.phone]
    });
  }
}
