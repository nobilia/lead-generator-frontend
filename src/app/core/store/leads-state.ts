import {AvailableLeadsList} from "../../shared/models/available-leads.model";
import {StateUtils} from "@spartacus/core";

export const LEADS_FEATURE = 'leads';

export const LEADS = '[Leads] Leads';
export const AVAILABLE_LEADS = '[Leads] Available Leads';

export interface StateWithLeads {
  [LEADS_FEATURE]: LeadsState;
}

export interface LeadsState {
  availableLeads: StateUtils.LoaderState<AvailableLeadsList>;
}
