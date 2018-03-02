import { Service1 } from './service1';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'c2',
    templateUrl: 'c2.component.html'
})

export class Component2{
    message;
    constructor(private s1:Service1) {
        this.s1.getMessage().subscribe((data)=>this.message=data);
     }

}