import { Component, OnInit } from '@angular/core';


import { StudentService } from "./student.service";

import { Router,ActivatedRoute } from "@angular/router";

import { Student } from "./student";

@Component({
    moduleId: module.id,
    selector: 'student-delete',
    templateUrl: 'student-delete.component.html'
})

export class StudentDeleteComponent{

    student:Student;
     constructor(private studentService:StudentService,private router:Router,
     private route:ActivatedRoute) {
        this.student = new Student();
        this.student.id = this.route.snapshot.params['studentid'];
     }


   delete(){
        this.studentService.deleteStudent(this.student).subscribe(
             (data)=>this.router.navigate(['/list']),
             (error)=>console.log(error)
         );
   }
}