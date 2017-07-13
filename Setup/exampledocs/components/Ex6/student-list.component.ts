import {Component,Input, Output, EventEmitter} from '@angular/core';
import {Student} from './student';

@Component({
  selector: 'student-list-view',
  templateUrl: 'app/student-list.template.html'
})
export class StudentListComponent {
  @Input() students: Student[];
  @Output() onAdd = new EventEmitter();

  add() {
    this.onAdd.emit(null);
  }
}