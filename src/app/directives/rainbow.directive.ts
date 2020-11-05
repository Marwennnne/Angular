import { Directive,HostListener,HostBinding } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  @HostBinding('style.color') fontColor = 'black';
  @HostBinding('style.borderColor') borderColor = 'black';

  constructor() { }


  @HostListener('keyup') onkeyup() {
    this.borderColor = '#'  + ((1 << 24) * Math.random() | 0).toString(16);
    this.fontColor = '#'  + ((1 << 24) * Math.random() | 0).toString(16);
  }
}
