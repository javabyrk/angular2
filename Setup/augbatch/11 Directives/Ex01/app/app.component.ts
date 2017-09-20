import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'project-app',
    template: '<ul><li *ngFor="let user of users" highlight>{{user}}</li></ul>'
})

export class AppComponent implements OnInit {

    users;

    constructor() {
        this.users = ["s1","s2","s3"];
     }

    ngOnInit() { }

}