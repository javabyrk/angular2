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
var StudentListComponent = (function () {
    function StudentListComponent() {
        this.onAdd = new core_1.EventEmitter();
        this.onEdit = new core_1.EventEmitter();
        this.onDelete = new core_1.EventEmitter();
    }
    StudentListComponent.prototype.add = function () {
        this.onAdd.emit(null);
    };
    StudentListComponent.prototype.edit = function (student) {
        this.onEdit.emit(student);
    };
    StudentListComponent.prototype.delete = function (student) {
        this.onDelete.emit(student);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], StudentListComponent.prototype, "students", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], StudentListComponent.prototype, "onAdd", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], StudentListComponent.prototype, "onEdit", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], StudentListComponent.prototype, "onDelete", void 0);
    StudentListComponent = __decorate([
        core_1.Component({
            selector: 'student-list-view',
            templateUrl: 'app/student-list.template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], StudentListComponent);
    return StudentListComponent;
}());
exports.StudentListComponent = StudentListComponent;
//# sourceMappingURL=student-list.component.js.map