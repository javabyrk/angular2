import { StudentService } from './student.service';
import { Student } from './student';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'student-insert',
    templateUrl: 'student-insert.component.html'
})

export class StudentInsertComponent{
    student:Student;
    studentService:StudentService;
    constructor() { 
        this.student = new Student(4,'');
        this.studentService = new StudentService();
    }

    insert(){
        this.studentService.insertStudent(this.student);
    }
}