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
var DeleteStudentComponent = (function () {
    function DeleteStudentComponent() {
        this.onDeleted = new core_1.EventEmitter();
        this.onCancel = new core_1.EventEmitter();
    }
    DeleteStudentComponent.prototype.deleted = function () {
        this.onDeleted.emit(null);
    };
    DeleteStudentComponent.prototype.cancel = function () {
        this.onCancel.emit(null);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', student_1.Student)
    ], DeleteStudentComponent.prototype, "student", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DeleteStudentComponent.prototype, "onDeleted", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DeleteStudentComponent.prototype, "onCancel", void 0);
    DeleteStudentComponent = __decorate([
        core_1.Component({
            selector: 'delete-student-view',
            templateUrl: 'app/delete-student.template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], DeleteStudentComponent);
    return DeleteStudentComponent;
}());
exports.DeleteStudentComponent = DeleteStudentComponent;
//# sourceMappingURL=delete-student.component.js.map