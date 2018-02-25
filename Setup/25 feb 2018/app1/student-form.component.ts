import { StudentService } from './student.service';
import { Student } from './student';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
    selector: 'student-form',
    templateUrl: 'student-form.component.html'
})

export class StudentFormComponent {
    
    student:Student;

    constructor(private studentService:StudentService,private router:Router) { 
        this.student = new Student();
    }

    save(){
        this.studentService.insertStudent(this.student).subscribe(
            (data)=>{
                alert('success');
                this.router.navigate(['/list']);
            }
        );
    }

    cancel(){
        this.router.navigate(['/list']);
    }
   
}