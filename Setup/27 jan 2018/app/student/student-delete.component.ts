import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from './student.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'student-delete',
    templateUrl: 'student-delete.component.html'
})

export class StudentDeleteComponent{
    student;
    constructor(private studentService:StudentService,private route:ActivatedRoute,private router:Router   ) {

        let id = this.route.snapshot.params["id"];
        this.studentService.getStudentById(id).subscribe(
            (data)=>this.student=data
        )
     }

     delete(){
         this.studentService.deleteStudent(this.student).subscribe(

            (data)=>
            {
               this.router.navigate(["students/list"]);
            }

         )
     }

     cancel(){
        this.router.navigate(["students/list"]);
     }
}