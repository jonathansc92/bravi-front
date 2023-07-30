import { Component, OnInit } from '@angular/core';
import { PersonsApiService } from '../services/persons-api.service';
import { Persons } from '../models/persons.model';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {
  persons: Persons;

  constructor(private personsApiService: PersonsApiService) {
    this.persons = new Persons();
      this.getter();
   }

  ngOnInit() { }

  getter() {
    this.personsApiService.getPersons().subscribe(
      (data: Persons) => {
        this.persons = data;
        console.log(data);
    }, err => {
      console.log(err)
    })
  }
}
