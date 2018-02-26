import { StudentService } from './student.service';
import { Student } from './student';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'student-list',
    templateUrl: 'student-list.component.html'
})

export class StudentListComponent{
    students:Student[];
    constructor(private studentService:StudentService) {

        this.students = [];

        this.studentService.getStudents().subscribe(

            (data)=>{
                
                    this.students = <Student[]> data;
                }

        );

     }
}