import { Service1 } from './service1';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'c1',
    template: '<h1>component1</h1>'
})

export class Component1{
    constructor(private s1:Service1) { 
        console.log('Component1 constructor');
    }
}