import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {

    constructor(private http:HttpClient) { }

    getStudents(){
        return this.http.get("http://localhost:3000/students");
    }

    getStudentById(id){
        return this.http.get("http://localhost:3000/students/"+id);
    }

    updateStudent(student){
        return this.http.put("http://localhost:3000/students/"+student.id,student);
    }

    deleteStudent(student){
        return this.http.delete("http://localhost:3000/students/"+student.id);
    }
}