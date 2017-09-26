export class Student {
	name:string;
	address:string;
	hide:boolean;
	constructor(name:string, address:string) {
		this.name = name;
		this.address = address;
		this.hide = true;
	}
	toggle() {
		this.hide = !this.hide;
	}
}