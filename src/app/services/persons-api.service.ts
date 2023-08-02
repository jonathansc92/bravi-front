import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPersons } from '../interfaces/persons.interface';
import { ResponsePageable } from '../interfaces/responsePageable.model';
import { ResponseReturnal } from '../interfaces/responseReturnal.model';

@Injectable({
  providedIn: 'root'
})
export class PersonsApiService {

  constructor(private http: HttpClient) { }

  public getPersons(): Observable<IPersons[]> {
    return this.http.get<IPersons[]>('/api/persons/');
  }

  public create(data: IPersons): Observable<ResponseReturnal> {
    return this.http.post<ResponseReturnal>('/api/persons', data);
  }

  public update(id: number, data: IPersons): Observable<ResponseReturnal> {
    return this.http.put<ResponseReturnal>(`/api/persons/${id}`, data);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(`/api/persons/${id}`);
  }
}
