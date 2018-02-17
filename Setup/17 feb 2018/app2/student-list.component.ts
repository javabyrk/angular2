import { StudentService } from './student.service';
import { Student } from './student';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'student-list',
    templateUrl: 'student-list.component.html'
})

export class StudentListComponent{
    
    students:Student[];
    constructor(){
        var studentService:StudentService = new StudentService();
        this.students = studentService.getStudents();
    }

}