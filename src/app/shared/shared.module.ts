import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FloatLabelDirective} from "./directives/float-label.directive";
import {ConfigModule} from "@spartacus/core";
import {matIconConfig} from "./configuration/icon.config";


@NgModule({
  declarations: [FloatLabelDirective],
  imports: [
    CommonModule,
    ConfigModule.withConfig(matIconConfig)
  ],
  exports: [
    FloatLabelDirective
  ]
})

export class SharedModule { }
