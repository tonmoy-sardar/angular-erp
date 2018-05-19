webpackJsonp(["designation.module"],{

/***/ "./src/app/layout/designation/designation-add/designation-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-page-header [heading]=\"'Designation Add'\" [icon]=\"'fa fa-university'\"></app-page-header>\n  <div>\n    <div class=\"col-md-6 offset-md-6 pull-right\" style=\"text-align: right\">\n        <button type=\"button\" class=\"btn btn-secondary\"><i class=\"fa fa-question\" aria-hidden=\"true\"></i> Help</button>\n        <button type=\"button\" class=\"btn btn-secondary\"><i class=\"fa fa-refresh\"></i> Reload</button>\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"btnClickNav('designation')\"><i class=\"fa fa-arrow-left\"></i> Back</button>\n    </div>\n    <div class=\"clearfix\"></div>\n  </div>\n  <hr/>\n  <div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n            <form role=\"form\">\n              <div class=\"card bg-light mb-3\">\n                  <div class=\"card-header\" style=\"background-color:#868e96; color: #fff;\">Designation Add</div>\n                  <div class=\"card-body\">\n                      <div class=\"row\">\n                          <div class=\"form-group col-md-4\">\n                            <label>Company</label>\n                              <select class=\"form-control\">\n                                  <option value=\"0\">Select Company</option>\n                                  <option value=\"1\">Shyam Futuretech</option>\n                              </select>\n                          </div>\n                          <div class=\"form-group col-md-4\">\n                              <label>Department Name</label>\n                              <select class=\"form-control\">\n                                <option value=\"0\">Select Department</option>\n                                <option value=\"1\">Demo Department</option>\n                             </select>\n                          </div>\n                          <div class=\"form-group col-md-4\">\n                            <label>Designation Name</label>\n                            <input class=\"form-control\" [(ngModel)]=\"designation.designation_name\" name=\"designation_name\" placeholder=\"Designation Name\">\n                          </div>\n                          <div class=\"form-group col-md-12\" style=\"text-align: right\">\n                              <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n                              <button type=\"reset\" class=\"btn btn-secondary\">Reset</button>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n            </form>\n        </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/designation/designation-add/designation-add.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/designation/designation-add/designation-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesignationAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DesignationAddComponent = /** @class */ (function () {
    function DesignationAddComponent(router) {
        this.router = router;
        this.btnClickNav = function (toNav) {
            this.router.navigateByUrl('/' + toNav);
        };
    }
    DesignationAddComponent.prototype.ngOnInit = function () {
        this.designation = {
            designation_name: ''
        };
    };
    DesignationAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-designation-add',
            template: __webpack_require__("./src/app/layout/designation/designation-add/designation-add.component.html"),
            styles: [__webpack_require__("./src/app/layout/designation/designation-add/designation-add.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], DesignationAddComponent);
    return DesignationAddComponent;
}());



/***/ }),

/***/ "./src/app/layout/designation/designation-edit/designation-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-page-header [heading]=\"'Designation Edit'\" [icon]=\"'fa fa-university'\"></app-page-header>\n  <div>\n    <div class=\"col-md-6 offset-md-6 pull-right\" style=\"text-align: right\">\n        <button type=\"button\" class=\"btn btn-secondary\"><i class=\"fa fa-question\" aria-hidden=\"true\"></i> Help</button>\n        <button type=\"button\" class=\"btn btn-secondary\"><i class=\"fa fa-refresh\"></i> Reload</button>\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"btnClickNav('designation')\"><i class=\"fa fa-arrow-left\"></i> Back</button>\n    </div>\n    <div class=\"clearfix\"></div>\n  </div>\n  <hr/>\n  <div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n            <form role=\"form\">\n              <div class=\"card bg-light mb-3\">\n                  <div class=\"card-header\" style=\"background-color:#868e96; color: #fff;\">Designation Edit</div>\n                  <div class=\"card-body\">\n                      <div class=\"row\">\n                          <div class=\"form-group col-md-4\">\n                            <label>Company</label>\n                              <select class=\"form-control\">\n                                  <option value=\"0\">Select Company</option>\n                                  <option value=\"1\">Shyam Futuretech</option>\n                              </select>\n                          </div>\n                          <div class=\"form-group col-md-4\">\n                              <label>Department Name</label>\n                              <select class=\"form-control\">\n                                <option value=\"0\">Select Department</option>\n                                <option value=\"1\">Demo Department</option>\n                             </select>\n                          </div>\n                          <div class=\"form-group col-md-4\">\n                            <label>Designation Name</label>\n                            <input class=\"form-control\" [(ngModel)]=\"designation.designation_name\" name=\"designation_name\" placeholder=\"Designation Name\">\n                          </div>\n                          <div class=\"form-group col-md-12\" style=\"text-align: right\">\n                              <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n                              <button type=\"reset\" class=\"btn btn-secondary\">Reset</button>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n            </form>\n        </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/designation/designation-edit/designation-edit.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/designation/designation-edit/designation-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesignationEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DesignationEditComponent = /** @class */ (function () {
    function DesignationEditComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.btnClickNav = function (toNav) {
            this.router.navigateByUrl('/' + toNav);
        };
    }
    DesignationEditComponent.prototype.ngOnInit = function () {
        this.getDesignation(this.route.snapshot.params['id']);
    };
    DesignationEditComponent.prototype.getDesignation = function (id) {
        this.designation = {
            designation_name: 'Demo designation'
        };
    };
    DesignationEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-designation-edit',
            template: __webpack_require__("./src/app/layout/designation/designation-edit/designation-edit.component.html"),
            styles: [__webpack_require__("./src/app/layout/designation/designation-edit/designation-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], DesignationEditComponent);
    return DesignationEditComponent;
}());



