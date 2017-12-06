import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

import { Student } from "./student";

@Injectable()
export class StudentService {


    constructor(private http:HttpClient) { }

    insertStudent(student:Student){
        return this.http.post("http://localhost:3000/students",student);
    }
    getStudents()
    {
        return this.http.get<Student[]>("http://localhost:3000/students");

    }
    getStudentById(id:number)
    {
        return this.http.get<Student>("http://localhost:3000/students/"+id);

    }
    deleteStudent(student:Student){
        return this.http.delete("http://localhost:3000/students/"+student.id);
    }

    updateStudent(student:Student){
        return this.http.put("http://localhost:3000/students/"+student.id,student);
    }
}