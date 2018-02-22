import { StudentService } from './student.service';
import { Component, OnInit } from '@angular/core';
import { Student } from './student';
@Component({
    selector: 'student-form',
    templateUrl: 'student-form.component.html'
})

export class StudentFormComponent{

    //id:number;
    //name:string;
    //email:string;

    student:Student;

    constructor(private studentService:StudentService) {
        this.student = new Student();
        this.student.id = 1;
     }

    insert(){
        /*this.studentService.insertStudent(this.id,this.name,this.email,this.phoneNo).subscribe(
            (data)=>
            {
                alert('insert success')
            }

        );*/
        this.studentService.insertStudent2(this.student).subscribe(
            (data)=>
            {
                alert('insert success')
            }

        );
    }
}