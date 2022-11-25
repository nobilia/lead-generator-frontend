import {CmsComponent, Occ} from "@spartacus/core";
import Image = Occ.Image;

export interface CmsDashboardLoginComponent extends CmsComponent {
  loginSiteLogo?: Image;
  mainPicture?: Image;
  marketingText?: string;
}

