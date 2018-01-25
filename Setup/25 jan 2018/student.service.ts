import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {

    constructor(private http:HttpClient) { }

    updateStudent(student){
       return this.http.put("http://localhost:3000/students/"+student.id,student);
    }

    getStudentById(id:number){
        return this.http.get("http://localhost:3000/students/"+id);
    }

}