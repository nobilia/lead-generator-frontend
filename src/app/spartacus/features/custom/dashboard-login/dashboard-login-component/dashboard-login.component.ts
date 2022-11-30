import {Component} from '@angular/core';
import {LoginFormComponent, LoginFormComponentService} from "@spartacus/user/account/components";
import {CmsDashboardLoginComponent} from "./dashboard-login.model";
import {CmsComponentData} from "@spartacus/storefront";
import {Observable} from "rxjs";
import {ICON_TYPE} from '../../../../../shared/index'

@Component({
  selector: 'app-dashboard-login',
  templateUrl: './dashboard-login.component.html',
  styleUrls: ['./dashboard-login.component.scss']
})

export class DashboardLoginComponent extends LoginFormComponent {

  constructor(protected service: LoginFormComponentService, protected component: CmsComponentData<CmsDashboardLoginComponent>) {
    super(service);
  }

  data$: Observable<CmsDashboardLoginComponent> = this.component.data$;
  hide = true;
  iconType = ICON_TYPE;
}
