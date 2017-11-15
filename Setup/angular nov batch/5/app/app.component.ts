import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'project',
    templateUrl: 'app.component.html'
})

export class AppComponent  {

    studentNames:string[] ;

    constructor(){
        this.studentNames = ["s1","s2","s3"];
    }
   
}