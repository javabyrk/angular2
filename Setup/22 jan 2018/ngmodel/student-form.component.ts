import { StudentService } from './student.service';
import { Student } from './student';

import { Component } from '@angular/core';

@Component({
    selector: 'student-form',
    templateUrl: 'student-form.component.html'
})

export class StudentFormComponent{
    student:Student;
    constructor(private studentService:StudentService) {
        this.student = new Student();
        this.student.id=4;
     }

     insert(){
         console.log(this.student);
         this.studentService.insert(this.student).subscribe(
             (data)=>console.log(data)
         );
     }

}