import {Injectable} from "@angular/core";
import {OccConfig, OccEndpointsService} from "@spartacus/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AvailableLeadsList} from "../../shared/models/available-leads.model";
import {map} from "rxjs/operators";


@Injectable()
export class AvailableLeadsAdapter {
  constructor(
    protected http: HttpClient,
    protected occEndpoints: OccEndpointsService,
    protected config: OccConfig
  ) {}

  public loadAvailableLeads(
    userId: string,
    pageSize?: number,
    currentPage?: number,
    sort?: string
  ): Observable<AvailableLeadsList> {
    const params: { [key: string]: string } = {};

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
          const newData:AvailableLeadsList = new Object(data)
          newData.results?.forEach((item) => {
            const link = item.detailsMediaLink;
            item.detailsMediaLink = (this.config.backend?.media?.baseUrl ||
                                     this.config.backend?.occ?.baseUrl ||
                                     '') + link;
          });
          return newData;
        })
      );
  }
}
