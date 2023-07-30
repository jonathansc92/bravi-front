import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';

import { InputSwitchModule } from 'primeng/inputswitch';
import { ButtonModule } from 'primeng/button';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PersonsApiService } from './services/persons-api.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputSwitchModule,
    ButtonModule,
    HttpClientModule
  ],
  providers: [
    PersonsApiService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
