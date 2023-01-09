import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SimpleTitleComponent} from "./simple-title-component/simple-title.component";
import {AuthGuard, CmsConfig, ConfigModule, I18nModule} from "@spartacus/core";
import {DashboardLeadsComponent} from './dashboard-leads-component/dashboard-leads.component';
import {DashboardSkippedLotsComponent} from './dashboard-skipped-lots-component/dashboard-skipped-lots.component';
import {ProductImageZoomModule} from "@spartacus/product/image-zoom/components";
import {SharedModule} from "../../../shared/shared.module";
import {GenericLinkModule, IconModule, MediaModule} from "@spartacus/storefront";
import {DashboardChangePasswordComponent} from './dashboard-change-password-component/dashboard-change-password.component';

@NgModule({
  declarations: [
    SimpleTitleComponent,
    DashboardLeadsComponent,
    DashboardSkippedLotsComponent,
    DashboardChangePasswordComponent
  ],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        NobiliaSimpleTitleComponent: {
          component: SimpleTitleComponent
        },
        NobiliaDashboardLeadsComponent: {
          component: DashboardLeadsComponent,
          guards: [AuthGuard]
        },
        nobiliaSkippedLeadsComponent: {
          component: DashboardSkippedLotsComponent,
          guards: [AuthGuard]
        },
        nobiliaChangePasswordComponent: {
          component: DashboardChangePasswordComponent,
          guards: [AuthGuard]
        }
      },
    } as CmsConfig),
    ProductImageZoomModule,
    I18nModule,
    SharedModule,
    MediaModule,
    IconModule,
    GenericLinkModule
  ]
})
export class CmsComponentsModule {
}
