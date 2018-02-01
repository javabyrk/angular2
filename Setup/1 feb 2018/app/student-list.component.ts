import { Component, OnInit } from '@angular/core';


import { StudentService } from "./student.service";

import { Student } from "./student";

@Component({
    moduleId: module.id,
    selector: 'student-list',
    templateUrl: 'student-list.component.html'
})


export class StudentListComponent{

    students:Student[];

    constructor(private studentService:StudentService) {
        this.students = [];
     }

     load(){
         this.studentService.getStudents().subscribe(
             (data)=>this.students=data,
             (error)=>console.log(error)
         );
     }

}