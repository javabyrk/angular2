"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var student_component_1 = require("./student-component");
describe('StudentComponent (inline template)', function () {
    var comp;
    var fixture;
    var de;
    var el;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [student_component_1.StudentComponent],
        });
        fixture = testing_1.TestBed.createComponent(student_component_1.StudentComponent);
        comp = fixture.componentInstance; // StudentComponent test instance
        // query for the name <h1> by CSS element selector
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
        el = de.nativeElement;
    });
    it('no name in the DOM until manually call `detectChanges`', function () {
        expect(el.textContent).toEqual('');
    });
    it('should display original name', function () {
        fixture.detectChanges();
        expect(el.textContent).toContain(comp.name);
    });
    it('should display a different test name', function () {
        comp.name = 'vt';
        fixture.detectChanges();
        expect(el.textContent).toContain('vt');
    });
});
//# sourceMappingURL=student.component.spec.js.map