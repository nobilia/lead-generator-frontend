import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {LaunchDialogService} from "@spartacus/storefront";
import {ImageGroup} from "@spartacus/core/src/model/image.model";
import {Subscription} from "rxjs";
import {ICON_TYPE} from "../../../../../shared";

@Component({
  selector: 'app-lead-image-zoom-dialog',
  templateUrl: './lead-image-zoom-dialog.component.html'
})

export class LeadImageZoomDialogComponent implements OnInit {
  @HostListener('click', ['$event'])
  handleClick(event: UIEvent): void {
    if ((event.target as any).tagName === this.el.nativeElement.tagName) {
      this.dismissModal('Cross click');
    }
  }
  zoomImages: ImageGroup[] | undefined;
  protected subscription = new Subscription();
  iconType = ICON_TYPE;


  constructor(protected launchDialogService: LaunchDialogService,
              protected el: ElementRef) {
  }

  ngOnInit() {
    this.subscription.add(
      this.launchDialogService.data$.subscribe(
        (dialogData) => {
            this.zoomImages = dialogData.images?.find((img: { format: string; }) => img.format === 'zoom');
        }
      )
    );
  }

  dismissModal(reason?: any): void {
    this.launchDialogService.closeDialog(reason);
  }
}
