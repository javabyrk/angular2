import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Student} from './student';

@Component({
  selector: 'delete-student-view',
  templateUrl: 'app/delete-student.template.html'
})
export class DeleteStudentComponent {
  @Input() student: Student;
  @Output() onDeleted = new EventEmitter();
  @Output() onCancel = new EventEmitter();

  deleted() {
    this.onDeleted.emit(null);
  }

  cancel() {
    this.onCancel.emit(null);
  }
}