import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {

    constructor() { }

    getStudents(){
        return ["s1","s2","s3"];
    }
}