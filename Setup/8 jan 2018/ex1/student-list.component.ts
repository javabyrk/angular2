import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'student-list',
    templateUrl: 'student-list.component.html'
})

export class StudentListComponent{


        students;

        constructor(){
            this.students = ["s1","s2","s3"];
        }

}