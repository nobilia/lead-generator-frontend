import { Injectable } from '@angular/core';
import {StateWithLeads} from "../../core/store/leads-state";
import {map} from "rxjs/operators";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {AvailableLeadsList} from "../../shared/models/available-leads.model";
import {LeadsActions} from "../../core/store/actions";
import {LeadsSelectors} from "../../core/store/selectors";
import {UserIdService} from "@spartacus/core";

@Injectable({
  providedIn: 'root'
})
export class AvailableLeadsService {

  constructor(
    protected store: Store<StateWithLeads>,
    protected userIdService: UserIdService
  ) {}

  getAvailableLeadsList(
    pageSize: number
  ): Observable<AvailableLeadsList | undefined> {
    return this.store.pipe(
      select(LeadsSelectors.getLeadsState),
      map((orderListState) => orderListState.value)
    );
  }

  loadAvailableLeadsList(pageSize: number, currentPage?: number, sort?: string): void {
    const baseSiteId = 'lead-gen-dashboard';

    this.userIdService.takeUserId(true).subscribe(
    (userId) => {
      this.store.dispatch(
        new LeadsActions.LoadAvailableLeads({
          userId,
          baseSiteId,
          pageSize,
          currentPage,
          sort,
        })
      );
    });
  }
}
