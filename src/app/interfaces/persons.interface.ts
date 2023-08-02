import { IContacts } from "./contacts.interface";

export interface IPersons {
  id?: number;
  name?: string;
  contacts?: IContacts[];
}