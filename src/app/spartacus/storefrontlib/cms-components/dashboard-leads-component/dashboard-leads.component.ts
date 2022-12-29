import {Component, OnInit} from '@angular/core';
import {SseService} from "../../../services/sse.service";
import {OccEndpointsService} from "@spartacus/core";
import {UserAccountFacade} from "@spartacus/user/account/root";
import {Observable} from "rxjs";
import {CustomUser} from "../../../models/user.model";

@Component({
  selector: 'app-dashboard-leads.component',
  templateUrl: './dashboard-leads.component.html',
  styleUrls: ['./dashboard-leads.component.scss']
})
export class DashboardLeadsComponent implements OnInit {

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
        const url = this.occEndpoints.buildUrl('availableLeadsObserver', {
          queryParams: {sessionToken: user.sessionToken}
        });
        this.sseService
          .getServerSentEvent(url)
          .subscribe(message => console.log(message.data));
      }
    });
  }

}
