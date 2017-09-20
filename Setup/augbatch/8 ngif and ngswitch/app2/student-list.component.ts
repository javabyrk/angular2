import { Component, OnInit } from '@angular/core';

import { Student } from "./student";
import { StudentService } from "./student.service";

@Component({
    selector: 'student-list',
    templateUrl: 'student-list.component.html'
})

export class StudentListComponent{

    students:Student[];

    constructor(private studentService:StudentService) {
        this.students = [];
     }

     load(){
        this.students = this.studentService.getStudents();
     }

}