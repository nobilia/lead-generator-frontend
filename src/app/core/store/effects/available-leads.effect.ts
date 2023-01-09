import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { normalizeHttpError } from '@spartacus/core';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  AvailableLeadsConnector,
} from '../../connectors/index';
import {LeadsActions} from '../actions/index';
import {AvailableLeadsList} from "../../../shared/models/available-leads.model";

@Injectable()
export class AvailableLeadsEffect {
  constructor(
    private actions$: Actions,
    private leadsConnector: AvailableLeadsConnector,
  ) {}

  loadAvailableLeads$: Observable<LeadsActions.AvailableLeadsAction> = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LeadsActions.LOAD_AVAILABLE_LEADS),
        map((action: LeadsActions.LoadAvailableLeads) => action.payload),
        switchMap((payload) => {
          return this.leadsConnector.getAvailableLeads(
            payload.userId,
            payload.baseSiteId,
            payload.pageSize,
            payload.currentPage,
            payload.sort
          )
            .pipe(
              map((results: AvailableLeadsList) => {
                return new LeadsActions.LoadAvailableLeadsSuccess(results);
              }),
              catchError((error) => of(new LeadsActions.LoadAvailableLeadsFail(normalizeHttpError(error)))
              )
            );
        })
      )
  );
}
