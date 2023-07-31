import { IPersons } from "./persons.interface";

export class Persons {
    public id?: any;
    public name?: string;

    constructor(data: IPersons) {
      Object.assign(this, data);
    }
}