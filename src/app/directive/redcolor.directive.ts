import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appRedcolor]'
})
export class RedcolorDirective implements OnInit {
  // element: ElementRef;
  constructor(private el: ElementRef) { 
    el.nativeElement.style.color = 'red';
    el.nativeElement.style.border = '1px solid coral';
    
  }
  ngOnInit(){
    // console.log(this.element);
  }

}
