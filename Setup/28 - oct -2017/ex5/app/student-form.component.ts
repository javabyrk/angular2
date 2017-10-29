import { Component, OnInit } from '@angular/core';

import { StudentService } from "./student.service";

import { Student } from "./student";

@Component({
    moduleId: module.id,
    selector: 'student-form',
    templateUrl: 'student-form.component.html'
})

export class StudentFormComponent{
    
    student:Student;

    constructor(private studentService:StudentService) {
        this.student = new Student();
        this.student.id=22;
     }

     insert(){
         this.studentService.insertStudent(this.student).subscribe(
             (data)=>console.log(data),
             (error)=>console.log(error)
         );
     }

}