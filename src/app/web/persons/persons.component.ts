import { Component, OnInit } from '@angular/core';
import {IPerson, Person} from '../../model/person';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {IUser} from '../../model/interfaces';
import {MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  title = 'Persons';
  personCollection: AngularFirestoreCollection<Person>;
  persons: Observable<Person[]>
  dataSource = new MatTableDataSource<Person>();
  displayedColumns = ['firstName', 'lastName'];

  constructor(private afs: AngularFirestore, private _router: Router) {
    this.personCollection = this.afs.collection<Person>('persons');
    this.persons = this.personCollection.valueChanges();
    this.persons.subscribe(data => this.dataSource.data = data);
  }

  ngOnInit() {
  }
  rowClick(person: IPerson) {
    console.log('click');
    this._router.navigate(['/person'], {queryParams: {id: person.id }});
  }

}
