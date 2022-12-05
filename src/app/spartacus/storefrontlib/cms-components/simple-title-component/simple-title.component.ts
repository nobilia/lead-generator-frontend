import {Component} from '@angular/core';
import {CmsComponentData} from "@spartacus/storefront";
import {CmsSimpleTitleComponent} from "./simple-title.component.model";

@Component({
  selector: 'app-simple-title',
  templateUrl: './simple-title.component.html',
  styleUrls: ['./simple-title.component.scss']
})
export class SimpleTitleComponent {

  constructor(
    public component: CmsComponentData<CmsSimpleTitleComponent>) {
  }
}
