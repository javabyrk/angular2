import { StudentService } from './student.service';
import { Student } from './student';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute,Router } from "@angular/router";

@Component({
    selector: 'student-update',
    templateUrl: 'student-update.component.html'
})

export class StudentUpdateComponent implements OnInit {

    student:Student;

    constructor(private studentService:StudentService,private route:ActivatedRoute,private router:Router) { 
        this.student = new Student();

        this.student.id=this.route.snapshot.params['abc'];
        this.studentService.getStudentById(this.student.id).subscribe(
            (response)=>{
                this.student = <Student>response;
            },
            (error)=>{
                alert('failure');
            }
        )
    }

    ngOnInit() { }

    update(){
        this.studentService.updateStudent(this.student).subscribe(
            (response)=>{
                alert('success');
                this.router.navigate(['/studentList']);
            },
            (error)=>{
                alert('failure');
            }
        )
    }
    cancel(){
        this.router.navigate(['/studentList']);
    }
}