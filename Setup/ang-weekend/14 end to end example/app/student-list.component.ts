import { Component, OnInit } from '@angular/core';

import { Student } from "./student";

import { StudentService } from "./student.service";

@Component({
    selector: 'student-list',
    templateUrl: 'student-list.component.html'
})

export class StudentListComponent implements OnInit {
    students:Student[];
    
    constructor(private studentService:StudentService) { 
        this.students = [];
    }

    ngOnInit() { }

    load(){
        this.studentService.getStudents().subscribe(
            (serverdata)=>this.students=serverdata,
            (error)=>console.log(error));
    }
}