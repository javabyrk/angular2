import { Component, OnInit } from '@angular/core';

import { Service1 } from "./service1";

@Component({
    selector: 'c1',
    template: '<h1>Component1</h1>'
})

export class Component1 {

    s1:Service1;

    constructor() {
        console.log("in component1");
        this.s1 = new Service1();
     }

}