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
var AppComponent = (function () {
    function AppComponent() {
        this.students = student_1.Student.students.slice(0);
        this.currentView = 'list';
    }
    AppComponent.prototype.navigateTo = function (view) {
        this.currentView = view;
    };
    AppComponent.prototype.startAdd = function () {
        this.newStudentId = this.students.length > 0
            ? this.students.map(function (s) { return s.id; }).reduce(function (p, c) { return p < c ? c : p; }) + 1
            : 1;
        this.navigateTo('add');
    };
    AppComponent.prototype.studentAdded = function (newStudentName) {
        this.students.push({ id: this.newStudentId, name: newStudentName });
        this.navigateTo('list');
    };
    AppComponent.prototype.startEdit = function (student) {
        this.currentStudent = { id: student.id, name: student.name };
        this.navigateTo('edit');
    };
    AppComponent.prototype.studentSaved = function (student) {
        var oldStudent = this.students.filter(function (s) { return s.id == student.id; })[0];
        if (oldStudent) {
            oldStudent.name = student.name;
        }
        this.navigateTo('list');
    };
    AppComponent.prototype.startDelete = function (student) {
        this.currentStudent = student;
        this.navigateTo('delete');
    };
    AppComponent.prototype.studentDeleted = function () {
        var studentIndex = this.students.indexOf(this.currentStudent);
        if (studentIndex >= 0) {
            this.students.splice(studentIndex, 1);
        }
        this.navigateTo('list');
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'project-app',
            templateUrl: "app.template.html"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map