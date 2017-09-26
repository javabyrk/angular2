import {Component} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {StudentService} from './student.service'

@Component({
  selector: 'edit-student-view',
  templateUrl: 'app/edit-student.template.html'
})
export class EditStudentComponent implement OnInit {
  studentId: number;
  studentName: string;

constructor(private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router) {
    
  }

  ngOnInit(){
    this.studentId = this.route.snapshot.params['id'];
    this.studentName = this.studentService
      .getStudentById(this.studentId).name;
  }
 save() {
    this.studentService.saveStudent({id: this.studentId, name:this.studentName});
    this.router.navigate(['/list']);
  }
  
}