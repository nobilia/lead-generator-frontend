import {NgModule} from "@angular/core";
import { DashboardChangePasswordComponent } from './dashboard-change-password-component/dashboard-change-password.component';
import {CommonModule} from "@angular/common";
import {AuthGuard, CmsConfig, ConfigModule} from "@spartacus/core";

@NgModule({
  declarations: [
    DashboardChangePasswordComponent
  ],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        nobiliaChangePasswordComponent: {
          component: DashboardChangePasswordComponent,
          guards: [AuthGuard]
        }
      }
    } as CmsConfig)
  ]
})
export class CmsComponentsModule {
}
