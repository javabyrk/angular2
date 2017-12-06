import { Component, OnInit } from '@angular/core';

import { StudentService } from "./student.service";

import { ActivatedRoute,Router } from "@angular/router";

import { Student } from "./student";

@Component({
    moduleId: module.id,
    selector: 'student-form',
    templateUrl: 'student-form.component.html'
})

export class StudentFormComponent{
    
    student:Student;
    studentId:number;

    constructor(private studentService:StudentService,private route:ActivatedRoute,
            private router:Router) {
        this.student = new Student();
        //accessing route params
        this.studentId=this.route.snapshot.params['studentid'];
        // if present load the data from the server
        if(this.studentId){
            this.studentService.getStudentById(this.studentId).subscribe(
                (data)=>this.student=data,
                (error)=>console.log(error)
            );
        }
        else
            this.studentId = -1;
     }

     insert(){
         this.studentService.insertStudent(this.student).subscribe(
             (data)=>this.router.navigate(['/list']),
             (error)=>console.log(error)
         );
     }

     update(){
         this.studentService.updateStudent(this.student).subscribe(
             (data)=>this.router.navigate(['/list']),
             (error)=>console.log(error)
         );
     }

}