import { DIALOG_TYPE, LayoutConfig } from '@spartacus/storefront';
import {LeadImageZoomDialogComponent} from "./lead-image-zoom-dialog/lead-image-zoom-dialog.component";

export const enum LAUNCH_CALLER {
  LEAD_IMAGE_ZOOM = "LEAD_IMAGE_ZOOM"
}

export const defaultLeadImageZoomLayoutConfig: LayoutConfig = {
  launch: {
    LEAD_IMAGE_ZOOM: {
      inlineRoot: true,
      component: LeadImageZoomDialogComponent,
      dialogType: DIALOG_TYPE.DIALOG,
    },
  },
};
