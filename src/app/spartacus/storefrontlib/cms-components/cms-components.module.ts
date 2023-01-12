import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SimpleTitleComponent} from "./simple-title-component/simple-title.component";
import {
  AuthGuard,
  CmsConfig,
  ConfigModule,
  I18nModule,
  provideDefaultConfig
} from "@spartacus/core";
import { DashboardLeadsComponent } from './dashboard-leads-component/dashboard-leads.component';
import { DashboardSkippedLotsComponent } from './dashboard-skipped-lots-component/dashboard-skipped-lots.component';
import {ProductImageZoomModule} from "@spartacus/product/image-zoom/components";
import {SharedModule} from "../../../shared/shared.module";
import {GenericLinkModule, IconModule, KeyboardFocusModule, MediaModule} from "@spartacus/storefront";
import {LeadImageZoomDialogComponent} from "./lead-image-zoom/lead-image-zoom-dialog/lead-image-zoom-dialog.component";
import {LeadImageZoomComponent} from "./lead-image-zoom/lead-image-zoom.component";
import {defaultLeadImageZoomLayoutConfig} from "./lead-image-zoom/default-lead-image-zoom-layout.config";

@NgModule({
  declarations: [
    SimpleTitleComponent,
    DashboardLeadsComponent,
    DashboardSkippedLotsComponent,
    LeadImageZoomComponent,
    LeadImageZoomDialogComponent,
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
      },
    } as CmsConfig),
    ProductImageZoomModule,
    I18nModule,
    SharedModule,
    MediaModule,
    IconModule,
    GenericLinkModule,
    KeyboardFocusModule,
  ],
  providers: [
    provideDefaultConfig(defaultLeadImageZoomLayoutConfig),
  ]
})
export class CmsComponentsModule {
}
