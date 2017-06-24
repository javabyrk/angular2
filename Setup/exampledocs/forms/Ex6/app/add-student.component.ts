import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {Router} from '@angular/router';
import {StudentService} from './student.service';
import {Student} from './student';

@Component({
  selector: 'add-student-view',
  templateUrl: 'app/add-student.template.html'
})
export class AddStudentComponent implements OnInit {
  student = new Student();

  @Input() studentForm: FormGroup;

  constructor(private studentService: StudentService,
    private router: Router) {
  }

  ngOnInit() {
    this.studentForm = new FormGroup({
        id: new FormControl(this.student.id),
        name: new FormControl(this.student.name,[Validators.required,
        Validators.minLength(4)])});
  }

  add() {
    this.student=this.studentForm.value;
    this.studentService.addStudent(this.student);
    this.router.navigate(['/list']);
  }
  
}