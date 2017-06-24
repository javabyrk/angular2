import {Component,Input,Output,EventEmitter,ViewEncapsulation,SimpleChanges,OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy} from '@angular/core';
import {Student} from './student';
import {StudentComponent} from './student.component';
@Component({
			selector: 'student-list',
			template: `
						<student *ngFor="let j of students" [student]="j">
						<span class="name">{{ j.name }}?</span>
						<h1 class="address">{{ j.address }}</h1>
						</student>
						<button type="button"
						class="btn btn-success"
						(click)="addStudent()">Add Student
						</button>
						<button type="button"
						class="btn btn-danger"
						(click)="deleteStudents()">Clear Students
						</button>
						`
			})
export class StudentListComponent {
	students: Student[] = [];
	addStudent() {
		this.students.unshift(new Student("raju", "s r nagar"));
	}
	deleteStudents() {
		this.students = []
	}
}