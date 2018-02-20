import { Service2 } from './service2';
import { Component, OnInit } from '@angular/core';

import { Service1 } from "./service1";

@Component({
    selector: 'c1',
    template: '<h1>Component1</h1>'
})

export class Component1 {

    constructor(private s1:Service1) {
        console.log("in component1");
     }

}