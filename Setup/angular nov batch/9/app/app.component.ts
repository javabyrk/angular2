import { Component, OnInit } from '@angular/core';
import { Student } from "./student";
import { StudentService } from "./student.service";
@Component({
    selector: 'project',
    templateUrl: 'app.component.html'
})

export class AppComponent  {

    students:Student[] ;
    

    constructor(private studentService:StudentService){
       
        this.students = [];
    }

    load(){
        this.studentService.getStudents().subscribe(
            (data)=>this.students=data
        );
    }
   
}