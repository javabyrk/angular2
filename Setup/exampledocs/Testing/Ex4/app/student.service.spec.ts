import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentService } from './student.service';


describe('Student Service', () => {

  let studentService:StudentService;

  beforeEach(() => {
    
    TestBed.configureTestingModule({
       providers: [StudentService]
    });

    // StudentService from the root injector
    studentService = TestBed.get(StudentService);

  });

  it('test for get All students', () => {
     
      expect(studentService.getAllStudents().length).toBe(4,"student table contains 4 records")
     
    });

    it('test for get student', () => {
     
      expect(studentService.getStudentById(1).name).toBe("student1")
     
    });
});
