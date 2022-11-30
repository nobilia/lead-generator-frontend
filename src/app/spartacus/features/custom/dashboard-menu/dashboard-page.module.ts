import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardMenuComponent} from './dashboard-menu-component/dashboard-menu.component';
import {CmsConfig, ConfigModule, I18nConfig, I18nModule, UrlModule} from "@spartacus/core";
import {LayoutConfig, MediaModule, NavigationService, IconModule, GenericLinkModule, NavigationModule} from "@spartacus/storefront";
import { RouterModule } from '@angular/router';
import {customTranslationChunksConfig, customTranslations} from "../../../../../assets/translations/translations";

@NgModule({
  declarations: [
    DashboardMenuComponent
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
    NavigationModule
  ]
})

export class DashboardPageModule {
}
