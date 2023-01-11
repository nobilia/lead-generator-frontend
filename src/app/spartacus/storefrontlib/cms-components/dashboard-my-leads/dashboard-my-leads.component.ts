import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {CustomUser} from "../../../models/user.model";
import {SseService} from "../../../services/sse.service";
import {OccEndpointsService} from "@spartacus/core";
import {UserAccountFacade} from "@spartacus/user/account/root";

@Component({
  selector: 'app-dashboard-my-leads',
  templateUrl: './dashboard-my-leads.component.html',
  styleUrls: ['./dashboard-my-leads.component.scss']
})
export class DashboardMyLeadsComponent implements OnInit {
  user$: Observable<CustomUser | undefined> = this.userAccountService.get();

  constructor(
    private sseService: SseService,
    protected occEndpoints: OccEndpointsService,
    private userAccountService: UserAccountFacade,
  ) {

  }

  ngOnInit(): void {
    this.user$.subscribe((user) => {
      if (user) {
        let sessionId = localStorage.getItem('sessionId');
        const url = this.occEndpoints.buildUrl('auctionResultsObserver', {
          queryParams: {sessionToken: user.sessionToken, sessionId: sessionId}
        });
        this.sseService
          .getServerSentEvent(url)
          .subscribe(message => console.log("my leads changed. Id:" + message.data))
      }
    });
  }

}
