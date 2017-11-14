import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'project',
    templateUrl: 'app.component.html'
})

export class AppComponent {

    message:string;

    constructor(){
        this.message =" property binding";
    }
   
}