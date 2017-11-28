import { StudentService } from './student.service';
import { Student } from './student';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'student-delete',
    templateUrl: 'student-delete.component.html'
})

export class StudentDeleteComponent implements OnInit {
    
    student:Student;

    constructor(private ss:StudentService) { }

    ngOnInit() {
        this.student = new Student();
     }

     load(){
         this.ss.getStudentById(this.student.id).subscribe(
            (data) => this.student = data
        )
     }

     delete(){

        this.ss.deleteStudent(this.student.id).subscribe(
            (data) => console.log(data)
        )
     }

}