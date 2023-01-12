import {AvailableLeadsList} from "../../shared/models/available-leads.model";
import {AvailableLeadsAdapter} from "./available-leads.adapter";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable()
export class AvailableLeadsConnector {
  constructor(protected adapter: AvailableLeadsAdapter) {}

  public getAvailableLeads(
    userId: string,
    pageSize?: number,
    currentPage?: number,
    sort?: string
  ): Observable<AvailableLeadsList> {
    return this.adapter.loadAvailableLeads(userId, pageSize, currentPage, sort);
  }
}
