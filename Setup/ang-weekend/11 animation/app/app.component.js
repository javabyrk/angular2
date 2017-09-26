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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("./_services/index");
var AppComponent = (function () {
    function AppComponent(productService) {
        this.productService = productService;
        // add some initial products
        if (productService.getAll().length === 0) {
            productService.save({ name: 'Boardies', price: '25.00' });
            productService.save({ name: 'Singlet', price: '9.50' });
            productService.save({ name: 'Thongs (Flip Flops)', price: '12.95' });
        }
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id.toString(),
            selector: 'app',
            templateUrl: 'app.component.html'
        }),
        __metadata("design:paramtypes", [index_1.ProductService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map