import { StudentService } from './student.service';
import { Student } from './student';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'student-update',
    templateUrl: 'student-update.component.html'
})

export class StudentUpdateComponent implements OnInit {
    student;
    constructor(private studentService:StudentService) { 
        this.student = new Student();
    }

    load(){
        this.studentService.getStudentById(this.student.id).subscribe(
            (data)=>this.student=data
        );
    }

    update(){
        this.studentService.updateStudent(this.student).subscribe(
            (data)=>alert('success')
        )
    }

}