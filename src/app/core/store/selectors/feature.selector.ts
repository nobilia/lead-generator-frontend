import { createFeatureSelector, MemoizedSelector } from '@ngrx/store';
import {LEADS_FEATURE, LeadsState, StateWithLeads} from "../leads-state";

export const getLeadState: MemoizedSelector<StateWithLeads, LeadsState> =
  createFeatureSelector<LeadsState>(LEADS_FEATURE);
