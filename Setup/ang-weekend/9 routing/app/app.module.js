System.register(['@angular/core', "@angular/platform-browser", '@angular/forms', './app.component', "./student-list.component", "./add-student.component", "./edit-student.component", "./delete-student.component", './student.service', './app.routes'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, forms_1, app_component_1, student_list_component_1, add_student_component_1, edit_student_component_1, delete_student_component_1, student_service_1, app_routes_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (student_list_component_1_1) {
                student_list_component_1 = student_list_component_1_1;
            },
            function (add_student_component_1_1) {
                add_student_component_1 = add_student_component_1_1;
            },
            function (edit_student_component_1_1) {
                edit_student_component_1 = edit_student_component_1_1;
            },
            function (delete_student_component_1_1) {
                delete_student_component_1 = delete_student_component_1_1;
            },
            function (student_service_1_1) {
                student_service_1 = student_service_1_1;
            },
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, app_routes_1.routing],
                        declarations: [app_component_1.AppComponent, student_list_component_1.StudentListComponent, add_student_component_1.AddStudentComponent, edit_student_component_1.EditStudentComponent, delete_student_component_1.DeleteStudentComponent],
                        providers: [student_service_1.StudentService],
                        bootstrap: [app_component_1.AppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.module.js.map