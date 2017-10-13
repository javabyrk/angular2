import { Component, OnInit } from '@angular/core';

import { Student } from "./student";

@Component({
    selector: 'student-form',
    templateUrl: 'student-form.component.html'
})

export class StudentFormComponent{

    student:Student;

    constructor() { 
        this.student = new Student();
    }

    insert(){
        console.log(this.student);
    }
}