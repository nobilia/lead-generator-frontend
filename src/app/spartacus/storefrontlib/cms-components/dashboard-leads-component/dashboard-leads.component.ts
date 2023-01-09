import {Component, OnInit} from '@angular/core';
import {SseService} from "../../../services/sse.service";
import {OccEndpointsService} from "@spartacus/core";
import {UserAccountFacade} from "@spartacus/user/account/root";
import {BehaviorSubject, Observable} from "rxjs";
import {CustomUser} from "../../../models/user.model";
import {AvailableLeadsService} from "../../../services/available-leads.service";
import {AvailableLeadsList} from "../../../../shared/models/available-leads.model";
import {tap} from "rxjs/operators";
import {ICON_TYPE} from "../../../../shared";

@Component({
  selector: 'app-dashboard-leads.component',
  templateUrl: './dashboard-leads.component.html',
  styleUrls: ['./dashboard-leads.component.scss']
})
export class DashboardLeadsComponent implements OnInit {
  PAGE_SIZE = 15;
  expandImage = new BehaviorSubject(false);
  iconType = ICON_TYPE;

  user$: Observable<CustomUser | undefined> = this.userAccountService.get();

  availableLeads$: Observable<AvailableLeadsList | undefined> = this.availableLeadsService
    .getAvailableLeadsList(this.PAGE_SIZE)
    .pipe(
      tap((results: AvailableLeadsList | undefined) => {
        return results;
      })
    );

  constructor(
    private sseService: SseService,
    protected occEndpoints: OccEndpointsService,
    private userAccountService: UserAccountFacade,
    private availableLeadsService: AvailableLeadsService
  ) {
    this.availableLeadsService.loadAvailableLeadsList(this.PAGE_SIZE);
  }

  ngOnInit() {
    this.user$.subscribe((user) => {
      if (user) {
        let sessionId = localStorage.getItem('sessionId');
        const url = this.occEndpoints.buildUrl('availableLotsObserver', {
          queryParams: {sessionToken: user.sessionToken, sessionId: sessionId}
        });
        this.sseService
          .getServerSentEvent(url)
          .subscribe(message => console.log("available lots were changed. Id:" + message.data))
      }
    });
  }

  triggerZoom(value: boolean): void {
    this.expandImage.next(value);
  }
}
