import {Component, OnInit} from '@angular/core';
import {IUser} from '../../model/interfaces';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {RemoteServiceService} from '../../services/remote-service.service';
import {Phone} from '../../model/phone';
import {Person} from '../../model/person';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})


export class PersonFormComponent implements OnInit {
  person: Person; // = new Person();
  personForm: FormGroup;
  phone: Phone;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private remoteService: RemoteServiceService) {
    this.route.queryParams.subscribe(params => {
        console.log(params);
        this.getUser(params.id, params.from);
        this.createForm();
        // this.person = Person.newByUser(user);
      },
      (err) => console.log(err),
      () => {
      });
  }

  ngOnInit() {
  }

  getUser(id: string, from?: string): void {
    if (from) {
      console.log('json')
      const user: IUser = this.remoteService.getUser(id);
      this.person = Person.newByUser(user);
    } else {
      console.log('firestore')
      const user: IUser = this.remoteService.getUser(id);
      this.person = Person.newByUser(user);
    }
    // this.person.name.fullName = user.name;


    // this.person = user.
    // console.log(this.user);
  }

  /*
  id: string;
  name: {
    prefix: string; // voorvoegsel
    title: string; // titulatuur
    initials: string; // voorletter
    firstName: string; // voornaam
    insertion: string; // tussenvoegsel
    lastName: string; // achternaam
    pronunciation: string; // uitspraak
    nickname: string; // roepnaam
    salutation: string; // aanhef
    fullName: string; // naam voluit
  };
  phone: IPhone[];
  address: IAddress[];
  organisation: IOrganisation[];
  notes: string;
  labels: string[];
   */
  createForm() {
    this.personForm = this.fb.group({ // <-- the parent FormGroup
      title: [this.person.name.title, {}],
      prefix: [this.person.name.prefix, {}],
      initials: [this.person.name.initials, {}],
      firstName: [this.person.name.firstName, {}],
      insertion: [this.person.name.insertion, {}],
      lastName: [this.person.name.lastName, {}],
      pronunciation: [this.person.name.pronunciation, {}],
      nickname: [this.person.name.nickname, {}],
      salutation: [this.person.name.salutation, {}],
      fullName: [this.person.name.fullName, {}]
    });
  }
}
