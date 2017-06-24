System.register(['@angular/core', '@angular/forms', '@angular/router', './student.service', './student'], function(exports_1, context_1) {
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
    var core_1, forms_1, router_1, student_service_1, student_1;
    var AddStudentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (student_service_1_1) {
                student_service_1 = student_service_1_1;
            },
            function (student_1_1) {
                student_1 = student_1_1;
            }],
        execute: function() {
            AddStudentComponent = (function () {
                function AddStudentComponent(studentService, router) {
                    this.studentService = studentService;
                    this.router = router;
                    this.student = new student_1.Student();
                }
                AddStudentComponent.prototype.ngOnInit = function () {
                    this.studentForm = new forms_1.FormGroup({
                        id: new forms_1.FormControl(this.student.id),
                        name: new forms_1.FormControl(this.student.name, [forms_1.Validators.required,
                            forms_1.Validators.minLength(4)]) });
                };
                AddStudentComponent.prototype.add = function () {
                    this.student = this.studentForm.value;
                    this.studentService.addStudent(this.student);
                    this.router.navigate(['/list']);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', forms_1.FormGroup)
                ], AddStudentComponent.prototype, "studentForm", void 0);
                AddStudentComponent = __decorate([
                    core_1.Component({
                        selector: 'add-student-view',
                        templateUrl: 'app/add-student.template.html'
                    }), 
                    __metadata('design:paramtypes', [student_service_1.StudentService, router_1.Router])
                ], AddStudentComponent);
                return AddStudentComponent;
            }());
            exports_1("AddStudentComponent", AddStudentComponent);
        }
    }
});
//# sourceMappingURL=add-student.component.js.map