import { Directive, ElementRef, HostListener, Input, OnInit } from "@angular/core";

@Directive({
  selector: "[highlight]"  // this is attribute selector
})
export class HighlightDirective implements OnInit {
    
    @Input("highlight")
    color:string;
    
    // ElementRef is a ref of host where this directive is applied.
    constructor(private element: ElementRef) {
        
    }
    
    ngOnInit(): void {
        if(!this.color) {
            this.color='yellow';
        }
    }

  @HostListener("mouseover")
  highlightIt() {
    this.element.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener("mouseleave")
  removeHighlight() {
    this.element.nativeElement.style.backgroundColor = "";   
  }
}
