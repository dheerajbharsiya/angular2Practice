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
var HeroComponent = (function () {
    function HeroComponent(heroService) {
        this.heroService = heroService;
        this.Hero = [];
    }
    HeroComponent.prototype.ngOnInit = function () {
        this.Hero = this.heroService.getHeroes();
    };
    return HeroComponent;
}());
HeroComponent = __decorate([
    core_1.Component({
        selector: 'hero-dashboard',
        template: "<h1>Our Heros</h1>\n  <div class=\"row\">\n    <div class=\"col-lg-2\" *ngFor=\"let hero of Hero\"> \n        <a [routerLink]=\"['/hero-details', hero.id]\">{{hero.name}}</a>\n    </div> \n  </div>"
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService])
], HeroComponent);
exports.HeroComponent = HeroComponent;
//# sourceMappingURL=hero.component.js.map