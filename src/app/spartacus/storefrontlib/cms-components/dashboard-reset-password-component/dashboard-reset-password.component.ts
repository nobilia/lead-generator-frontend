import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {CmsDashboardLoginComponent} from "../../../features/custom/dashboard-login/dashboard-login-component/dashboard-login.model";
import {ICON_TYPE} from "../../../../shared";
import {FormControl, FormGroup} from "@angular/forms";
import {CmsComponentData} from "@spartacus/storefront";

@Component({
  selector: 'app-dashboard-reset-password.component',
  templateUrl: './dashboard-reset-password.component.html',
  styleUrls: ['./dashboard-reset-password.component.scss']
})
export class DashboardResetPasswordComponent implements OnInit {

  data$: Observable<CmsDashboardLoginComponent> = this.component.data$;
  hide = true;
  iconType = ICON_TYPE;
  isUpdating$: import("rxjs").Observable<boolean> | undefined;
  form: FormGroup;

  constructor(protected component: CmsComponentData<CmsDashboardLoginComponent>) {
    this.form = new FormGroup({
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
