import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from './student.service';
import { Student } from './student';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'student-update',
    templateUrl: 'student-update.component.html'
})

export class StudentUpdateComponent implements OnInit {
    
    
    student:Student;

    constructor(private ss:StudentService,private route:ActivatedRoute,private router:Router) { }

    ngOnInit() {
        let id = this.route.snapshot.params["id"];
        this.load(id);
     }

     load(id) {
        this.ss.getStudentById(id).subscribe(
            (data) => this.student= data
        )
    }

     update(){

        this.ss.updateStudent(this.student).subscribe(
            (data) => this.router.navigate(["/list"]);
        )
     }

}