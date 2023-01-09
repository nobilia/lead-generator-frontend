import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AvailableLeadsAdapter, AvailableLeadsConnector} from "./connectors";
import {LeadsStoreModule} from "./store/leads-store.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LeadsStoreModule,
  ],
  providers: [
    AvailableLeadsConnector,
    AvailableLeadsAdapter
  ],
})
export class CoreModule { }
