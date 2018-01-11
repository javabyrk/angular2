import { Service3 } from './service3';
import { Injectable } from '@angular/core';

@Injectable()
export class Service2 {

    constructor(private s3:Service3) { 
        console.log("service2 constructor");
    }
}