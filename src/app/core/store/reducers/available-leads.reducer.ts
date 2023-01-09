import {AvailableLeadsList} from "../../../shared/models/available-leads.model";
import {LeadsActions} from "../actions";

export const initialState: AvailableLeadsList = {
  results: [],
  pagination: {},
  sorts: [],
};

export function reducer(
  state = initialState,
  action: LeadsActions.AvailableLeadsAction
): AvailableLeadsList {
  switch (action.type) {
    case LeadsActions.LOAD_AVAILABLE_LEADS_SUCCESS: {
      return action.payload ? action.payload : initialState;
    }
    case LeadsActions.LOAD_AVAILABLE_LEADS_FAIL: {
      return initialState;
    }
  }

  return state;
}
