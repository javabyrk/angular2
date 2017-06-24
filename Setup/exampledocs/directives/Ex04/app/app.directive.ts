import { Directive, ElementRef, HostListener } from '@angular/core';
@Directive({
  selector: `[confirm-first]`
})
export class ConfirmDirective {
	constructor(private element:ElementRef){
		
	}
  @HostListener('click', ['$event'])
  confirmFirst(event: Event) {
    let result= window.confirm('Are you sure you want to do this?');
    if(result)
    	this.element.nativeElement.parentNode.removeChild(this.element.nativeElement);
  }

}