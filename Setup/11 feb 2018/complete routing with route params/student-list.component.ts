import { StudentService } from './student.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'student-list',
    templateUrl: 'student-list.component.html'
})

export class StudentListComponent implements OnInit {

    students;

    constructor(private studentService:StudentService) { 
        this.students = [];
    }

    ngOnInit() { }

    load(){
        this.studentService.getStudents().subscribe(
            (response)=>{
                this.students=response;
            }
        );
    }
}