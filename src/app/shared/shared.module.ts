import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FloatLabelDirective} from "./directives/float-label.directive";
import {ConfigModule, I18nModule} from "@spartacus/core";
import {matIconConfig} from "./configuration/icon.config";
import { CountDownComponent } from './components/count-down/count-down.component';


@NgModule({
  declarations: [FloatLabelDirective, CountDownComponent],
    imports: [
        CommonModule,
        ConfigModule.withConfig(matIconConfig),
        I18nModule
    ],
    exports: [
        FloatLabelDirective,
        CountDownComponent
    ]
})

export class SharedModule { }
