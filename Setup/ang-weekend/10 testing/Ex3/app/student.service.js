"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var StudentService = (function () {
    function StudentService() {
        this.students = [
            { id: 1, name: 'student1' },
            { id: 2, name: 'student2' },
            { id: 3, name: 'student3' },
            { id: 4, name: 'student4' }
        ];
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
    return StudentService;
}());
StudentService = __decorate([
    core_1.Injectable()
], StudentService);
exports.StudentService = StudentService;
//# sourceMappingURL=student.service.js.map