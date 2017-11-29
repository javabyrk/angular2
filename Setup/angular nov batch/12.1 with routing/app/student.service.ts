import { Student } from './student';
import { Injectable } from '@angular/core';

import { Http } from "@angular/http";

import { Observable } from "rxjs";

import 'rxjs/add/operator/map';

@Injectable()
export class StudentService {

    constructor(private http:Http) { }

    getStudents(){
        return this.http.get("http://localhost:3000/students").map(
            (response)=>response.json()
        )
    }

    getStudentById(id:number){
        return this.http.get("http://localhost:3000/students/"+id).map(
            (response)=>response.json()
        )
    }

    insertStudent(student:Student){
        return this.http.post("http://localhost:3000/students",student).map(
            (response)=>response.json()
        )
    }

    updateStudent(student:Student){
        return this.http.put("http://localhost:3000/students/"+student.id,student).map(
            (response)=>response.json()
        )
    }

    deleteStudent(id:number){
        return this.http.delete("http://localhost:3000/students/"+id).map(
            (response)=>response.json()
        )
    }

}