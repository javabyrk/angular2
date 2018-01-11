import { Service2 } from './service2';
import { Service1 } from './service1';
import { Component } from '@angular/core';

@Component({
    selector: 'c1',
    template: 'component1'
})

export class Component1{
    
    constructor(private s1:Service1,private s2:Service2) {
        console.log("Component1 constructor");
     }
}