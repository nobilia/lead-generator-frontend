import { StateUtils } from '@spartacus/core';
import {AVAILABLE_LEADS} from "../leads-state";
import {AvailableLeadsList} from "../../../shared/models/available-leads.model";


export const LOAD_AVAILABLE_LEADS = '[Leads] Load Available Leads';
export const LOAD_AVAILABLE_LEADS_FAIL = '[Leads] Load Available Leads Fail';
export const LOAD_AVAILABLE_LEADS_SUCCESS = '[Leads] Load Available Leads Success';
export const CLEAR_AVAILABLE_LEADS = '[Leads] Clear Available Leads';

export class LoadAvailableLeads extends StateUtils.LoaderLoadAction {
  readonly type = LOAD_AVAILABLE_LEADS;
  constructor(public payload: {
    userId: string,
    pageSize?: number,
    currentPage?: number,
    sort?: string
  }) {
    super(AVAILABLE_LEADS);
  }
}

export class LoadAvailableLeadsFail extends StateUtils.LoaderFailAction {
  readonly type = LOAD_AVAILABLE_LEADS_FAIL;
  constructor(public payload: any) {
    super(AVAILABLE_LEADS, payload);
  }
}

export class LoadAvailableLeadsSuccess extends StateUtils.LoaderSuccessAction {
  readonly type = LOAD_AVAILABLE_LEADS_SUCCESS;
  constructor(public payload: AvailableLeadsList) {
    super(AVAILABLE_LEADS);
  }
}

export class ClearAvailableLeads extends StateUtils.LoaderResetAction {
  readonly type = CLEAR_AVAILABLE_LEADS;
  constructor() {
    super(AVAILABLE_LEADS);
  }
}

export type AvailableLeadsAction =
  LoadAvailableLeads
  | LoadAvailableLeadsFail
  | LoadAvailableLeadsSuccess
  | ClearAvailableLeads;
