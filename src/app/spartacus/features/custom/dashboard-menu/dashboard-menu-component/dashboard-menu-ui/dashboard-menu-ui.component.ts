import {Component, ElementRef, Inject, Input, Renderer2} from '@angular/core';
import {HamburgerMenuService, NavigationUIComponent} from "@spartacus/storefront";
import {Router} from "@angular/router";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-dashboard-menu-ui',
  templateUrl: './dashboard-menu-ui.component.html',
  styleUrls: ['./dashboard-menu-ui.component.scss']
})
export class DashboardMenuUiComponent extends NavigationUIComponent {

  @Input() navAriaLabel: string | null | undefined;



  super: any;
  constructor(@Inject(DOCUMENT) public document: any, router: Router, renderer: Renderer2, elemRef: ElementRef, hamburgerMenuService: HamburgerMenuService) {
    super( router, renderer, elemRef, hamburgerMenuService);
    console.log(this.document.location)
  }
}
