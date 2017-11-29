import { StudentService } from './student.service';
import { Student } from './student';
import { Component, OnInit } from '@angular/core';

import { FormGroup,FormControl,Validators } from "@angular/forms";

@Component({
    selector: 'student-reg',
    templateUrl: 'student-reg.component.html'
})

export class StudentRegComponent implements OnInit {
    
    studentForm:FormGroup;

    constructor(private studentService:StudentService) { }

    ngOnInit() {
        this.studentForm = new FormGroup({
            id:new FormControl('',[Validators.minLength(4)]),
            name:new FormControl('',[Validators.required])
        });
     }

    register(){
        this.studentService.registerStudent(this.studentForm.value).subscribe(
            (data) => console.log(data)
        )
    }
}