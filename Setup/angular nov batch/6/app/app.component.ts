import { Component, OnInit } from '@angular/core';
import { Student } from "./student";
@Component({
    selector: 'project',
    templateUrl: 'app.component.html'
})

export class AppComponent  {

    students:Student[] ;

    constructor(){
        this.students = [new Student(1,"s1"),new Student(2,"s2")];
    }
   
}