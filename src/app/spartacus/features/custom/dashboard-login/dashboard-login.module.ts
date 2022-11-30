import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardLoginComponent} from './dashboard-login-component/dashboard-login.component';
import {CmsConfig, ConfigModule, I18nModule, UrlModule} from "@spartacus/core";
import {
  FormErrorsModule, IconModule,
  LayoutConfig,
  MediaModule,
  SpinnerModule
} from "@spartacus/storefront";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {LoginFormComponentService} from "@spartacus/user/account/components";
import {SharedModule} from "../../../../shared/shared.module";


@NgModule({
  declarations: [
    DashboardLoginComponent
  ],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      layoutSlots: {
        DashboardLoginTemplate: {
          slots: ['Section1'],
        },
      },
    } as LayoutConfig),
    ConfigModule.withConfig({
      cmsComponents: {
        NobiliaDashboardLoginComponent: {
          component: DashboardLoginComponent,
          providers: [
            {
              provide: LoginFormComponentService
            }]
        },
      },
    } as CmsConfig),
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
