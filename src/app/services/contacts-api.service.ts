import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IContacts } from '../interfaces/contacts.interface';
import { ResponsePageable } from '../interfaces/responsePageable.model';
import { ResponseReturnal } from '../interfaces/responseReturnal.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsApiService {

  constructor(private http: HttpClient) { }

  public getContacts(): Observable<ResponsePageable> {
    return this.http.get<ResponsePageable>('/api/contacts/');
  }

  public create(data: IContacts): Observable<ResponseReturnal> {
    return this.http.post<ResponseReturnal>('/api/contacts', data);
  }

  public update(id: number, data: IContacts): Observable<ResponseReturnal> {
    return this.http.put<ResponseReturnal>(`/api/contacts/${id}`, data);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(`/api/contacts/${id}`);
  }
}
