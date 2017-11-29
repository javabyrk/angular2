import { StudentService } from './student.service';
import { Student } from './student';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'student-form',
    templateUrl: 'student-form.component.html'
})

export class StudentFormComponent implements OnInit {
    
    student:Student;

    constructor(private ss:StudentService) { }

    ngOnInit() {
        this.student = new Student();
     }

     insert(){

        this.ss.insertStudent(this.student).subscribe(
            (data) => console.log(data)
        )
     }

}