import { Service1 } from './service1';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'c1',
    templateUrl: 'c1.component.html'
})

export class Component1{
    message:string;
    constructor(private s1:Service1) { }
    send(){
        this.s1.setMessage(this.message);
    }
}