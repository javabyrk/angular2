import {Component,Input, Output, EventEmitter} from '@angular/core';
import {Student} from './student';

@Component({
  selector: 'student-list-view',
  templateUrl: 'app/student-list.template.html'
})
export class StudentListComponent {
  @Input() students: Student[];
  @Output() onAdd = new EventEmitter();
  @Output() onEdit = new EventEmitter<Student>();
  @Output() onDelete = new EventEmitter<Student>();

  add() {
    this.onAdd.emit(null);
  }
  edit(student: Student) {
    this.onEdit.emit(student);
  }

  delete(student: Student) {
    this.onDelete.emit(student);
  }
}