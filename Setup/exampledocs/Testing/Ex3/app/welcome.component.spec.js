"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var welcome_component_1 = require("./welcome.component");
var user_service_1 = require("./user-service");
describe('WelcomeComponent (inline template)', function () {
    var comp;
    var fixture;
    var de;
    var el;
    var userServiceStub;
    var userService;
    beforeEach(function () {
        // stub UserService for test purposes
        userServiceStub = {
            isLoggedIn: true,
            user: { name: 'Test User' }
        };
        testing_1.TestBed.configureTestingModule({
            declarations: [welcome_component_1.WelcomeComponent],
            providers: [{ provide: user_service_1.UserService, useValue: userServiceStub }]
        });
        fixture = testing_1.TestBed.createComponent(welcome_component_1.WelcomeComponent);
        comp = fixture.componentInstance;
        // UserService from the root injector
        userService = testing_1.TestBed.get(user_service_1.UserService);
        //  get the "welcome" element by CSS selector (e.g., by class name)
        de = fixture.debugElement.query(platform_browser_1.By.css('.welcome'));
        el = de.nativeElement;
    });
    it('should welcome the user', function () {
        fixture.detectChanges();
        var content = el.textContent;
        expect(content).toContain('Welcome', '"Welcome ..."');
        expect(content).toContain('Test User', 'expected name');
    });
    it('should welcome "Raju"', function () {
        userService.user.name = 'Raju'; // welcome message hasn't been shown yet
        fixture.detectChanges();
        expect(el.textContent).toContain('Raju');
    });
    it('should request login if not logged in', function () {
        userService.isLoggedIn = false; // welcome message hasn't been shown yet
        fixture.detectChanges();
        var content = el.textContent;
        expect(content).not.toContain('Welcome', 'not welcomed');
        expect(content).toMatch(/log in/i, '"log in"');
    });
});
//# sourceMappingURL=welcome.component.spec.js.map