import { ActionReducerMap } from '@ngrx/store';
import { IPersonsState } from './persons/persons.state';
import { personsReducer } from './persons/persons.reducer';
import { PersonsEffect } from './persons/persons.effect';

export interface AppState {
    persons: IPersonsState,
}

export const appReducer: ActionReducerMap<AppState> = {
    persons: personsReducer,
}

export const appEffects = [
    PersonsEffect,
]