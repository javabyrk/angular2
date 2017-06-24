"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var student_1 = require('./student');
var StudentListComponent = (function () {
    function StudentListComponent() {
        this.students = [];
    }
    StudentListComponent.prototype.addStudent = function () {
        this.students.unshift(new student_1.Student("raju", "s r nagar"));
    };
    StudentListComponent.prototype.deleteStudents = function () {
        this.students = [];
    };
    StudentListComponent = __decorate([
        core_1.Component({
            selector: 'student-list',
            template: "\n\t\t\t\t\t\t<student *ngFor=\"let j of students\" [student]=\"j\">\n\t\t\t\t\t\t<span class=\"name\">{{ j.name }}?</span>\n\t\t\t\t\t\t<h1 class=\"address\">{{ j.address }}</h1>\n\t\t\t\t\t\t</student>\n\t\t\t\t\t\t<button type=\"button\"\n\t\t\t\t\t\tclass=\"btn btn-success\"\n\t\t\t\t\t\t(click)=\"addStudent()\">Add Student\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<button type=\"button\"\n\t\t\t\t\t\tclass=\"btn btn-danger\"\n\t\t\t\t\t\t(click)=\"deleteStudents()\">Clear Students\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t"
        }), 
        __metadata('design:paramtypes', [])
    ], StudentListComponent);
    return StudentListComponent;
}());
exports.StudentListComponent = StudentListComponent;
//# sourceMappingURL=studentlist.component.js.map