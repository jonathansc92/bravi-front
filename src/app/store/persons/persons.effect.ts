import { Injectable } from '@angular/core';

import { createEffect, Actions, ofType } from '@ngrx/effects';

import { getPersons, getPersonsError, getPersonsSuccess } from './persons.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { IPersons } from 'src/app/interfaces/persons.interface';
import { PersonsApiService } from 'src/app/services/persons-api.service';

import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PersonsEffect {
    constructor(
        private actions$: Actions,
        private personsApiService: PersonsApiService
    ) { }

    getPersons = createEffect(
        () => this.actions$.pipe(
            ofType(getPersons),
            switchMap(() =>
                this.personsApiService.getPersons()
            ),
            map((persons: IPersons[]) => getPersonsSuccess({ persons })),
            catchError(error => of(getPersonsError()))
        )
    )
}