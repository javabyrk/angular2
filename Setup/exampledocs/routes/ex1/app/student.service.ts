import {Injectable} from '@angular/core';
import {Student} from './student';

@Injectable()
export class StudentService {
  private students = [
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

  addStudent(newStudent: Student) {
    newStudent.id = this.students.length > 0 
      ? this.students.map(s => s.id).reduce((p, c) => p < c ? c : p) + 1
      : 1;
    this.students.push(newStudent);
  }

  saveStudent(student: Student) {
    let oldStudent = this.students.filter(s => s.id == student.id)[0];
    if (oldStudent) {
      oldStudent.name = student.name;
    }
  }

  deleteStudent(id: number) {
    let oldStudent = this.students.filter(s => s.id == id)[0];
    if (oldStudent) {
      let studentIndex = this.students.indexOf(oldStudent);
      if (studentIndex >= 0) {
        this.students.splice(studentIndex, 1);
      }
    }
  }
}