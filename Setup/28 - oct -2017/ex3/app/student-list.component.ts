import { Component, OnInit } from '@angular/core';

import { StudentService } from "./student.service";

@Component({
    moduleId: module.id,
    selector: 'student-list',
    templateUrl: 'student-list.component.html'
})

export class StudentListComponent {

    students;

    status:string = '';

    constructor(private studentService:StudentService){
       this.students = [];
    }

    load(){
        this.status = "loading";
         this.studentService.getStudents().subscribe(
            (success)=>{this.students = success;
            this.status = "finished"},
            (error)=>console.log(error)
        );

    }

}