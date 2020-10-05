import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCaseBold]'
})
export class CaseBoldDirective {

  constructor(private elem: ElementRef) { }

  private textStyle(action: string, textBold:string) {
    this.elem.nativeElement.style.textDecoration=action;
    this.elem.nativeElement.style.fontWeight=textBold;
  }

  @HostListener("mouseover") onMouseOver () {
    this.textStyle('underline', 'bold');
    
  }

  @HostListener("mouseout") onMouseOut() {
    this.textStyle('None', 'normal')
  }
  


}

