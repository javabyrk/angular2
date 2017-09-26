import {Component,Input,Output,EventEmitter,ViewEncapsulation,SimpleChanges,OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy} from '@angular/core';
import {Student} from './student';
@Component({
	selector: 'student',
	template: `
				<div class="card card-block">
				<h4 class="card-title">
				<ng-content select=".name"></ng-content>
				</h4>
				<p class="card-text"
				[hidden]="data.hide">
				<ng-content select=".address"></ng-content>
				</p>
				<a class="btn btn-primary"
				(click)="data.toggle()">show/hide</a>
				</div>
			`
	})
export class StudentComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
	@Input('student') data: Student;
	constructor() {
		console.log(`new - data is ${this.data}`);
	}
	ngOnChanges(changes: SimpleChanges) {
		console.log(`ngOnChanges - data is ${this.data}`);
		for (let key in changes) {
			console.log(`${key} changed.
			Current: ${changes[key].currentValue}.
			Previous: ${changes[key].previousValue}`);
		}
	}
	ngOnInit() {
		console.log(`ngOnInit - data is ${this.data}`);
	}
	ngDoCheck() {
		console.log("ngDoCheck")
	}
	ngAfterContentInit() {
		console.log("ngAfterContentInit");
	}
	ngAfterContentChecked() {
		console.log("ngAfterContentChecked");
	}
	ngAfterViewInit() {
		console.log("ngAfterViewInit");
	}
	ngAfterViewChecked() {
		console.log("ngAfterViewChecked");
	}
	ngOnDestroy() {
		console.log("ngOnDestroy");
	}
}