import { StudentService } from './student.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'student-list',
    templateUrl: 'student-list.component.html'
})

export class StudentListComponent {
    students;
    constructor(private studentService:StudentService) {
        this.studentService.getStudents().subscribe(
            (data)=>this.students=data
        )
     }
}