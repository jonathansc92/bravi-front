import { createReducer, on } from "@ngrx/store";
import { IPersonsState } from "./persons.state";
import { getPersons, getPersonsSuccess, getPersonsError } from "./persons.actions";

export const initialState: IPersonsState = {
    persons: [],
    isLoading: false
};

export const personsLstReducer = createReducer(
    initialState,
    on(getPersons, (state) => ({
        ...state,
        isLoading: true
    })),
    on(getPersonsSuccess, (state, { persons }) => ({
        ...state,
        persons,
        isLoading: false
    })),
    on(getPersonsError, (state) => ({
        ...state,
        isLoading: false
    }))
)