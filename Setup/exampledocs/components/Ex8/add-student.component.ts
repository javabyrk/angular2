import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'add-student-view',
  templateUrl: 'app/add-student.template.html'
})
export class AddStudentComponent {
  @Input() studentId: number;
  @Output() onAdded = new EventEmitter<string>();
  @Output() onCancel = new EventEmitter();
  studentName: string;

  added() {
    this.onAdded.emit(this.studentName);
  }

  cancel() {
    this.onCancel.emit(null);
  }
}