import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

import { ContactsApiService } from '../services/contacts-api.service';

import { ContactsComponent } from './contacts.component';

@NgModule({
  declarations: [
    ContactsComponent, 
  ],
  imports: [
    CommonModule,
    TableModule
  ],
  providers: [
    ContactsApiService
  ],
  exports: [
    ContactsComponent
  ]
})
export class ContactsModule { }
