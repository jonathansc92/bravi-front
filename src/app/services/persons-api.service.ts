import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persons } from '../models/persons.model';

@Injectable({
  providedIn: 'root'
})
export class PersonsApiService {

  constructor(private http: HttpClient) { }

  public getPersons(): Observable<any> {
    return this.http.get('/api/persons/');
  }
}
