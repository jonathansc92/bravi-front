
import { IPersons } from "src/app/interfaces/persons.interface";

export interface IPersonsState {
    persons: IPersons[];
    isLoading: boolean;
}