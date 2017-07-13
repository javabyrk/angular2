import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Student} from './student';
@Component({
  selector: 'edit-student-view',
  templateUrl: 'app/edit-student.template.html'
})
export class EditStudentComponent {
  @Input() student: Student;
  @Output() onSaved = new EventEmitter<Student>();
  @Output() onCancel = new EventEmitter();
    @Output() onEdit = new EventEmitter<Student>();
  @Output() onDelete = new EventEmitter<Student>();

  saved() {
    if (this.student.id) {
      this.onSaved.emit(this.student);
    }
  }

  cancel() {
    this.onCancel.emit(null);
  }

  edit(student: Student) {
    this.onEdit.emit(student);
  }

  delete(student: Student) {
    this.onDelete.emit(student);
  }
}