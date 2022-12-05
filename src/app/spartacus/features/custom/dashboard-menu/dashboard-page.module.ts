import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardMenuComponent} from './dashboard-menu-component/dashboard-menu.component';
import {CmsConfig, ConfigModule, I18nModule} from "@spartacus/core";
import {
  LayoutConfig,
  MediaModule,
  NavigationService,
  IconModule,
  GenericLinkModule,
  NavigationModule,
  HamburgerMenuModule
} from "@spartacus/storefront";
import { RouterModule } from '@angular/router';
import { DashboardMenuUiComponent } from './dashboard-menu-component/dashboard-menu-ui/dashboard-menu-ui.component';
import {SharedModule} from "../../../../shared/shared.module";

@NgModule({
  declarations: [
    DashboardMenuComponent,
    DashboardMenuUiComponent
  ],
  imports: [
    CommonModule,
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
    RouterModule,
    IconModule,
    GenericLinkModule,
    MediaModule,
    I18nModule,
    NavigationModule,
    SharedModule,
    HamburgerMenuModule
  ]
})

export class DashboardPageModule {
}
