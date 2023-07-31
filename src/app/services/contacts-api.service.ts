import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacts } from '../models/contacts.model';
import { ResponsePageable } from '../models/responsePageable.model';
import { ResponseReturnal } from '../models/responseReturnal.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsApiService {

  constructor(private http: HttpClient) { }

  public getContacts(): Observable<ResponsePageable> {
    return this.http.get<ResponsePageable>('/api/contacts/');
  }

  public create(data: Contacts): Observable<ResponseReturnal> {
    return this.http.post<ResponseReturnal>('/api/contacts', data);
  }

  public update(id: number, data: Contacts): Observable<ResponseReturnal> {
    return this.http.put<ResponseReturnal>(`/api/contacts/${id}`, data);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(`/api/contacts/${id}`);
  }
}
