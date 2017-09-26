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
var index_1 = require("../_services/index");
// import fade in animation
var index_2 = require("../_animations/index");
var ProductListComponent = (function () {
    function ProductListComponent(productService, pubSubService) {
        this.productService = productService;
        this.pubSubService = pubSubService;
    }
    ProductListComponent.prototype.deleteProduct = function (id) {
        this.productService.delete(id);
        this.loadProducts();
    };
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadProducts();
        // reload products when updated
        this.subscription = this.pubSubService.on('products-updated').subscribe(function () { return _this.loadProducts(); });
    };
    ProductListComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    ProductListComponent.prototype.loadProducts = function () {
        this.products = this.productService.getAll();
    };
    ProductListComponent = __decorate([
        core_1.Component({
            moduleId: module.id.toString(),
            templateUrl: 'product-list.component.html',
            // make fade in animation available to this component
            animations: [index_2.fadeInAnimation],
            // attach the fade in animation to the host (root) element of this component
            host: { '[@fadeInAnimation]': '' }
        }),
        __metadata("design:paramtypes", [index_1.ProductService,
            index_1.PubSubService])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map