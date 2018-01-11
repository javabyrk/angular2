import { Service2 } from './service2';
import { Injectable } from '@angular/core';

@Injectable()
export class Service1 {

    constructor(private s2:Service2) { 
        console.log("service1 constructor");
    }
}