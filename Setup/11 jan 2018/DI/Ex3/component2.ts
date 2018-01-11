import { Service } from './service';
import { Component } from '@angular/core';

@Component({
    selector: 'c2',
    template: 'component2'
})

export class Component2{
    s1;
    constructor() {
        console.log("Component2 constructor");
        this.s1 = new Service();
     }
}