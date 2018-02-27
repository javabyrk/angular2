import { StudentService } from './student.service';
import { Student } from './student';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from "@angular/router";
@Component({
    selector: 'student-form',
    templateUrl: 'student-form.component.html'
})

export class StudentFormComponent {
    
    student:Student;
    abc:boolean=false;
    insertion:boolean=true;

    constructor(private studentService:StudentService,private router:Router,private route:ActivatedRoute) { 
        this.student = new Student();
        var id=this.route.snapshot.params["abc"];
        if(id){
            this.abc=true;
            this.insertion=false;
            this.load(id);
        }
    }

    save(){
        this.studentService.insertStudent(this.student).subscribe(
            (data)=>{
                alert('success');
                this.router.navigate(['/list']);
            }
        );
    }

    update(){
        this.studentService.updateStudent(this.student).subscribe(
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