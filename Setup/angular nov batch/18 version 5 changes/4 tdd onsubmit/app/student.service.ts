import { Student } from './student';
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map'

@Injectable()
export class StudentService {

    constructor(private http:Http) { }

    registerStudent(student:Student){
        return this.http.post("http://localhost:3000/students",student).map(
            (response) => response.json()
        )
    }
}