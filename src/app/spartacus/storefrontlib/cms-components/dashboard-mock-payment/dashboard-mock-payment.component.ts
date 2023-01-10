import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {OccEndpointsService, RoutingService} from "@spartacus/core";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {UserAccountFacade} from "@spartacus/user/account/root";
import {CustomUser} from "../../../models/user.model";

@Component({
  selector: 'app-dashboard-mock-payment',
  templateUrl: './dashboard-mock-payment.component.html',
  styleUrls: ['./dashboard-mock-payment.component.scss']
})
export class DashboardMockPaymentComponent {

  productCode$: Observable<string>;
  user$: Observable<CustomUser | undefined> = this.userAccountService.get();


  constructor(
    protected http: HttpClient,
    protected occEndpoints: OccEndpointsService,
    protected routingService: RoutingService,
    protected userAccountService: UserAccountFacade
    ,
  ) {
    this
      .productCode$ = this.routingService.getRouterState().pipe(
      map((routingData) => routingData.state.queryParams.productCode)
    );
  }


  performFailedPayment() {
    this.productCode$.subscribe(code => {
      const url = this.occEndpoints.buildUrl('cancelLotRetention', {
        urlParams: {lotCode: code}
      });
      this.http.post<any>(url, null).pipe(
        map((data: string) => {
          return data
        })
      ).subscribe(() => this.openHomePage());
    });
  }


  performSuccessPayment() {
    //TODO: fix problem with sending several requests to the  finishLotAuction url
    this.user$.subscribe((user) => {

      this.productCode$.subscribe(code => {
        const url = this.occEndpoints.buildUrl('finishLotAuction', {
          urlParams: {lotCode: code, userId: user?.uid}
        });
        this.http.post<any>(url, null).pipe(
          map((data: string) => {
            return data
          })
        ).subscribe(() => this.openHomePage());
      });
    });

  }


  openHomePage() {
    this.routingService.goByUrl('/');
  }


}
