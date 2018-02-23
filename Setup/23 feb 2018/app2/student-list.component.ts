import { StudentService } from './student.service';
import { Component, OnInit } from '@angular/core';
import { Student } from "./student";
@Component({
    selector: 'student-list',
    templateUrl: 'student-list.component.html'
})

export class StudentListComponent  {
    
    students:Student[];

    constructor(private studentService:StudentService) {
        this.students = [];
        
     }

     load(){
        this.studentService.getStudents().subscribe(
            
                        (data)=>{
                            this.students = <Student[]>data;
                        },
                        (error)=>{
            
                            console.log(error);
                            alert('data loading failed');
                        }
            
                    );
     }
}