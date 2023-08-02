import { Component, OnInit } from '@angular/core';
import { IPersons } from '../interfaces/persons.interface';
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';
import { IContacts } from '../interfaces/contacts.interface';
import { Store, select } from '@ngrx/store';
import { selectBooks } from 'src/app/store/persons/persons.selectors';
import { Observable } from 'rxjs';
import { getPersons } from '../store/persons/persons.actions';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class PersonsComponent implements OnInit {
  persons$: Observable<IPersons[]>;
  contact: IContacts;

  selectedPersons!: IPersons[] | null;

  loading: boolean = true;
  btnLoading: boolean = false;

  personDialog: boolean = false;
  contactDialog: boolean = false;

  submitted: boolean = false;
  submittedContact: boolean = false;

  constructor(private store: Store, private messageService: MessageService, private confirmationService: ConfirmationService) {
    this.store.dispatch(getPersons());
    this.persons$ = this.store.pipe(select(selectBooks));
    this.contact = {};
  }

  ngOnInit(): void {
    this.getPersons();
  }

  getEventValue($event: any): string {
    return $event.target.value;
  }

  clear(table: Table) {
    table.clear();
  }

  hideDialog() {
    this.personDialog = false;
    this.contactDialog = false;
    this.submitted = false;
  }

  openNew() {
    this.submitted = false;
    this.personDialog = true;
  }

  editPerson(person: IPersons) {
    // this.person = { ...person };
    this.personDialog = true;
  }

  openNewContact(personId: number) {
    this.contact = {};
    this.submitted = false;
    this.contactDialog = true;
  }

  editContact(contact: IContacts) {
    this.contact = { ...contact };
    this.contactDialog = true;
  }

  saveContact() {
    // this.contact.person_id = this.person.id;
    // if (this.contact.id) {
    //   this.contactsApiService.update(this.contact.id, this.contact).subscribe((data: ResponseReturnal) => {
    //     this.persons[this.findIndexById(this.person.id)] = this.person;

    //     this.messageService.add({ severity: 'success', summary: '', detail: data.message, life: 3000 });
    //     this.persons.push(data.data);

    //     this.personDialog = false;
    //     this.persons = [...this.persons];
    //   }, err => {
    //     this.messageService.add({ severity: 'error  ', summary: '', detail: err.message, life: 3000 });
    //   })
    // } else {
    //   this.contactsApiService.create(this.contact).subscribe((data: ResponseReturnal) => {
    //     this.messageService.add({ severity: 'success', summary: '', detail: data.message, life: 3000 });
    //     window.location.reload();
    //   }, err => {
    //     this.messageService.add({ severity: 'error  ', summary: '', detail: err.message, life: 3000 });
    //   })
    // }

    // this.contacts = [...this.contacts];
  }

  deleteContact(id: number) {
    // this.contactComponent.delete(id);
  }

  getPersons() {
    // this.personsApiService.getPersons().subscribe(data => {
    //   this.persons = data.data;
    //   this.loading = false;
    // }, err => {
    //   this.messageService.add({ severity: 'error  ', summary: 'Erro', detail: err.message, life: 3000 });
    // })
  }

  savePerson() {
    // this.submitted = true;
    // this.btnLoading = true;

    // if (this.person?.name) {
    //   if (this.person.id) {
    //     this.personsApiService.update(this.person.id, this.person).subscribe((data: ResponseReturnal) => {
    //       this.persons[this.findIndexById(this.person.id)] = this.person;
    //       this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: data.message, life: 3000 });
    //       this.persons.push(data.data);

    //       this.personDialog = false;
    //       this.persons = [...this.persons];
    //     }, err => {
    //       this.messageService.add({ severity: 'error  ', summary: 'Erro', detail: err.message, life: 3000 });

    //       this.btnLoading = false;
    //     })
    //   } else {
    //     this.personsApiService.create(this.person).subscribe((data: ResponseReturnal) => {
    //       this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: data.message, life: 3000 });
    //       this.persons.push(data.data);
    //       this.personDialog = false;
    //       this.persons = [...this.persons];
    //     }, err => {
    //       this.messageService.add({ severity: 'error  ', summary: 'Erro', detail: err.message, life: 3000 });
    //     })
    //   }
    // } else {
    //   this.messageService.add({ severity: 'error  ', summary: 'Erro', detail: 'Campo nome é obrigatório', life: 3000 });
    // }

    // this.btnLoading = false;
  }

  delete(id: number) {
    // this.confirmationService.confirm({
    //   message: 'Deseja remover a pessoa?',
    //   header: 'Remover',
    //   icon: 'pi pi-exclamation-triangle',
    //   accept: () => {
    //     this.personsApiService.delete(id).subscribe((data: ResponseReturnal) => {
    //       this.persons = this.persons.filter((val) => val.id !== id);
    //       this.person = {};
    //       this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: data.message, life: 3000 });
    //     }, err => {
    //       this.messageService.add({ severity: 'error  ', summary: 'Erro', detail: err.message, life: 3000 });
    //     })
    //   }
    // });
  }

  findIndexById(id: string): number {
    return 1;
    // let index = -1;
    // for (let i = 0; i < this.persons.length; i++) {
    //   if (this.persons[i].id === id) {
    //     index = i;
    //     break;
    //   }
    // }
    // return index;
  }
}
