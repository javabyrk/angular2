import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {StudentService} from './student.service'

@Component({
  selector: 'add-student-view',
  templateUrl: 'app/add-student.template.html'
})
export class AddStudentComponent {
  studentName: string;

  constructor(private studentService: StudentService,
    private router: Router) {
  }


  add() {
    this.studentService.addStudent({id: 0, name:this.studentName});
    this.router.navigate(['/list']);
  }
  
}