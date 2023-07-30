import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PersonRoutingModule } from './person-routing.module';
import { PersonComponent } from './person.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    PersonComponent
  ],
  imports: [
    BrowserModule,
    PersonRoutingModule,
    InputSwitchModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [PersonComponent]
})
export class PersonModule { }
