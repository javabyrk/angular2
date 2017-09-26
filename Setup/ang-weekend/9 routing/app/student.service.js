System.register(['@angular/core', './student'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, student_1;
    var StudentService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (student_1_1) {
                student_1 = student_1_1;
            }],
        execute: function() {
            StudentService = (function () {
                function StudentService() {
                    this.students = student_1.Student.students.slice(0);
                }
                StudentService.prototype.getAllStudents = function () {
                    return this.students.slice(0);
                };
                StudentService.prototype.getStudentById = function (id) {
                    var student = this.students.filter(function (s) { return s.id == id; })[0];
                    return student
                        ? { id: student.id, name: student.name }
                        : null;
                };
                StudentService.prototype.addStudent = function (newStudent) {
                    newStudent.id = this.students.length > 0
                        ? this.students.map(function (s) { return s.id; }).reduce(function (p, c) { return p < c ? c : p; }) + 1
                        : 1;
                    this.students.push(newStudent);
                };
                StudentService.prototype.saveStudent = function (student) {
                    var oldStudent = this.students.filter(function (s) { return s.id == student.id; })[0];
                    if (oldStudent) {
                        oldStudent.name = student.name;
                    }
                };
                StudentService.prototype.deleteStudent = function (id) {
                    var oldStudent = this.students.filter(function (s) { return s.id == id; })[0];
                    if (oldStudent) {
                        var studentIndex = this.students.indexOf(oldStudent);
                        if (studentIndex >= 0) {
                            this.students.splice(studentIndex, 1);
                        }
                    }
                };
                StudentService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], StudentService);
                return StudentService;
            }());
            exports_1("StudentService", StudentService);
        }
    }
});
//# sourceMappingURL=student.service.js.map