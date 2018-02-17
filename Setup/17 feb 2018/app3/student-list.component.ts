import { StudentService } from './student.service';
import { Student } from './student';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'student-list',
    templateUrl: 'student-list.component.html'
})

export class StudentListComponent{
    
    students:Student[];
    studentService:StudentService;
    constructor(){
        this.studentService = new StudentService();
        this.students = [];
    }

    load(){
        this.students = this.studentService.getStudents();
    }

}