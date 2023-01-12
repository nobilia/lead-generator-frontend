import {Component, Input} from '@angular/core';
import {LaunchDialogService} from "@spartacus/storefront";
import {ImageGroup} from "@spartacus/core/src/model/image.model";
import {ICON_TYPE} from "../../../../shared";
import {take} from "rxjs/operators";
import {LAUNCH_CALLER} from "./default-lead-image-zoom-layout.config";

@Component({
  selector: 'app-lead-image-zoom',
  templateUrl: './lead-image-zoom.component.html'
})
export class LeadImageZoomComponent  {
  @Input() images: ImageGroup[] | undefined;
  iconType = ICON_TYPE;

  constructor(protected launchDialogService: LaunchDialogService) {}

  triggerZoom(): void {

    const zoomData = {
      images: this.images
    };

    const dialog = this.launchDialogService.openDialog(
      LAUNCH_CALLER.LEAD_IMAGE_ZOOM,
      undefined,
      undefined,
      zoomData
    );

    if (dialog) {
      dialog.pipe(take(1)).subscribe();
    }
  }
}
