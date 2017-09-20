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
var ConfirmDirective = (function () {
    function ConfirmDirective() {
    }
    ConfirmDirective.prototype.confirmFirst = function (event) {
        return window.confirm('Are you sure you want to do this?');
    };
    __decorate([
        core_1.HostListener('click', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Event]), 
        __metadata('design:returntype', void 0)
    ], ConfirmDirective.prototype, "confirmFirst", null);
    ConfirmDirective = __decorate([
        core_1.Directive({
            selector: "[confirm-first]"
        }), 
        __metadata('design:paramtypes', [])
    ], ConfirmDirective);
    return ConfirmDirective;
}());
exports.ConfirmDirective = ConfirmDirective;
//# sourceMappingURL=app.directive.js.map