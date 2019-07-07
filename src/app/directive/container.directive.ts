import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appContainer]'
})
export class ContainerDirective {

  element: ElementRef;
  constructor(private el: ElementRef) { 
    el.nativeElement.className = 'container';
    console.log('add class', el);
  }

}
