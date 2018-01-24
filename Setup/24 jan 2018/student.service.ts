import { Student } from './student';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {

    constructor(private http:HttpClient) { }

    insert(student:Student){

       return this.http.post("http://localhost:3000/students",student);

    }
}