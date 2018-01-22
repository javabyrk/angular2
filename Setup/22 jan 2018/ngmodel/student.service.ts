import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

@Injectable()
export class StudentService {

    constructor(private http:HttpClient) {

     }

     insert(student){
         return this.http.post('http://localhost:3000/students',student);
     }
}