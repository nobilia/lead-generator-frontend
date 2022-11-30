import {Component} from '@angular/core';
// import {LoginFormComponent, LoginFormComponentService} from "@spartacus/user/account/components";
import {CmsDashboardMenuComponent} from "./dashboard-menu.model";
import {NavigationComponent, CmsComponentData, NavigationService, NavigationNode} from "@spartacus/storefront";
import {Observable} from "rxjs";
import { EMPTY, empty, of } from "rxjs";

@Component({
  selector: 'app-dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.scss']
})

export class DashboardMenuComponent extends NavigationComponent {

   additionalNode$: Observable<NavigationNode>;

   constructor(protected componentData: CmsComponentData<CmsDashboardMenuComponent>, protected service: NavigationService) {
    super(componentData, service);
    this.additionalNode$ = service.createNavigation(this.componentData.data$); //TODO: get additional node
   }

  data$: Observable<CmsDashboardMenuComponent> = this.componentData.data$;

}
