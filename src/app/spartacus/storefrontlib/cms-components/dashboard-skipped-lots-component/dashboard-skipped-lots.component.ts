import {Component, OnInit} from '@angular/core';
import {SseService} from "../../../services/sse.service";
import {OccEndpointsService} from "@spartacus/core";
import {UserAccountFacade} from "@spartacus/user/account/root";
import {Observable} from "rxjs";
import {CustomUser} from "../../../models/user.model";

@Component({
  selector: 'app-dashboard-skipped-lots.component',
  templateUrl: './dashboard-skipped-lots.component.html',
  styleUrls: ['./dashboard-skipped-lots.component.scss']
})
export class DashboardSkippedLotsComponent implements OnInit {

  constructor(
    private sseService: SseService,
    protected occEndpoints: OccEndpointsService,
    private userAccountService: UserAccountFacade
  ) {
  }

  user$: Observable<CustomUser | undefined> = this.userAccountService.get();

  ngOnInit() {

    this.user$.subscribe((user) => {
      if (user) {
        let sessionId = localStorage.getItem('sessionId');

        const skippedLotsObserverUrl = this.occEndpoints.buildUrl('skippedLotsObserver', {
          queryParams: {sessionToken: user.sessionToken, sessionId: sessionId}
        });
        this.sseService
          .getServerSentEvent(skippedLotsObserverUrl)
          .subscribe(message => console.log("skipped lots were changed. Id:" + message.data));
      }
    });
  }
}
