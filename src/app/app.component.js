"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        styleUrls: ['./styles/bootstrap.css'],
        selector: 'my-app',
        template: "<div class=\"row\">\n  \t\t\t\t<div class=\"col-lg-12\">\n  \t\t\t\t\t<div class=\"container-fluid\">\n  \t\t\t\t\t\t<h1>Welcome to my Hero App</h1>\n  \t\t\t\t\t\t<div>\n  \t\t\t\t\t\t\t<dash-board>Inside dashboard component</dash-board> \n  \t\t\t\t\t\t</div>\n  \t\t\t\t\t</div>\n  \t\t\t\t</div>\n  \t\t\t</div>"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map