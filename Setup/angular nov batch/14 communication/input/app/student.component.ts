import { Student } from './student';
import { Component, OnInit,Input } from '@angular/core';

@Component({
    selector: 'student',
    templateUrl: 'student.component.html'
})

export class StudentComponent implements OnInit {
    
    @Input() data:Student;

    constructor() { }

    ngOnInit() { }
}