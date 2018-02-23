import { Student } from './student';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {

    constructor(private httpClient:HttpClient) { }

    getStudents(){
       return this.httpClient.get('http://localhost:3000/students');
    }

    insertStudent1(a:number,b:string,c:string){
        var student = {"id":a,"name":b,"email":c};
        return this.httpClient.post('http://localhost:3000/students',student);
    }

    insertStudent2(student:Student){
        return this.httpClient.post('http://localhost:3000/students',student);
    }
}