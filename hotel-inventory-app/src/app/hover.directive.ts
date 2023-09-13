import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, Input, Renderer2 } from '@angular/core';


// directives are similar to components, but they will never have a template
// this will behave as a helper method to our elements where we apply it 
// the "selector" acts like adding a class to an HTML element
// look in log.component.html for an example of how to apply it
@Directive({
  selector: '[hotelInvHover]'
})
export class HoverDirective {
  // the class property can have the same name as the name of the directive
  // look in login.component.html for information on what the @Input() does in this case
  // @Input() in general adds whatever class property comes after it as an element.property 
  @Input() hotelInvHover: string = 'red';

  constructor(private element: ElementRef, @Inject(DOCUMENT) private document: Document, private renderer: Renderer2) {
    console.log(this.element.nativeElement);
    console.log(this.document);
   }

  ngOnInit(): void {
      // this.element.nativeElement.style.backgroundColor = this.color;
      // this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.color);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.hotelInvHover);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'white');
  }
}
