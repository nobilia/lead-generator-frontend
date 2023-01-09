import { createSelector, MemoizedSelector } from '@ngrx/store';
import { StateUtils } from '@spartacus/core';
import {LeadsState, StateWithLeads} from "../leads-state";
import {AvailableLeadsList} from "../../../shared/models/available-leads.model";
import {getLeadState} from "./feature.selector";

export const getLeadsState: MemoizedSelector<
  StateWithLeads,
  StateUtils.LoaderState<AvailableLeadsList>
  > = createSelector(getLeadState, (state: LeadsState) => state.availableLeads);
