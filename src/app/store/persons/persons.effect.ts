import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { PersonsApiService } from 'src/app/services/persons-api.service';
import * as fromPersonsAction from './persons.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class PersonsEffect {
    constructor(
        private actions$: Actions,
        private personsApiService: PersonsApiService
    ) { }

    loadPersons$ = createEffect(
        () => this.actions$.pipe(
            ofType(fromPersonsAction.personsTypeAction.LOAD_PERSONS),
            exhaustMap(() =>
                this.personsApiService.getPersons()
                    .pipe(
                        map(payload =>
                            fromPersonsAction.LoadPersosSuccess({ payload }),
                            catchError(error => of(fromPersonsAction.LoadPersosFail({ error })))
                        ),
                    )
            )
        )
    )

    // createPerson$ = createEffect(
    //     () => this.actions$.pipe(
    //         ofType(fromPersonsAction.personsTypeAction.CREATE_PERSONS),
    //         exhaustMap((record: any) =>
    //             this.personsApiService.create(record.payload)
    //                 .pipe(
    //                     map(payload =>
    //                         fromPersonsAction.CreatePersosSuccess({ payload }),
    //                         catchError(error => of(fromPersonsAction.CreatePersosFail({ error })))
    //                     ),
    //                 )
    //         )
    //     )
    // )

    // updatePerson$ = createEffect(
    //     () => this.actions$.pipe(
    //         ofType(fromPersonsAction.personsTypeAction.UPDATE_PERSONS),
    //         exhaustMap((record: any) =>
    //             this.personsApiService.update(record.payload)
    //                 .pipe(
    //                     map(payload =>
    //                         fromPersonsAction.UpdatePersosSuccess({ payload }),
    //                         catchError(error => of(fromPersonsAction.UpdatePersosFail({ error })))
    //                     ),
    //                 )
    //         )
    //     )
    // )

    deletePerson$ = createEffect(
        () => this.actions$.pipe(
            ofType(fromPersonsAction.personsTypeAction.DELETE_PERSONS),
            exhaustMap((record: any) =>
                this.personsApiService.delete(record.payload)
                    .pipe(
                        map(() =>
                            fromPersonsAction.DeletePersosSuccess({ payload: record.payload }),
                            catchError(error => of(fromPersonsAction.DeletePersosFail({ error })))
                        ),
                    )
            )
        )
    )
}