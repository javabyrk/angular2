import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})

export class AppComponent{

    message:string;

    constructor() {
        this.message = "first databinding example";
     }

     m1(){
         this.message = "first event binding example";
     }
}