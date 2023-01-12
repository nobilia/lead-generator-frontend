import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardChangePasswordComponent } from "./dashboard-change-password-component/dashboard-change-password.component";
import {FormErrorsModule, IconModule, SpinnerModule} from "@spartacus/storefront";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {I18nModule} from "@spartacus/core";
import {SharedModule} from "../../../../shared/shared.module";



@NgModule({
  declarations: [
    DashboardChangePasswordComponent
  ],
  imports: [
    CommonModule,
    SpinnerModule,
    FormErrorsModule,
    ReactiveFormsModule,
    FormsModule,
    I18nModule,
    SharedModule,
    IconModule
  ]
})
export class DashboardChangePasswordModule { }
