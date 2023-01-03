import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SimpleTitleComponent} from "./simple-title-component/simple-title.component";
import {AuthGuard, CmsConfig, ConfigModule} from "@spartacus/core";
import { DashboardLeadsComponent } from './dashboard-leads-component/dashboard-leads.component';
import { DashboardSkippedLotsComponent } from './dashboard-skipped-lots-component/dashboard-skipped-lots.component';


@NgModule({
  declarations: [
    SimpleTitleComponent,
    DashboardLeadsComponent,
    DashboardSkippedLotsComponent
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
  ]
})
export class CmsComponentsModule {
}
