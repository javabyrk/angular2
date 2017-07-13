import { Component, OnInit } from '@angular/core';

import {Student} from './student'

@Component({
    moduleId: module.id,
    selector: 'project-app',
    templateUrl: `app.template.html`
})

export class AppComponent{
  students = Student.students.slice(0);
  currentView = 'list';

  navigateTo(view: string) {
    this.currentView = view;
  }
 }