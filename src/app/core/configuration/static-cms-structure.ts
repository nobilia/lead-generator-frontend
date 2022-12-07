import {provideCmsStructure} from "@spartacus/storefront";
import { ValueProvider } from '@angular/core';


export const defaultCmsContentProviders: ValueProvider[] = [
  provideCmsStructure({
    componentId: 'EmptyComponent',
    pageSlotPosition: 'PreHeader',
  }),
  provideCmsStructure({
    componentId: 'EmptyComponent',
    pageSlotPosition: 'SiteLogin',
  }),
];
