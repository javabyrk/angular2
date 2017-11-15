import { Injectable } from '@angular/core';
import { Student } from "./student";
@Injectable()
export class StudentService {

    constructor() { }

    getStudents(){
        return [new Student(1,"s1"),new Student(2,"s2")];
    }
}