System.register(['@angular/core', '@angular/common', '@angular/http', '../shared/shared.module', './posts.component', './post.service', '../users/user.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, http_1, shared_module_1, posts_component_1, post_service_1, user_service_1;
    var PostsModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (shared_module_1_1) {
                shared_module_1 = shared_module_1_1;
            },
            function (posts_component_1_1) {
                posts_component_1 = posts_component_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            PostsModule = (function () {
                function PostsModule() {
                }
                PostsModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            common_1.CommonModule,
                            shared_module_1.SharedModule,
                            http_1.HttpModule
                        ],
                        declarations: [
                            posts_component_1.PostsComponent
                        ],
                        exports: [
                            posts_component_1.PostsComponent
                        ],
                        providers: [
                            post_service_1.PostService,
                            user_service_1.UserService
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PostsModule);
                return PostsModule;
            }());
            exports_1("PostsModule", PostsModule);
        }
    }
});
//# sourceMappingURL=posts.module.js.map