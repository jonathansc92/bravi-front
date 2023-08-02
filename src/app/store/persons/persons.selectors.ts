import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IPersonsState } from './persons.state';

const getPersonsState = createFeatureSelector<IPersonsState>('persons');

export const selectBooks = createSelector(
    getPersonsState,
    (state: IPersonsState) => state.persons
);

export const getPersonsLoading = createSelector(
    getPersonsState,
    (state: IPersonsState) => state.isLoading
);