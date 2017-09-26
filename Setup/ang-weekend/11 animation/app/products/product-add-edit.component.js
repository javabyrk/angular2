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
var router_1 = require("@angular/router");
var index_1 = require("../_services/index");
// import slide in/out animation
var index_2 = require("../_animations/index");
var ProductAddEditComponent = (function () {
    function ProductAddEditComponent(route, router, productService, pubSubService) {
        this.route = route;
        this.router = router;
        this.productService = productService;
        this.pubSubService = pubSubService;
        this.title = 'Add Product';
        this.product = {};
    }
    ProductAddEditComponent.prototype.ngOnInit = function () {
        var productId = Number(this.route.snapshot.params['id']);
        if (productId) {
            this.title = 'Edit Product';
            this.product = this.productService.getById(productId);
        }
    };
    ProductAddEditComponent.prototype.saveProduct = function () {
        // save product
        this.productService.save(this.product);
        // redirect to users view
        this.router.navigate(['products']);
        // publish event so list controller can refresh
        this.pubSubService.publish('products-updated');
    };
    ProductAddEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id.toString(),
            templateUrl: 'product-add-edit.component.html',
            // make slide in/out animation available to this component
            animations: [index_2.slideInOutAnimation],
            // attach the slide in/out animation to the host (root) element of this component
            host: { '[@slideInOutAnimation]': '' }
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            index_1.ProductService,
            index_1.PubSubService])
    ], ProductAddEditComponent);
    return ProductAddEditComponent;
}());
exports.ProductAddEditComponent = ProductAddEditComponent;
//# sourceMappingURL=product-add-edit.component.js.map