import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms'
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
    private router: Router,private builder: FormBuilder) {
  }

  ngOnInit() {
    this.studentForm = this.builder.group({
        id: [this.student.id],
        name: [this.student.name,[Validators.required,Validators.minLength(4)]]});
  }

  add() {
    this.student=this.studentForm.value;
    this.studentService.addStudent(this.student);
    this.router.navigate(['/list']);
  }
  
}