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
var StudentComponent = (function () {
    function StudentComponent() {
        console.log("new - data is " + this.data);
    }
    StudentComponent.prototype.ngOnChanges = function (changes) {
        console.log("ngOnChanges - data is " + this.data);
        for (var key in changes) {
            console.log(key + " changed.\n\t\t\tCurrent: " + changes[key].currentValue + ".\n\t\t\tPrevious: " + changes[key].previousValue);
        }
    };
    StudentComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit - data is " + this.data);
    };
    StudentComponent.prototype.ngDoCheck = function () {
        console.log("ngDoCheck");
    };
    StudentComponent.prototype.ngAfterContentInit = function () {
        console.log("ngAfterContentInit");
    };
    StudentComponent.prototype.ngAfterContentChecked = function () {
        console.log("ngAfterContentChecked");
    };
    StudentComponent.prototype.ngAfterViewInit = function () {
        console.log("ngAfterViewInit");
    };
    StudentComponent.prototype.ngAfterViewChecked = function () {
        console.log("ngAfterViewChecked");
    };
    StudentComponent.prototype.ngOnDestroy = function () {
        console.log("ngOnDestroy");
    };
    __decorate([
        core_1.Input('student'), 
        __metadata('design:type', student_1.Student)
    ], StudentComponent.prototype, "data", void 0);
    StudentComponent = __decorate([
        core_1.Component({
            selector: 'student',
            template: "\n\t\t\t\t<div class=\"card card-block\">\n\t\t\t\t<h4 class=\"card-title\">\n\t\t\t\t<ng-content select=\".name\"></ng-content>\n\t\t\t\t</h4>\n\t\t\t\t<p class=\"card-text\"\n\t\t\t\t[hidden]=\"data.hide\">\n\t\t\t\t<ng-content select=\".address\"></ng-content>\n\t\t\t\t</p>\n\t\t\t\t<a class=\"btn btn-primary\"\n\t\t\t\t(click)=\"data.toggle()\">show/hide</a>\n\t\t\t\t</div>\n\t\t\t"
        }), 
        __metadata('design:paramtypes', [])
    ], StudentComponent);
    return StudentComponent;
}());
exports.StudentComponent = StudentComponent;
//# sourceMappingURL=student.component.js.map