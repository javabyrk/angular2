"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var student_service_1 = require("./student.service");
describe('Student Service', function () {
    var studentService;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [student_service_1.StudentService]
        });
        // StudentService from the root injector
        studentService = testing_1.TestBed.get(student_service_1.StudentService);
    });
    it('test for get All students', function () {
        expect(studentService.getAllStudents().length).toBe(4, "student table contains 4 records");
    });
    it('test for get student', function () {
        expect(studentService.getStudentById(1).name).toBe("student1");
    });
});
//# sourceMappingURL=student.service.spec.js.map