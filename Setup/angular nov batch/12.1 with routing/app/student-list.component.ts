import { StudentService } from './student.service';
import { Student } from './student';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'student-list',
    templateUrl: 'student-list.component.html'
})

export class StudentListComponent implements OnInit {

    students:Student[];

    constructor(private ss:StudentService) { }

    ngOnInit() { 
        this.ss.getStudents().subscribe(
            (data) => this.students = data
        )
    }
}