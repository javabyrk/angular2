import { StudentService } from './student.service';
import { Student } from './student';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'student-update',
    templateUrl: 'student-update.component.html'
})

export class StudentUpdateComponent implements OnInit {
    
    student:Student;

    constructor(private ss:StudentService) { }

    ngOnInit() {
        this.student = new Student();
     }

     update(){

        this.ss.updateStudent(this.student).subscribe(
            (data) => console.log(data)
        )
     }

}