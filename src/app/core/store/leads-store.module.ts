import { NgModule } from '@angular/core';
import {StoreModule} from "@ngrx/store";
import {reducerProvider, reducerToken} from "./reducers/index";
import {LEADS_FEATURE} from "./leads-state";
import {EffectsModule} from "@ngrx/effects";
import {effects} from "./effects";

@NgModule({
  imports: [
    EffectsModule.forFeature(effects),
    StoreModule.forFeature(LEADS_FEATURE, reducerToken),
  ],
  providers: [reducerProvider],
})
export class LeadsStoreModule { }
