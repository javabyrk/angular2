import { Service3 } from './service3';
import { Service2 } from './service2';
import { Service1 } from './service1';
import { Component } from '@angular/core';

@Component({
    selector: 'c1',
    template: 'component1'
})

export class Component1{
    constructor() {
        console.log("Component1 constructor");
        let s3 = new Service3();
        let s2 = new Service2(s3);
        let s1 = new Service1(s2);
     }
}