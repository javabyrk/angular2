import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from './student.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'student-update',
    templateUrl: 'student-update.component.html'
})

export class StudentUpdateComponent {

    student;
    studentId;
    constructor(private studentService:StudentService,private route:ActivatedRoute,private router:Router) {
        this.student={};
        this.studentId=this.route.snapshot.params["id"];
        this.studentService.getStudentById(this.studentId).subscribe(
            (data)=>this.student=data
        )
     }

     update(){
         this.studentService.updateStudent(this.student).subscribe(
             (data)=>{
                 alert('success');
                 this.router.navigate(['students/list']);
             }
         )
     }

     cancel(){
        this.router.navigate(['students/list']);
     }

}