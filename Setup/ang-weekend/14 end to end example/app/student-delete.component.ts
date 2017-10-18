import { Component, OnInit } from '@angular/core';

import { Student } from "./student";

import { StudentService } from "./student.service";

import { Router,ActivatedRoute } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'student-delete',
    templateUrl: 'student-delete.component.html'
})

export class StudentDeleteComponent implements OnInit {
    student:Student;
    studentId:number;

    constructor(private studentService:StudentService,private router:Router,private route:ActivatedRoute) {
        this.student = new Student();
     }

    ngOnInit() {
        this.studentId = this.route.snapshot.params["id"];
        if(this.studentId){
            this.studentService.getStudentById(this.studentId).subscribe(
            (serverdata)=>{
               this.student = serverdata;
            },
            (error)=>console.log(error));
        }
        else
            this.studentId=0;
     }

     delete(){
         this.studentService.deleteStudent(this.student.id).subscribe(
            (serverdata)=>{
                this.router.navigate(['/list']);
            },
            (error)=>console.log(error));
     }

}