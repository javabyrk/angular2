import { StudentService } from './student.service';
import { Student } from './student';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'student-reg',
    templateUrl: 'student-reg.component.html'
})

export class StudentRegComponent implements OnInit {
    
    student:Student;

    constructor(private studentService:StudentService) { }

    ngOnInit() {
        this.student = new Student();
     }

    register(){
        this.studentService.registerStudent(this.student).subscribe(
            (data) => console.log(data)
        )
    }
}