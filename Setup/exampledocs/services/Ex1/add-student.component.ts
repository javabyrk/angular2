import {Component, Input, Output, EventEmitter} from '@angular/core';

import {StudentService} from './student.service'

@Component({
  selector: 'add-student-view',
  templateUrl: 'app/add-student.template.html'
})
export class AddStudentComponent {
  @Output() onClosed = new EventEmitter();
  studentName: string;

  constructor(private studentService: StudentService) {
  }


  add() {
    this.studentService.addStudent({id: 0, name:this.studentName});
    this.onClosed.emit(null);
  }

  cancel() {
    this.onClosed.emit(null);
  }
}