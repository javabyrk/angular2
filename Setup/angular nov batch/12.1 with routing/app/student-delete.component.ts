import { ActivatedRoute,Router } from '@angular/router';
import { StudentService } from './student.service';
import { Student } from './student';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'student-delete',
    templateUrl: 'student-delete.component.html'
})

export class StudentDeleteComponent implements OnInit {
    
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

     delete(){

        this.ss.deleteStudent(this.student.id).subscribe(
            (data) => this.router.navigate(["/list"])
        )
     }

}