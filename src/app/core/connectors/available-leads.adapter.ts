import {Injectable} from "@angular/core";
import {OccEndpointsService} from "@spartacus/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AvailableLeadsList} from "../../shared/models/available-leads.model";
import {map} from "rxjs/operators";


@Injectable()
export class AvailableLeadsAdapter {
  constructor(
    protected http: HttpClient,
    protected occEndpoints: OccEndpointsService,
  ) {}

  public loadAvailableLeads(
    userId: string,
    baseSiteId: string,
    pageSize?: number,
    currentPage?: number,
    sort?: string
  ): Observable<AvailableLeadsList> {
    const params: { [key: string]: string } = {};

    params['baseSiteId '] = baseSiteId.toString();

    if (pageSize) {
      params['pageSize'] = pageSize.toString();
    }
    if (currentPage) {
      params['currentPage'] = currentPage.toString();
    }
    if (sort) {
      params['sort'] = sort.toString();
    }

    const url = this.occEndpoints.buildUrl('availableLeads', {
      urlParams: { userId },
      queryParams: params,
    });

    return this.http
      .get<AvailableLeadsList>(url)
      .pipe(
        map((data:AvailableLeadsList) => {
          return data;
        })
      );
  }
}
