System.register(['@angular/router', './student-list.component', './add-student.component', './edit-student.component', './delete-student.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, student_list_component_1, add_student_component_1, edit_student_component_1, delete_student_component_1;
    var routes, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
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
            }],
        execute: function() {
            routes = [
                { path: 'list', component: student_list_component_1.StudentListComponent },
                { path: 'add', component: add_student_component_1.AddStudentComponent },
                { path: 'edit/:id', component: edit_student_component_1.EditStudentComponent },
                { path: 'delete/:id', component: delete_student_component_1.DeleteStudentComponent },
                { path: '', redirectTo: 'list', pathMatch: 'full' }
            ];
            exports_1("routing", routing = router_1.RouterModule.forRoot(routes));
        }
    }
});
//# sourceMappingURL=app.routes.js.map