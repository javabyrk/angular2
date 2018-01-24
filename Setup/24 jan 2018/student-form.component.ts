import { StudentService } from './student.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from "@angular/forms";
@Component({
    selector: 'student-form',
    templateUrl: 'student-form.component.html'
})

export class StudentFormComponent{

    studentForm:FormGroup;

    students;

    constructor(private studentService:StudentService) { 
        this.studentForm = new FormGroup({
            id:new FormControl('',[Validators.required,Validators.minLength(4)]),
            name:new FormControl()
        });
    }

    insert(){
        this.studentService.insert(this.studentForm.value).subscribe(
            (data)=>{
                alert('success');
            }
        
        )
    }

    
}