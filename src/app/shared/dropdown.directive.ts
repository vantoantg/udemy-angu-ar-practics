import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
} from '@angular/core';
import * as events from 'events';
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  constructor(private elRef: ElementRef) {
  }
  @HostBinding('class.show') isShow = false;
  @HostListener('document:click', ['$event']) toggleOpen() {
    this.isShow = this.elRef.nativeElement.contains(event.target) ? !this.isShow : false;
  }

  ngOnInit() {
  }
}
