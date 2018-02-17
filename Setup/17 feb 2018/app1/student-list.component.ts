import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'student-list',
    templateUrl: 'student-list.component.html'
})

export class StudentListComponent{
    
    studentNames:string[];
    constructor(){
        this.studentNames = ["s1","s2","s3"];
    }

}