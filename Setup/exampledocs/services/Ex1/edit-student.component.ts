import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Student} from './student';
import {StudentService} from './student.service'

@Component({
  selector: 'edit-student-view',
  templateUrl: 'app/edit-student.template.html'
})
export class EditStudentComponent {
  @Input() studentId: number;
  studentName: string;
  @Output() onClosed = new EventEmitter();

constructor(private studentService: StudentService) {
    this.studentName = this.studentService
      .getStudentById(this.studentId).name;
  }

 save() {
    this.studentService.saveStudent({id: this.studentId, name:this.studentName});
    this.onClosed.emit(null);
  }

  cancel() {
    this.onClosed.emit(null);
  }
}