import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persons } from '../models/persons.model';
import { ResponsePageable } from '../models/responsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class PersonsApiService {

  constructor(private http: HttpClient) { }

  public getPersons(): Observable<ResponsePageable> {
    return this.http.get<ResponsePageable>('/api/persons/');
  }

  public create(data: Persons): Observable<Persons> {
    return this.http.post<Persons>('/api/persons', data);
  }
}
