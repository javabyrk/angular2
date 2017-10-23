import { Component, OnInit,OnDestroy } from '@angular/core';

@Component({
    selector: 'project-root',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit,OnDestroy {
    constructor() {
        console.log('in the constructor');
     }

    ngOnInit() {
        console.log('in the init');
     }

     ngOnDestroy() {
        console.log('in the destroy');
     }
}