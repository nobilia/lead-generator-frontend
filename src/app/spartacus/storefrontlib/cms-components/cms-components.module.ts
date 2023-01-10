import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SimpleTitleComponent} from "./simple-title-component/simple-title.component";
import {AuthGuard, CmsConfig, ConfigModule, I18nModule, UrlModule} from "@spartacus/core";
import { DashboardLeadsComponent } from './dashboard-leads-component/dashboard-leads.component';
import { DashboardSkippedLotsComponent } from './dashboard-skipped-lots-component/dashboard-skipped-lots.component';
import {ProductImageZoomModule} from "@spartacus/product/image-zoom/components";
import {SharedModule} from "../../../shared/shared.module";
import {FormErrorsModule, GenericLinkModule, IconModule, MediaModule, SpinnerModule} from "@spartacus/storefront";
import { DashboardForgotPasswordComponent } from "./dashboard-forgot-password-component/dashboard-forgot-password.component";
import { DashboardResetPasswordComponent } from './dashboard-reset-password-component/dashboard-reset-password.component';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    SimpleTitleComponent,
    DashboardLeadsComponent,
    DashboardSkippedLotsComponent,
    DashboardForgotPasswordComponent,
    DashboardResetPasswordComponent
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
                NobiliaDashboardForgotPasswordComponent: {
                    component: DashboardForgotPasswordComponent
                },
                NobiliaDashboardResetPasswordComponent: {
                    component: DashboardResetPasswordComponent
                },
            },
        } as CmsConfig),
        ProductImageZoomModule,
        I18nModule,
        SharedModule,
        MediaModule,
        SpinnerModule,
        UrlModule,
        RouterModule,
        ReactiveFormsModule,
        FormErrorsModule,
        IconModule,
        GenericLinkModule
    ]
})
export class CmsComponentsModule {
}
