import { createAction, props } from "@ngrx/store";
import { IPersons } from "src/app/interfaces/persons.interface";

const prefix = '[Persons]';

export const getPersons = createAction(`${prefix} Get Persons`);
export const getPersonsSuccess = createAction(
    `${prefix} Get Persons Success`,
    props<{
        persons: IPersons[];
    }>()
);
export const getPersonsError = createAction(
    `${prefix} Get Persons Error`
)