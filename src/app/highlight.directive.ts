import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '<appHighlight>'
})
export class HighlightDirective {
  constructor(private elem: ElementRef) { }

  @HostListener("click") onClicks(){
    this.textDeco("bolder")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("normal")
  }

  private textDeco(action:string){
    this.elem.nativeElement.style.fontWeight=action;
  }

}
