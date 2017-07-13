import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'add-student-view',
  templateUrl: 'app/add-student.template.html'
})
export class AddStudentComponent {
  @Output() onAdded = new EventEmitter();
  @Output() onCancel = new EventEmitter();
  added() {
    this.onAdded.emit(null);
  }

  cancel() {
    this.onCancel.emit(null);
  }
}