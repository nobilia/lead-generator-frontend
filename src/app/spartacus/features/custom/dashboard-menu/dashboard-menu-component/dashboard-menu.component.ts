import {Component} from '@angular/core';
import {CmsDashboardMenuComponent} from "./dashboard-menu.model";
import {NavigationComponent, CmsComponentData, NavigationService} from "@spartacus/storefront";
import {Observable} from "rxjs";

@Component({
  selector: 'app-dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.scss']
})

export class DashboardMenuComponent extends NavigationComponent {

  data$: Observable<CmsDashboardMenuComponent> = this.componentData.data$;
  user: string = 'dashboard_dummyuser@dummy.com'

   constructor(protected componentData: CmsComponentData<CmsDashboardMenuComponent>, protected service: NavigationService) {
    super(componentData, service);
   }
}
