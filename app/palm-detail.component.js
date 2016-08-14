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
var router_1 = require('@angular/router');
var palm_service_1 = require('./palm.service');
var PalmDetailComponent = (function () {
    function PalmDetailComponent(palmService, route) {
        this.palmService = palmService;
        this.route = route;
    }
    PalmDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.palmService.getPalm(id)
                .then(function (palm) { return _this.palm = palm; });
        });
    };
    PalmDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PalmDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    PalmDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-palm-detail',
            templateUrl: 'app/palm-detail.component.html',
            styleUrls: ['app/palm-detail.component.css']
        }), 
        __metadata('design:paramtypes', [palm_service_1.PalmService, router_1.ActivatedRoute])
    ], PalmDetailComponent);
    return PalmDetailComponent;
}());
exports.PalmDetailComponent = PalmDetailComponent;
//# sourceMappingURL=palm-detail.component.js.map