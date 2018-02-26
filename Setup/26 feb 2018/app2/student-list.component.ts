import { StudentService } from './student.service';
import { Student } from './student';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'student-list',
    templateUrl: 'student-list.component.html'
})

export class StudentListComponent{
    students:Student[];
    start:number = 0;
    end:number = 5;
    constructor(private studentService:StudentService) {

        this.students = [];

        this.studentService.getStudents().subscribe(

            (data)=>{
                
                    this.students = <Student[]> data;
                }

        );

     }

     previous(){
         this.start = this.start - 5;
         this.end = this.end - 5;         
     }
     next(){
        this.start = this.start + 5;
        this.end = this.end + 5;         
    }
}