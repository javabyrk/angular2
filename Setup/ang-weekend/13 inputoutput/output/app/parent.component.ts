import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'parent',
    template: 'Parent component <child (e1)="m2();"></child>'
})

export class ParentComponent implements OnInit {
    
    i=10;

    constructor() { }

    ngOnInit() { }

    m2(){
        console.log('parent function');
    }

}