import { Component, OnInit } from '@angular/core';

import { Student } from "./student";

import { StudentService } from "./student.service";

import { Router,ActivatedRoute } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'student-form',
    templateUrl: 'student-form.component.html'
})

export class StudentFormComponent implements OnInit {
    
    student:Student;
    studentId:number=0;
    status:string = '';

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

     verify() {
            this.status = '';
            this.studentService.getStudentById(this.student.id).subscribe(
            (serverdata)=>{
               let currentStudent = serverdata;
               if(currentStudent.name!=null){
                    this.status = "id already taken";
               }
               else
                    this.status = "id is good";
            },
            (error)=>this.status = "id is good");
        
     }

    insert(){
        this.studentService.insertStudent(this.student).subscribe(
            (serverdata)=>{
                this.router.navigate(['/list']);
            },
            (error)=>console.log(error));
    }

    update(){
        this.studentService.updateStudent(this.student).subscribe(
            (serverdata)=>{
                this.router.navigate(['/list']);
            },
            (error)=>console.log(error));
    }
}