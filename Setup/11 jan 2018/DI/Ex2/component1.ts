import { Service2 } from './service2';
import { Service1 } from './service1';
import { Component } from '@angular/core';

@Component({
    selector: 'c1',
    template: 'component1'
})

export class Component1{
    s1;
    s2;
    constructor() {
        console.log("Component1 constructor");
        this.s1 = new Service1();
        this.s2 = new Service2();
     }
}