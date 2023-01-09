import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardMenuComponent} from './dashboard-menu-component/dashboard-menu.component';
import {I18nModule} from "@spartacus/core";
import {
  MediaModule,
  IconModule,
  GenericLinkModule,
  NavigationModule,
  HamburgerMenuModule
} from "@spartacus/storefront";
import { RouterModule } from '@angular/router';
import { DashboardMenuUiComponent } from './dashboard-menu-component/dashboard-menu-ui/dashboard-menu-ui.component';
import {SharedModule} from "../../../../shared/shared.module";
import {ProductImageZoomModule} from "@spartacus/product/image-zoom";

@NgModule({
  declarations: [
    DashboardMenuComponent,
    DashboardMenuUiComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IconModule,
    GenericLinkModule,
    MediaModule,
    I18nModule,
    NavigationModule,
    SharedModule,
    HamburgerMenuModule,
    ProductImageZoomModule
  ]
})

export class DashboardPageModule {
}
