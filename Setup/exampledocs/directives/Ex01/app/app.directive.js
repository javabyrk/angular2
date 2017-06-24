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
var HighLightDirective = (function () {
    function HighLightDirective(element) {
        this.element = element;
    }
    HighLightDirective.prototype.onMouseEnter = function () {
        this.setAppearance('#aaaaaa', 'pointer');
    };
    HighLightDirective.prototype.onMouseLeave = function () {
        this.setAppearance(null, null);
    };
    HighLightDirective.prototype.setAppearance = function (color, cursor) {
        var style = this.element.nativeElement.style;
        style.backgroundColor = color;
        style.cursor = cursor;
    };
    __decorate([
        core_1.HostListener('mouseenter'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], HighLightDirective.prototype, "onMouseEnter", null);
    __decorate([
        core_1.HostListener('mouseleave'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], HighLightDirective.prototype, "onMouseLeave", null);
    HighLightDirective = __decorate([
        core_1.Directive({
            selector: '[highlight]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], HighLightDirective);
    return HighLightDirective;
}());
exports.HighLightDirective = HighLightDirective;
//# sourceMappingURL=app.directive.js.map