import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardLoginComponent} from './dashboard-login-component/dashboard-login.component';
import {I18nModule, UrlModule} from "@spartacus/core";
import {
  FormErrorsModule, IconModule,
  MediaModule,
  SpinnerModule
} from "@spartacus/storefront";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../../../shared/shared.module";


@NgModule({
  declarations: [
    DashboardLoginComponent
  ],
  imports: [
    CommonModule,
    MediaModule,
    SpinnerModule,
    I18nModule,
    UrlModule,
    RouterModule,
    ReactiveFormsModule,
    FormErrorsModule,
    IconModule,
    SharedModule
  ]
})
export class DashboardLoginModule {
}
