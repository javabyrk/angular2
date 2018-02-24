import { StudentService } from './student.service';
import { Student } from './student';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
@Component({
    selector: 'student-update',
    templateUrl: 'student-update.component.html'
})

export class StudentUpdateComponent{

    student:Student;

    constructor(private studentService:StudentService,
                private route:ActivatedRoute,
                private router:Router) {
        this.student = new Student();
        var id = this.route.snapshot.params['abc'];
        this.load(id);
     }

     update(){
         this.studentService.updateStudent(this.student).subscribe(
             (data)=>{
                 alert('success');
                 this.router.navigate(['/list']);
             },
             (error)=>{
                 alert('error');
                 console.log(error);
             }
         );
     }

     load(id:number){
        this.studentService.getStudentById(id).subscribe(
            (data)=>{
                this.student = <Student>data;
            },
            (error)=>{
                alert('error');
                console.log(error);
            }
        );
    }

    cancel(){
        this.router.navigate(['/list']);
    }
}