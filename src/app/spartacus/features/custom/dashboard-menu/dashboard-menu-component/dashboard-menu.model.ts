import {CmsNavigationComponent, CmsNavigationNode, Occ} from "@spartacus/core";
import Image = Occ.Image;

export interface CmsDashboardMenuComponent extends CmsNavigationComponent {
  siteLogo?: Image;
  additionalNavNode?: CmsNavigationNode;
}
