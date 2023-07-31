import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';

import { InputSwitchModule } from 'primeng/inputswitch';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PersonsApiService } from './services/persons-api.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InputSwitchModule,
    ButtonModule,
    HttpClientModule,
    TableModule,
    InputTextModule,
    ToolbarModule,
    DialogModule,
    ConfirmDialogModule,
    FormsModule,
    ToastModule
  ],
  providers: [
    PersonsApiService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
