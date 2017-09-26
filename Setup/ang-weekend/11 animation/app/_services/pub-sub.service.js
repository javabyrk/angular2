"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var PubSubService = (function () {
    function PubSubService() {
        this.subjects = [];
    }
    PubSubService.prototype.publish = function (eventName) {
        // ensure a subject for the event name exists
        this.subjects[eventName] = this.subjects[eventName] || new Subject_1.Subject();
        // publish event
        this.subjects[eventName].next();
    };
    PubSubService.prototype.on = function (eventName) {
        // ensure a subject for the event name exists
        this.subjects[eventName] = this.subjects[eventName] || new Subject_1.Subject();
        // return observable 
        return this.subjects[eventName].asObservable();
    };
    PubSubService = __decorate([
        core_1.Injectable()
    ], PubSubService);
    return PubSubService;
}());
exports.PubSubService = PubSubService;
//# sourceMappingURL=pub-sub.service.js.map