import { Service1 } from './service1';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'c2',
    template: '<h1>component2</h1>'
})

export class Component2{
    constructor(private s1:Service1) { 
        console.log('Component2 constructor');
    }
}