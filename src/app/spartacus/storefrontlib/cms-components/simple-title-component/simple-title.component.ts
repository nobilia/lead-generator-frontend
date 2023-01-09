import {Component} from '@angular/core';
import {CmsComponentData} from "@spartacus/storefront";
import {CmsSimpleTitleComponent} from "./simple-title.component.model";

@Component({
  selector: 'app-simple-title',
  templateUrl: './simple-title.component.html',
  styleUrls: ['./simple-title.component.scss']
})
export class SimpleTitleComponent {
  dataTitle: string = '';

  constructor(
    public component: CmsComponentData<CmsSimpleTitleComponent>) {
    component.data$.subscribe((data) => {
      if (data) {
        this.dataTitle = `<${data.titleSize}>${data.title}</${data.titleSize}>`;
      }
    });
  }
}
