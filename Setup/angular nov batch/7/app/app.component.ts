import { Component, OnInit } from '@angular/core';
import { Student } from "./student";
import { StudentService } from "./student.service";
@Component({
    selector: 'project',
    templateUrl: 'app.component.html'
})

export class AppComponent  {

    students:Student[] ;
    studentService:StudentService

    constructor(){
        this.studentService= new StudentService();
        this.students = this.studentService.getStudents();
    }
   
}