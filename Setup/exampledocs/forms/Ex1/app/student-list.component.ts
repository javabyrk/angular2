import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Student} from './student';
import {StudentService} from './student.service'

@Component({
  selector: 'student-list-view',
  templateUrl: 'app/student-list.template.html'
})
export class StudentListComponent {
  students: Student[];

  constructor(private studentService: StudentService,
    private router: Router
  ) {
    this.students = studentService.getAllStudents();
  }

  add(studentId: number) {
    this.router.navigate(['/add']);
  }

  
  edit(studentId: number) {
    this.router.navigate(['/edit', studentId]);
  }

  delete(studentId: number) {
    this.router.navigate(['/delete', studentId]);
  }
}