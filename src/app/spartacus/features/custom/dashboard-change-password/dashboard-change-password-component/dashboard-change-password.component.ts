import {Component, HostBinding} from '@angular/core';
import {UpdatePasswordComponent, UpdatePasswordComponentService} from "@spartacus/user/profile/components";
import {ICON_TYPE} from "../../../../../shared";

@Component({
  selector: 'app-dashboard-change-password.component',
  templateUrl: './dashboard-change-password.component.html',
  styleUrls: ['./dashboard-change-password.component.scss']
})

export class DashboardChangePasswordComponent extends UpdatePasswordComponent {
  @HostBinding('class') classes = 'accountMainContent';
  constructor(protected service: UpdatePasswordComponentService) {
    super(service);
  }

  hideCurrPass = true;
  hideNewPass = true;
  hideConfirmPass = true;
  iconType = ICON_TYPE;
}
