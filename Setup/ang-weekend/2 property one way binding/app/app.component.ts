import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'project-root',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {

    message:string;

    constructor() { 
        this.message = "hello world";
    }

    ngOnInit() { }
}