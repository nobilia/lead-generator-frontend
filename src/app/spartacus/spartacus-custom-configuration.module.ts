import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CmsConfig, ConfigModule} from "@spartacus/core";
import {LayoutConfig, NavigationService} from "@spartacus/storefront";
import {
  DashboardLoginComponent
} from "./features/custom/dashboard-login/dashboard-login-component/dashboard-login.component";
import {LoginFormComponentService} from "@spartacus/user/account/components";
import {
  DashboardMenuComponent
} from "./features/custom/dashboard-menu/dashboard-menu-component/dashboard-menu.component";


@NgModule({
  declarations: [],
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
    ConfigModule.withConfig({
      layoutSlots: {
        DashboardPageTemplate: {
          slots: [
            'NavigationMenu',
            'MainContent',
          ]
        },
      },
    } as LayoutConfig),
    ConfigModule.withConfig({
      cmsComponents: {
        NobiliaDashboardMenuComponent: {
          component: DashboardMenuComponent,
          providers: [
            {
              provide: NavigationService
            }
          ]
        },
      },
    } as CmsConfig),
  ]
})
export class SpartacusCustomConfigurationModule { }
