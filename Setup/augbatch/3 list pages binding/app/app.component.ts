import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'project-root',
    templateUrl: 'app.component.html'
})

export class AppComponent {

    message:string;

    constructor() { 
        this.message = "Student List";
    }

}