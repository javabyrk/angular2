import { Service } from './service';
import { Component } from '@angular/core';

@Component({
    selector: 'c1',
    template: 'component1'
})

export class Component1{
    constructor(private s1:Service) {
        console.log("Component1 constructor");
     }
}