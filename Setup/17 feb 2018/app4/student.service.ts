import { Student } from './student';
import { Injectable } from '@angular/core';

@Injectable()
export class StudentService {
    students:Student[];
    constructor() { 
        this.students = [
            
            new Student(1,"student1"),
            new Student(2,"student2"),
            new Student(3,"student3")

        ];
    }

    getStudents(){
        return this.students;
    }

    insertStudent(student:Student){
        this.students.push(student);
    }

    
}