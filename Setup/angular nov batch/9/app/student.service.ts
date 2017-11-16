import { Injectable } from '@angular/core';
import { Student } from "./student";
import { Http } from "@angular/http";

import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
@Injectable()
export class StudentService {

    constructor(private http:Http) { }

    getStudents(){
        return this.http.get('http://localhost:3000/students').map(
            (response) => response.json()
        );
    }
}