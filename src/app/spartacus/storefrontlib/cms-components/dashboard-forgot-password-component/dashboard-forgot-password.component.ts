import { Component, OnInit } from '@angular/core';
import {CmsComponentData} from "@spartacus/storefront";
import {CmsDashboardLoginComponent} from "../../../features/custom/dashboard-login/dashboard-login-component/dashboard-login.model";
import {Observable} from "rxjs";
import {ICON_TYPE} from "../../../../shared";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-dashboard-forgot-password.component',
  templateUrl: './dashboard-forgot-password.component.html',
  styleUrls: ['./dashboard-forgot-password.component.scss']
})
export class DashboardForgotPasswordComponent implements OnInit {

  data$: Observable<CmsDashboardLoginComponent> = this.component.data$;
  hide = true;
  iconType = ICON_TYPE;
  isUpdating$: import("rxjs").Observable<boolean> | undefined;
  form: FormGroup;

  constructor(protected component: CmsComponentData<CmsDashboardLoginComponent>) {
    this.form = new FormGroup({
      userId: new FormControl(''),
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
