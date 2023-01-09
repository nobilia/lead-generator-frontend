import {Component} from '@angular/core';
import {CmsDashboardMenuComponent} from "./dashboard-menu.model";
import {NavigationComponent, CmsComponentData, NavigationService} from "@spartacus/storefront";
import {Observable} from "rxjs";
import {User, UserAccountFacade} from "@spartacus/user/account/root";

@Component({
  selector: 'app-dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.scss']
})

export class DashboardMenuComponent extends NavigationComponent {

  data$: Observable<CmsDashboardMenuComponent> = this.componentData.data$;
  user$: Observable<User | undefined> = this.userAccountService.get();

   constructor(protected componentData: CmsComponentData<CmsDashboardMenuComponent>,
               protected service: NavigationService,
               private userAccountService: UserAccountFacade) {
    super(componentData, service);
   }
}
