import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from './student.service';
import { Component, OnInit } from '@angular/core';
import { Student } from "./student";
@Component({
    selector: 'student-delete',
    templateUrl: 'student-delete.component.html'
})

export class StudentDeleteComponent{

    student:Student;

    constructor(private studentService:StudentService,private route:ActivatedRoute,private router:Router) {
        this.student = new Student();
        var id = this.route.snapshot.params['abc'];
        this.load(id);
     }

     delete(){
        debugger;
        this.studentService.deleteStudent(this.student).subscribe(
            (data)=>{
                alert('success');
                this.router.navigate(['/list']);
            }
        );
    }

    load(id:number){
        this.studentService.getStudentById(id).subscribe(
            (data)=>{
               this.student = <Student>data;
            }
        );
    }

    cancel(){
        this.router.navigate(['/list']);
    }

   
}