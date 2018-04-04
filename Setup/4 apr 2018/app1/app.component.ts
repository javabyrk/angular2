import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})

export class AppComponent{

    i:number;

    message:string;

    constructor() {
        this.i = 10;
        this.message = "<h1>hello world</h1>"
     }

     m1(){
         return "basic method binding example";
     }

}