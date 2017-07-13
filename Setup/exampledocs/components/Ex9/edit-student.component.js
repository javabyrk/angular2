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
var EditStudentComponent = (function () {
    function EditStudentComponent() {
        this.onSaved = new core_1.EventEmitter();
        this.onCancel = new core_1.EventEmitter();
        this.onEdit = new core_1.EventEmitter();
        this.onDelete = new core_1.EventEmitter();
    }
    EditStudentComponent.prototype.saved = function () {
        if (this.student.id) {
            this.onSaved.emit(this.student);
        }
    };
    EditStudentComponent.prototype.cancel = function () {
        this.onCancel.emit(null);
    };
    EditStudentComponent.prototype.edit = function (student) {
        this.onEdit.emit(student);
    };
    EditStudentComponent.prototype.delete = function (student) {
        this.onDelete.emit(student);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', student_1.Student)
    ], EditStudentComponent.prototype, "student", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], EditStudentComponent.prototype, "onSaved", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], EditStudentComponent.prototype, "onCancel", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], EditStudentComponent.prototype, "onEdit", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], EditStudentComponent.prototype, "onDelete", void 0);
    EditStudentComponent = __decorate([
        core_1.Component({
            selector: 'edit-student-view',
            templateUrl: 'app/edit-student.template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], EditStudentComponent);
    return EditStudentComponent;
}());
exports.EditStudentComponent = EditStudentComponent;
//# sourceMappingURL=edit-student.component.js.map