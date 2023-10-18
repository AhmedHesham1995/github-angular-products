import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[ProductCard]'
})
export class ProductCardDirective {
  @Input() hoverShadow: string = '5px 5px 10px 10px grey';
  @Input() defaultShadow: string = '2px 2px 5px grey';
  constructor(private elementRef:ElementRef) {
      // this.elementRef.nativeElement.style.border="3px solid blue"
   }

   @HostListener("mouseover") func1(){
    this.elementRef.nativeElement.style.boxShadow=`${this.hoverShadow}`

   }
   @HostListener("mouseout") func2(){
    this.elementRef.nativeElement.style.boxShadow=`${this.defaultShadow}`

   }

}
