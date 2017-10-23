import { Component, OnInit , Output , EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'child',
    template: '<button (click)="m1();">Click</button>'
})

export class ChildComponent implements OnInit {
    
    @Output() e1 = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    m1(){
        this.e1.emit(null);
    }
}