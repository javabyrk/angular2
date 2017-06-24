System.register(['@angular/router', './home.component', './not-found.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, home_component_1, not_found_component_1;
    var routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (not_found_component_1_1) {
                not_found_component_1 = not_found_component_1_1;
            }],
        execute: function() {
            exports_1("routing", routing = router_1.RouterModule.forRoot([
                { path: '', component: home_component_1.HomeComponent },
                { path: 'not-found', component: not_found_component_1.NotFoundComponent },
                { path: '**', redirectTo: 'not-found' }
            ]));
        }
    }
});
//# sourceMappingURL=app.routing.js.map