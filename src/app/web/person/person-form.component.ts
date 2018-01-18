import {Component, OnInit} from '@angular/core';
import {IUser} from '../../model/interfaces';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {RemoteServiceService} from '../../services/remote-service.service';
import {Phone} from '../../model/phone';
import {IPerson, Name, Person} from '../../model/person';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})

export class PersonFormComponent implements OnInit {
  personCollection: AngularFirestoreCollection<IPerson>;

  person: Person;
  personForm: FormGroup;
  phone: Phone;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private remoteService: RemoteServiceService,
              private afs: AngularFirestore) {
    this.route.queryParams.subscribe(params => {
        this.personCollection = this.afs.collection<IPerson>('persons');
        console.log(params);
        // this.person = Person.new();

        this.getUser(params.id, params.from);


      },
      (err) => console.log(err),
      () => {
      });
  }

  ngOnInit() {
    console.log('init' + this.person);
    // this.createForm();
    this.personForm.valueChanges.subscribe(form => {
      this.person.name.title = form.title;
      this.person.name.prefix = form.prefix;
      this.person.name.initials = form.initials;
      this.person.name.firstName = form.firstName;
      this.person.name.insertion = form.insertion;
      this.person.name.lastName = form.lastName;
      this.person.name.suffix = form.suffix;
      this.person.name.pronunciation = form.pronunciation;
      this.person.name.nickname = form.nickname;
      this.person.name.salutation = form.salutation;
      this.person.name.fullName = form.fullName;
    });
  }

  getUser(id: string, from?: string): void {
    if (from) {
      console.log('json');
      const user: IUser = this.remoteService.getUser(id);

      this.person = Person.newByUser(user);
      this.createForm();
    } else {
      this.person = Person.new();
      const person = this.person;
      this.createForm();
      const form = this.personForm;
      console.log('firestore' + id);
      const docRef = this.personCollection.doc(id).ref;
      docRef.get().then(function (doc) {
        if (doc.exists) {
          console.log('Document data:', doc.data());
          // person.id = doc.data().id;
          // person.name = doc.data().name;
          // person.phone = doc.data().phone;

          const name: Name = person.name;
          form.setValue({
            title: name.title,
            prefix: name.prefix,
            initials: name.initials,
            firstName: name.firstName,
            insertion: name.insertion,
            lastName: name.lastName,
            suffix: name.suffix,
            pronunciation: name.pronunciation,
            nickname: name.nickname,
            salutation: name.salutation,
            fullName: name.fullName
          });
        } else {
          console.log('No such document!');
        }
      }).catch(function (error) {
        console.log('Error getting document:', error);
      });
      // const user: IUser = this.remoteService.getUser(id);
      // this.person = Person.newByUser(user);
    }
  }


  createForm() {
    console.log(this.person);
    this.personForm = this.fb.group({ // <-- the parent FormGroup
      title: [this.person.name.title, {}],
      prefix: [this.person.name.prefix, {}],
      initials: [this.person.name.initials, {}],
      firstName: [this.person.name.firstName, {}],
      insertion: [this.person.name.insertion, {}],
      lastName: [this.person.name.lastName, {}],
      suffix: [this.person.name.suffix, {}],
      pronunciation: [this.person.name.pronunciation, {}],
      nickname: [this.person.name.nickname, {}],
      salutation: [this.person.name.salutation, {}],
      fullName: [this.person.name.fullName, {}]
    });
  }

  savePerson(): void {
    const person = this.person;
    const personCollection = this.personCollection;

    console.log(person);
    if (person.id === '') {
      personCollection.add(person)
        .then(function (docRef) {
          console.log('Document written with ID: ', docRef.id);
          person.id = docRef.id;
          personCollection.doc(docRef.id).set(person)
            .then(function () {
              console.log('Document successfully updated!');
            })
            .catch(function (error) {
              console.error('Error writing document: ', error);
            });
        })
        .catch(function (error) {
          console.error('Error adding document: ', error);
        });
    } else {
      personCollection.doc(person.id).set(person)
        .then(function () {
          console.log('Document successfully updated!');
        })
        .catch(function (error) {
          console.error('Error writing document: ', error);
        });
    }
  }
}
