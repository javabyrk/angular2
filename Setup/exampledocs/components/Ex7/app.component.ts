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
}