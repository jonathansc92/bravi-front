import { Component, OnInit } from '@angular/core';
import { ContactsApiService } from '../services/contacts-api.service';
import { Contacts } from '../models/contacts.model';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ResponseReturnal } from '../models/responseReturnal.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class ContactsComponent implements OnInit {
  contacts: Contacts[];
  contact: Contacts;

  constructor(private ContactsApiService: ContactsApiService, private messageService: MessageService, private confirmationService: ConfirmationService) {
    this.contacts = [];
    this.contact = {};
  }

  ngOnInit(): void { }

  editContact(contact: Contacts) {
    this.contact = { ...contact };
  }

  saveContact(contactData: Contacts) {
    if (contactData.id) {
      this.ContactsApiService.update(contactData.id, contactData).subscribe((data: ResponseReturnal) => {
        this.messageService.add({ severity: 'success', summary: '', detail: data.message, life: 3000 });
        window.location.reload();
      }, err => {
        this.messageService.add({ severity: 'error  ', summary: '', detail: err.message, life: 3000 });
      })
    } else {
      this.ContactsApiService.create(contactData).subscribe((data: ResponseReturnal) => {
        this.messageService.add({ severity: 'success', summary: '', detail: data.message, life: 3000 });
        window.location.reload();
      }, err => {
        this.messageService.add({ severity: 'error  ', summary: '', detail: err.message, life: 3000 });
      })
    }

    this.contacts = [...this.contacts];
  }

  delete(id: number) {
    this.confirmationService.confirm({
      message: 'Deseja remover o contato?',
      header: 'Remover',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.ContactsApiService.delete(id).subscribe((data: ResponseReturnal) => {
          this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: data.message, life: 3000 });
          window.location.reload();
        }, err => {
          this.messageService.add({ severity: 'error  ', summary: '', detail: err.message, life: 3000 });
        })
      }
    });
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }
}