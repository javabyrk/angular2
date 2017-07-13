import {Component,Input, Output, EventEmitter} from '@angular/core';
import {Student} from './student';
import {StudentService} from './student.service'

@Component({
  selector: 'student-list-view',
  templateUrl: 'app/student-list.template.html'
})
export class StudentListComponent {
  students: Student[];
  @Output() onAdd = new EventEmitter();
    @Output() onEdit = new EventEmitter<Student>();
  @Output() onDelete = new EventEmitter<Student>();

  constructor(private studentService: StudentService) {
    this.students = studentService.getAllStudents();
  }

  add() {
    this.onAdd.emit(null);
  }
  edit(studentId: number) {
    this.onEdit.emit(studentId);
  }

  delete(studentId: number) {
    this.onDelete.emit(studentId);
  }
}