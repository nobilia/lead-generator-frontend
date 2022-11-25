import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {provideConfig} from "@spartacus/core";
import {customRoutingConfig} from "./routing-config";


@NgModule({
  declarations: [],
  providers: [
    provideConfig(customRoutingConfig)
  ],
  imports: [
    CommonModule
  ]
})
export class RoutingModule {
}
