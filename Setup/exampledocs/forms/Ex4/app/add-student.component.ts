import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {StudentService} from './student.service';
import {Student} from './student';

@Component({
  selector: 'add-student-view',
  templateUrl: 'app/add-student.template.html'
})
export class AddStudentComponent {
  student = new Student();

  constructor(private studentService: StudentService,
    private router: Router) {
  }


  add() {
    this.studentService.addStudent(this.student);
    this.router.navigate(['/list']);
  }
  
}