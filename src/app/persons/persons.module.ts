import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

import { PersonsApiService } from '../services/persons-api.service';

import { PersonsComponent } from './persons.component';
import { ContactsModule } from '../contacts/contacts.module';

@NgModule({
  declarations: [
    PersonsComponent, 
  ],
  imports: [
    CommonModule,
    InputSwitchModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    InputMaskModule,
    ToolbarModule,
    DialogModule,
    ConfirmDialogModule,
    FormsModule,
    ToastModule,
    ContactsModule
  ],
  providers: [
    PersonsApiService
  ],
  exports: [
    PersonsComponent
  ]
})
export class PersonsModule { }
