import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persons } from '../models/persons.model';
import { ResponsePageable } from '../models/responsePageable.model';
import { ResponseReturnal } from '../models/responseReturnal.model';

@Injectable({
  providedIn: 'root'
})
export class PersonsApiService {

  constructor(private http: HttpClient) { }

  public getPersons(): Observable<ResponsePageable> {
    return this.http.get<ResponsePageable>('/api/persons/');
  }

  public create(data: Persons): Observable<ResponseReturnal> {
    return this.http.post<ResponseReturnal>('/api/persons', data);
  }

  public update(id: number, data: Persons): Observable<ResponseReturnal> {
    return this.http.put<ResponseReturnal>(`/api/persons/${id}`, data);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(`/api/persons/${id}`);
  }
}
