import { Component, OnInit } from '@angular/core';
import { PersonsApiService } from '../services/persons-api.service';
import { Persons } from '../models/persons.model';
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class PersonsComponent implements OnInit {
  persons: Persons[];
  person: Persons;
  selectedPersons!: Persons[] | null;

  loading: boolean = true;
  btnLoading: boolean = false;
  personDialog: boolean = false;
  submitted: boolean = false;

  constructor(private personsApiService: PersonsApiService, private messageService: MessageService, private confirmationService: ConfirmationService) {
    this.persons = [];
    this.person = {
      id: any,
      name: ''
    };

    this.getPersons();
  }

  ngOnInit(): void { }

  getPersons() {
    this.personsApiService.getPersons().subscribe(data => {
      this.persons = data.data;
      this.loading = false;
      console.log(this.persons)
    }, err => {
      console.log(err)
    })
  }

  getEventValue($event: any): string {
    return $event.target.value;
  }

  clear(table: Table) {
    table.clear();
  }

  openNew() {
    this.person = {
      id: 0,
      name: ''
    };
    this.submitted = false;
    this.personDialog = true;
  }

  deleteSelectedPersons() {
    // this.confirmationService.confirm({
    //     message: 'Are you sure you want to delete the selected products?',
    //     header: 'Confirm',
    //     icon: 'pi pi-exclamation-triangle',
    //     accept: () => {
    //         this.persons = this.products.filter((val) => !this.selectedProducts?.includes(val));
    //         this.selectedProducts = null;
    //         this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
    //     }
    // });
  }

  hideDialog() {
    this.personDialog = false;
    this.submitted = false;
  }

  savePerson() {
    this.submitted = true;
    this.btnLoading = true;
    console.log(this.person)
    // if (this.person.name?.trim()) {
    //   if (this.person.id) {
    //     // this.persons[this.findIndexById(this.person.id)] = this.person;
    //   } else {
    //     this.person.id = this.createId();
    //     this.persons.push(this.person);
    //     this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
    //   }

    this.personsApiService.create(this.person).subscribe(data => {
      console.log(data)
      this.persons = [...this.persons];
      this.personDialog = false;
      this.messageService.add({ severity: 'success', summary: '', detail: 'Salvo', life: 3000 });
      this.btnLoading = false;
    }, err => {
      console.log(err)
      this.messageService.add({ severity: 'error  ', summary: '', detail: 'Salvo', life: 3000 });
      this.btnLoading = false;
    })


  }

  // findIndexById(id: string): number {
  //   let index = -1;
  //   for (let i = 0; i < this.persons.length; i++) {
  //     if (this.persons[i].id === id) {
  //       index = i;
  //       break;
  //     }
  //   }
  //   return index;
  // }

  // createId(): string {
  //   let id = '';
  //   var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  //   for (var i = 0; i < 5; i++) {
  //     id += chars.charAt(Math.floor(Math.random() * chars.length));
  //   }
  //   return id;
  // }
}
