"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var router_1 = require("@angular/router");
var hero_component_1 = require("./heroes/hero.component");
var hero_service_1 = require("./heroes/hero.service");
var hero_details_component_1 = require("./heroes/hero-details.component");
var forms_1 = require("@angular/forms");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule,
            router_1.RouterModule.forRoot([
                {
                    path: 'heroes',
                    component: hero_component_1.HeroComponent
                },
                {
                    path: 'hero-details/:id',
                    component: hero_details_component_1.HeroDetailsComponent
                },
            ])
        ],
        providers: [hero_service_1.HeroService],
        declarations: [app_component_1.AppComponent, dashboard_component_1.DashBoardComponent, hero_component_1.HeroComponent, hero_details_component_1.HeroDetailsComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map