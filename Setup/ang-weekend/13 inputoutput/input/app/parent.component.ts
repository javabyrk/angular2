import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'parent',
    template: 'Parent component <child [c1]="i"></child>'
})

export class ParentComponent implements OnInit {
    
    i=10;

    constructor() { }

    ngOnInit() { }

}