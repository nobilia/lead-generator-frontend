import {StateUtils} from "@spartacus/core";
import {InjectionToken, Provider} from "@angular/core";
import {ActionReducerMap} from "@ngrx/store";
import {LEADS, LeadsState} from "../leads-state";
import * as fromAvailableLeadsReducer from './available-leads.reducer';
import {AvailableLeadsList} from "../../../shared/models/available-leads.model";

export function getReducers(): ActionReducerMap<LeadsState, any> {
  return {
    availableLeads: StateUtils.loaderReducer<AvailableLeadsList, any>(
      LEADS,
      fromAvailableLeadsReducer.reducer
    ),
  };
}

export const reducerToken: InjectionToken<ActionReducerMap<LeadsState>> =
  new InjectionToken<ActionReducerMap<LeadsState>>('LeadsReducers');

export const reducerProvider: Provider = {
  provide: reducerToken,
  useFactory: getReducers,
};
