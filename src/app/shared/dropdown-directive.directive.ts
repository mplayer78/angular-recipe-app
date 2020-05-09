import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen: boolean = false;

  @HostListener('click') mouseOver() {
    this.isOpen = !this.isOpen;
  }

  @HostListener('mouseleave') mouseLeave() {
    this.isOpen = false;
  }
}
