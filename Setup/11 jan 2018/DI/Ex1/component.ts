import { Service } from './service';
import { Component } from '@angular/core';

@Component({
    selector: 'c1',
    template: 'component'
})

export class Component1{
    s1;
    constructor() {
        console.log("Component1 constructor");
        this.s1 = new Service();
     }
}