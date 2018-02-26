import { Student } from './student';
import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

@Injectable()
export class StudentService {

    constructor(private http:HttpClient) { }

    getStudents(){
       return this.http.get("http://localhost:3000/students");
    }

    getStudentById(id:number){
        return this.http.get("http://localhost:3000/students/"+id);
    }

    insertStudent(student:Student){
        return this.http.post("http://localhost:3000/students/",student);
    }

    updateStudent(student:Student){
        return this.http.put("http://localhost:3000/students/"+student.id,student);
    }

    deleteStudent(student:Student){
        return this.http.delete("http://localhost:3000/students/"+student.id);
    }

}