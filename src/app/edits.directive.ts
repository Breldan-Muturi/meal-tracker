import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'appEdits'
})
export class EditsDirective {
  constructor(private elem: ElementRef) { }

  @HostListener("click") onClicks(){
    this.openEdit("block")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.openEdit("none")
  }

  private openEdit(action:string){
    this.elem.nativeElement.style.display=action;
  }

}
 

