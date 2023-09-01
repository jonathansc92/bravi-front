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

import { PersonsComponent } from './persons.component';
import { ContactsModule } from '../contacts/contacts.module';
import { StoreModule } from '@ngrx/store';
import { personsReducer } from 'src/app/store/persons/persons.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PersonsEffect } from '../store/persons/persons.effect';

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
    ContactsModule,
    StoreModule.forRoot({
      persons: personsReducer
    }, {}),
    EffectsModule.forRoot([PersonsEffect])

  ],
  providers: [],
  exports: [
    PersonsComponent
  ]
})
export class PersonsModule { }
