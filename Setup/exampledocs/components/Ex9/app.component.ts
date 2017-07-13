import { Component, OnInit } from '@angular/core';

import {Student} from './student'

@Component({
    moduleId: module.id,
    selector: 'project-app',
    templateUrl: `app.template.html`
})

export class AppComponent{
  students = Student.students.slice(0);
  newStudentId: number;
  currentView = 'list';

  currentStudent: Student;

  navigateTo(view: string) {
    this.currentView = view;
  }
startAdd() {
    this.newStudentId = this.students.length > 0
      ? this.students.map(s => s.id).reduce((p, c) => p < c ? c : p) + 1
      : 1;
    this.navigateTo('add');
  }

  studentAdded(newStudentName: string) {
    this.students.push({id: this.newStudentId, name:newStudentName});
    this.navigateTo('list');
  }

  startEdit(student: Student) {
    this.currentStudent = { id: student.id, name: student.name };
    this.navigateTo('edit');
  }

  studentSaved(student: Student) {
    let oldStudent = this.students.filter(s => s.id == student.id)[0];
    if (oldStudent) {
      oldStudent.name = student.name;
    }
    this.navigateTo('list');
  }

  startDelete(student: Student) {
    this.currentStudent = student;
    this.navigateTo('delete');
  }

  studentDeleted() {
    var studentIndex = this.students.indexOf(this.currentStudent);
    if (studentIndex >= 0) {
      this.students.splice(studentIndex, 1);
    }
    this.navigateTo('list');
  }
}