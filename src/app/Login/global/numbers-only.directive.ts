import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: 'input[numbersOnly]'
})
export class NumberDirective {

  constructor(private _el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event:any) {
    debugger
    const initalValue = this._el.nativeElement.value;
    this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
    
    

    if (initalValue.length > 1 || initalValue !== this._el.nativeElement.value) {
      event.stopPropagation();
    }

    let next = event.target.nextElementSibling;
    if (next) {
      next.focus();
    } else {
      event.target.blur();
    }
  }

}