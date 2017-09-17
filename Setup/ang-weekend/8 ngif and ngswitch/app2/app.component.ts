import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'project-root',
    templateUrl: 'app.component.html'
})

export class AppComponent {

    message:string;
    currentPage:string = '';

    constructor() { 
        this.message = "Student List";
    }

    m1(pageName:string){
        this.currentPage = pageName;
    }

}