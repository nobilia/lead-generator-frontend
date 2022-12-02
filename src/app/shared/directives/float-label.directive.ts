import {Directive, ElementRef, HostListener, Renderer2} from "@angular/core";

@Directive({
  selector: '[appFloatLabel]'
})

export class FloatLabelDirective {
  private showClass = "float-label";

  constructor(private element: ElementRef, private rend:Renderer2) {}

  @HostListener('focus') onFocus() {
    this.rend.addClass(this.element.nativeElement, this.showClass);
  }

  @HostListener('focusout') onFocusOut() {
    if (!this.element.nativeElement.value.trim().length) {
      this.rend.removeClass(this.element.nativeElement, this.showClass);
    }
  }

  @HostListener('change') onChange() {
    if (!!this.element.nativeElement.value.trim().length) {
      this.rend.addClass(this.element.nativeElement, this.showClass);
    }
  }
}
