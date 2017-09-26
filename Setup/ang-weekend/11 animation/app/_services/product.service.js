"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProductService = (function () {
    function ProductService() {
    }
    ProductService.prototype.getAll = function () {
        return this.getProducts();
    };
    ProductService.prototype.getById = function (id) {
        return this.getProducts().find(function (product) { return product.id === id; });
    };
    ProductService.prototype.save = function (product) {
        var products = this.getProducts();
        if (product.id) {
            // update existing product
            for (var i = 0; i < products.length; i++) {
                if (products[i].id === product.id) {
                    products[i] = product;
                    break;
                }
            }
            this.setProducts(products);
        }
        else {
            // create new product
            // assign id
            var lastProduct = products[products.length - 1] || { id: 0 };
            product.id = lastProduct.id + 1;
            // save to local storage
            products.push(product);
            this.setProducts(products);
        }
    };
    ProductService.prototype.delete = function (id) {
        var products = this.getProducts();
        for (var i = 0; i < products.length; i++) {
            var product = products[i];
            if (product.id === id) {
                products.splice(i, 1);
                break;
            }
        }
        this.setProducts(products);
    };
    // private helper methods
    ProductService.prototype.getProducts = function () {
        if (!localStorage.getItem('products')) {
            localStorage.setItem('products', JSON.stringify([]));
        }
        return JSON.parse(localStorage.getItem('products'));
    };
    ProductService.prototype.setProducts = function (products) {
        localStorage.setItem('products', JSON.stringify(products));
    };
    ProductService = __decorate([
        core_1.Injectable()
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map