/***/ }),

/***/ "./src/app/layout/designation/designation-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesignationRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__designation_component__ = __webpack_require__("./src/app/layout/designation/designation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__designation_add_designation_add_component__ = __webpack_require__("./src/app/layout/designation/designation-add/designation-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__designation_edit_designation_edit_component__ = __webpack_require__("./src/app/layout/designation/designation-edit/designation-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__designation_component__["a" /* DesignationComponent */]
    },
    {
        path: 'add',
        component: __WEBPACK_IMPORTED_MODULE_3__designation_add_designation_add_component__["a" /* DesignationAddComponent */]
    },
    {
        path: 'edit/:id',
        component: __WEBPACK_IMPORTED_MODULE_4__designation_edit_designation_edit_component__["a" /* DesignationEditComponent */]
    }
];
var DesignationRoutingModule = /** @class */ (function () {
    function DesignationRoutingModule() {
    }
    DesignationRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], DesignationRoutingModule);
    return DesignationRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/designation/designation.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-page-header [heading]=\"'Designation List'\" [icon]=\"'fa fa-university'\"></app-page-header>\n  <div>\n    <div class=\"col-md-6 offset-md-6 pull-right\" style=\"text-align: right\">\n        <button type=\"button\" class=\"btn btn-secondary\"><i class=\"fa fa-question\" aria-hidden=\"true\"></i> Help</button>\n        <button type=\"button\" class=\"btn btn-secondary\"><i class=\"fa fa-refresh\"></i> Reload</button>\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"btnClickNav('designation/add')\"><i class=\"fa fa-plus\"></i> New Department</button>\n    </div>\n    <div class=\"clearfix\"></div>\n  </div>\n    \n  <hr/>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">Designation</div>\n      <table class=\"card-body table table-hover table-sm table-bordered\">\n          <thead>\n          <tr>\n              <th>Sl.No.</th>\n              <th>Designation</th>\n              <th>Department</th>\n              <th>Company</th>\n              <th>Status</th>\n              <th>Action</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <th scope=\"row\">1</th>\n            <td>Demo Designation</td>\n            <td>Demo Department</td>\n            <td>Shyam Futuretech</td>\n            <td><i class=\"fa fa-thumbs-up\"></i> Active</td>\n            <td>\n              <a href=\"javascript:void(0);\" title=\"Edit\" name=\"Edit\" [routerLink]=\"['/designation/edit', 1]\"><i class=\"fa fa-edit\"></i></a>&nbsp;&nbsp;&nbsp;\n              <a href=\"javascript:void(0);\" title=\"Map\" name=\"Map\"><i class=\"fa fa-trash-o\"></i></a>\n            </td>\n          </tr>\n          </tbody>\n      </table>\n    </div>\n  </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/designation/designation.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/designation/designation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesignationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DesignationComponent = /** @class */ (function () {
    function DesignationComponent(router) {
        this.router = router;
        this.btnClickNav = function (toNav) {
            this.router.navigateByUrl('/' + toNav);
        };
    }
    DesignationComponent.prototype.ngOnInit = function () {
    };
    DesignationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-designation',
            template: __webpack_require__("./src/app/layout/designation/designation.component.html"),
            styles: [__webpack_require__("./src/app/layout/designation/designation.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], DesignationComponent);
    return DesignationComponent;
}());



/***/ }),

/***/ "./src/app/layout/designation/designation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignationModule", function() { return DesignationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__designation_routing_module__ = __webpack_require__("./src/app/layout/designation/designation-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__designation_component__ = __webpack_require__("./src/app/layout/designation/designation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__designation_add_designation_add_component__ = __webpack_require__("./src/app/layout/designation/designation-add/designation-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__designation_edit_designation_edit_component__ = __webpack_require__("./src/app/layout/designation/designation-edit/designation-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__designation_service__ = __webpack_require__("./src/app/layout/designation/designation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var DesignationModule = /** @class */ (function () {
    function DesignationModule() {
    }
    DesignationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__designation_routing_module__["a" /* DesignationRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared__["b" /* PageHeaderModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__designation_component__["a" /* DesignationComponent */], __WEBPACK_IMPORTED_MODULE_6__designation_add_designation_add_component__["a" /* DesignationAddComponent */], __WEBPACK_IMPORTED_MODULE_7__designation_edit_designation_edit_component__["a" /* DesignationEditComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_9__designation_service__["a" /* DesignationService */]]
        })
    ], DesignationModule);
    return DesignationModule;
}());



/***/ }),

/***/ "./src/app/layout/designation/designation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesignationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DesignationService = /** @class */ (function () {
    function DesignationService() {
    }
    DesignationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DesignationService);
    return DesignationService;
}());



/***/ })

});
//# sourceMappingURL=designation.module.chunk.js.map