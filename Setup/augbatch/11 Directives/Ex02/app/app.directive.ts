import { Directive, ElementRef, HostListener } from '@angular/core';
import { Input} from '@angular/core';
@Directive({
	selector: '[highlight]'
})
export class HighLightDirective {

	@Input('highlight') backgroundColor: string;


	constructor(private element: ElementRef) {
	}

	@HostListener('mouseenter') onMouseEnter() {
		this.setAppearance(this.backgroundColor, 'pointer');
	}
	
	@HostListener('mouseleave') onMouseLeave() {
		this.setAppearance(null, null);
	}
	
	setAppearance(color: string, cursor: string) {
		let style = this.element.nativeElement.style;
		style.backgroundColor = color;
		style.cursor = cursor;
	}
}