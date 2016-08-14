"use strict";
var router_1 = require('@angular/router');
var palms_component_1 = require('./palms.component');
var dashboard_component_1 = require('./dashboard.component');
var palm_detail_component_1 = require('./palm-detail.component');
var routes = [
    {
        path: 'palms',
        component: palms_component_1.PalmsComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: palm_detail_component_1.PalmDetailComponent
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map