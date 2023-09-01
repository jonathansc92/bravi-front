import { createAction, props } from "@ngrx/store";
import { IPersons } from "src/app/interfaces/persons.interface";

const prefix = '[PERSONS]';

export const enum personsTypeAction {
    LOAD_PERSONS = `[LOAD_${prefix}] LOAD ${prefix}`,
    LOAD_PERSONS_SUCCESS = `[LOAD_${prefix}_SUCCESS] LOAD ${prefix} SUCCESS`,
    LOAD_PERSONS_FAIL = `[LOAD_${prefix}_FAIL] LOAD ${prefix} FAIL`,

    CREATE_PERSONS = `[CREATE_${prefix}] CREATE ${prefix}`,
    CREATE_PERSONS_SUCCESS = `[CREATE_${prefix}_SUCCESS] CREATE ${prefix} SUCCESS`,
    CREATE_PERSONS_FAIL = `[CREATE_${prefix}_FAIL] CREATE ${prefix} FAIL`,

    UPDATE_PERSONS = `[UPDATE_${prefix}] UPDATE ${prefix}`,
    UPDATE_PERSONS_SUCCESS = `[UPDATE_${prefix}_SUCCESS] UPDATE ${prefix} SUCCESS`,
    UPDATE_PERSONS_FAIL = `[UPDATE_${prefix}_FAIL] UPDATE ${prefix} FAIL`,

    DELETE_PERSONS = `[DELETE_${prefix}] DELETE ${prefix}`,
    DELETE_PERSONS_SUCCESS = `[DELETE_${prefix}_SUCCESS] DELETE ${prefix} SUCCESS`,
    DELETE_PERSONS_FAIL = `[DELETE_${prefix}_FAIL] DELETE ${prefix} FAIL`,
}

// Load Persons 
export const LoadPersons = createAction(
    personsTypeAction.LOAD_PERSONS,
);

export const LoadPersosSuccess = createAction(
    personsTypeAction.LOAD_PERSONS_SUCCESS,
    props<{ payload: IPersons[] }>()
);

export const LoadPersosFail = createAction(
    personsTypeAction.LOAD_PERSONS_FAIL,
    props<{ error: string }>()
);

// Create Persons 
export const CreatePersons = createAction(
    personsTypeAction.CREATE_PERSONS,
    props<{ payload: IPersons }>()
);

export const CreatePersosSuccess = createAction(
    personsTypeAction.CREATE_PERSONS_SUCCESS,
    props<{ payload: IPersons }>()
);

export const CreatePersosFail = createAction(
    personsTypeAction.CREATE_PERSONS_FAIL,
    props<{ error: string }>()
);

// Update Persons 
export const UpdatePersons = createAction(
    personsTypeAction.UPDATE_PERSONS,
    props<{ payload: IPersons }>()
);

export const UpdatePersosSuccess = createAction(
    personsTypeAction.UPDATE_PERSONS_SUCCESS,
    props<{ payload: IPersons }>()
);

export const UpdatePersosFail = createAction(
    personsTypeAction.UPDATE_PERSONS_FAIL,
    props<{ error: string }>()
);

// Delete Persons 
export const DeletePersons = createAction(
    personsTypeAction.DELETE_PERSONS,
    props<{ payload: number }>()
);

export const DeletePersosSuccess = createAction(
    personsTypeAction.DELETE_PERSONS_SUCCESS,
    props<{ payload: number }>()
);

export const DeletePersosFail = createAction(
    personsTypeAction.DELETE_PERSONS_FAIL,
    props<{ error: string }>()
);

