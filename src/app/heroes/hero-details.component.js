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
var hero_service_1 = require("./hero.service");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var HeroDetailsComponent = (function () {
    function HeroDetailsComponent(heroService, router, location) {
        this.heroService = heroService;
        this.router = router;
        this.location = location;
    }
    ;
    HeroDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (xyz) { return _this.id = xyz['id']; });
        if (this.id) {
            this.Hero = this.heroService.getHeroById(+this.id);
        }
    };
    ;
    HeroDetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    ;
    return HeroDetailsComponent;
}());
HeroDetailsComponent = __decorate([
    core_1.Component({
        selector: 'hero-details',
        template: "<h1>Hero Details</h1>\n  <div class=\"row\">\n    <div class=\"col-lg-2\">\n    <input type=\"text\" [(ngModel)]=\"Hero.name\"> \n    <button (click)=\"goBack()\">Hero-Dashboard</button>\n    </div> \n  </div>"
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService, router_1.ActivatedRoute, common_1.Location])
], HeroDetailsComponent);
exports.HeroDetailsComponent = HeroDetailsComponent;
//# sourceMappingURL=hero-details.component.js.map