import { Action, createReducer, on } from "@ngrx/store";
import { IPersonsState } from "./persons.state";
import * as fromPersonsAction from "./persons.actions";

export const initialState: IPersonsState = {
    persons: [],
};

const _personsReducer = createReducer(
    initialState,
    on(fromPersonsAction.LoadPersosSuccess, (state, { payload }) => ({
        ...state,
        persons: payload,
        error: '',
    })),
    on(fromPersonsAction.LoadPersosFail, (state, { error }) => ({
        ...state,
        error: error,
    })),

    on(fromPersonsAction.CreatePersosSuccess, (state, { payload }) => ({
        ...state,
        persons: [...state.persons, payload],
        error: '',
    })),
    on(fromPersonsAction.CreatePersosFail, (state, { error }) => ({
        ...state,
        error: error,
    })),

    on(fromPersonsAction.UpdatePersosSuccess, (state, { payload }) => ({
        ...state,
        persons: [...state.persons].map((row) => {
            if (row.id == payload.id) {
                return payload;
            }

            return row;
        }),
        error: '',
    })),
    on(fromPersonsAction.UpdatePersosFail, (state, { error }) => ({
        ...state,
        error: error,
    })),

    on(fromPersonsAction.DeletePersosSuccess, (state, { payload }) => ({
        ...state,
        persons: [...state.persons].filter((filter) => filter.id != payload),
        error: '',
    })),
    on(fromPersonsAction.DeletePersosFail, (state, { error }) => ({
        ...state,
        error: error,
    })),
)

export function personsReducer(state = initialState, action: Action) {
    return _personsReducer(state, action);
}