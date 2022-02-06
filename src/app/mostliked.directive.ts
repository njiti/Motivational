import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMostliked]'
})
export class MostlikedDirective {
  constructor(private elem:ElementRef) { }

  @HostListener('onsubmit') onSubmit(){
    this.textDeco("red")
  }

  private textDeco(action:string){
    this.elem.nativeElement.style.backgroundColor = action
  }
}
