import {Component} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {StudentService} from './student.service'

@Component({
  selector: 'delete-student-view',
  templateUrl: 'app/delete-student.template.html'
})
export class DeleteStudentComponent {
  studentId: number;
  studentName: string;
  private parSub: any;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ){
  this.studentId = this.route.snapshot.params['id'];
        this.studentName = this.studentService
          .getStudentById(this.studentId).name;
  }

  delete() {
    this.studentService.deleteStudent(this.studentId);
    this.router.navigate(['/list']);
  }
}