import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IPersonsState } from './persons.state';

const getFeaturePersonsState = createFeatureSelector<IPersonsState>('persons');

export const getPersons = createSelector(
    getFeaturePersonsState,
    (state: IPersonsState) => state.persons,
)