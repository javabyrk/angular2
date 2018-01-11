import { Service } from './service';
import { Component } from '@angular/core';

@Component({
    selector: 'c2',
    template: 'component2'
})

export class Component2{
    constructor(private s1:Service) {
        console.log("Component2 constructor");
     }
}