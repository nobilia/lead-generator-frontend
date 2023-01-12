import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard, CmsConfig, ConfigModule } from "@spartacus/core";
import { LayoutConfig, NavigationService } from "@spartacus/storefront";
import { DashboardLoginComponent } from "./features/custom/dashboard-login/dashboard-login-component/dashboard-login.component";
import { DashboardMenuComponent } from "./features/custom/dashboard-menu/dashboard-menu-component/dashboard-menu.component";
import { CustomLoginFormComponentService } from "./services/custom.login-form-component.service";
import { UpdatePasswordComponentService } from "@spartacus/user/profile/components";
import { DashboardChangePasswordComponent } from "./features/custom/dashboard-change-password/dashboard-change-password-component/dashboard-change-password.component";


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
              provide: CustomLoginFormComponentService
            }]
        }
      },
    } as CmsConfig),
    ConfigModule.withConfig({
      cmsComponents: {
        nobiliaChangePasswordComponent: {
          component: DashboardChangePasswordComponent,
          providers: [
            {
              provide: UpdatePasswordComponentService
            }],
          guards: [AuthGuard]
        }
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
