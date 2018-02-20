import { Service2 } from './service2';
import { Component, OnInit } from '@angular/core';

import { Service1 } from "./service1";

@Component({
    selector: 'c2',
    template: '<h1>Component2</h1>'
})

export class Component2 {

    constructor(private s1:Service1) {
        console.log("in component2");
     }

}