"use strict";
var Student = (function () {
    function Student(name, address) {
        this.name = name;
        this.address = address;
        this.hide = true;
    }
    Student.prototype.toggle = function () {
        this.hide = !this.hide;
    };
    return Student;
}());
exports.Student = Student;
//# sourceMappingURL=student.js.map