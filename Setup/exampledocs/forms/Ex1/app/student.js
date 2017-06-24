System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Student;
    return {
        setters:[],
        execute: function() {
            Student = (function () {
                function Student() {
                }
                Student.students = [
                    { id: 1, name: 'student1' },
                    { id: 2, name: 'student2' },
                    { id: 3, name: 'student3' },
                    { id: 4, name: 'student4' }
                ];
                return Student;
            }());
            exports_1("Student", Student);
        }
    }
});
//# sourceMappingURL=student.js.map