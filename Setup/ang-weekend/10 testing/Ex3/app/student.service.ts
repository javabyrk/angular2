import { Injectable } from '@angular/core';

import {Student} from './student';

@Injectable()
export class StudentService{
 
 students: Student[] = [
        { id: 1, name: 'student1'},
        { id: 2, name: 'student2'},
        { id: 3, name: 'student3'},
        { id: 4, name: 'student4'}
    ];

  getAllStudents(): Student[] {
    return this.students.slice(0);
  }

  getStudentById(id: number): Student {
    let student = this.students.filter(s => s.id == id)[0];
    return student
      ? {id: student.id, name: student.name }
      : null;
  }
}