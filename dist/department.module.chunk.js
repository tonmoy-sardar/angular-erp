webpackJsonp(["department.module"],{

/***/ "./src/app/layout/department/department-add/department-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-page-header [heading]=\"'Department Add'\" [icon]=\"'fa fa-university'\"></app-page-header>\n  <div>\n    <div class=\"col-md-6 offset-md-6 pull-right\" style=\"text-align: right\">\n        <button type=\"button\" class=\"btn btn-secondary\"><i class=\"fa fa-question\" aria-hidden=\"true\"></i> Help</button>\n        <button type=\"button\" class=\"btn btn-secondary\"><i class=\"fa fa-refresh\"></i> Reload</button>\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"btnClickNav('department')\"><i class=\"fa fa-arrow-left\"></i> Back</button>\n    </div>\n    <div class=\"clearfix\"></div>\n  </div>\n  <hr/>\n  <div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n            <form role=\"form\">\n              <div class=\"card bg-light mb-3\">\n                  <div class=\"card-header\" style=\"background-color:#868e96; color: #fff;\">Department Add</div>\n                  <div class=\"card-body\">\n                      <div class=\"row\">\n                          <div class=\"form-group col-md-6\">\n                            <label>Company</label>\n                              <select class=\"form-control\">\n                                  <option value=\"0\">Select Company</option>\n                                  <option value=\"1\">Shyam Futuretech</option>\n                              </select>\n                          </div>\n                          <div class=\"form-group col-md-6\">\n                              <label>Department Name</label>\n                              <input class=\"form-control\" [(ngModel)]=\"department.department_name\" name=\"department_name\" placeholder=\"Department Name\">\n                          </div>\n                          <div class=\"form-group col-md-12\" style=\"text-align: right\">\n                              <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n                              <button type=\"reset\" class=\"btn btn-secondary\">Reset</button>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n            </form>\n        </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/department/department-add/department-add.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/department/department-add/department-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentAddComponent; });
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


var DepartmentAddComponent = /** @class */ (function () {
    function DepartmentAddComponent(router) {
        this.router = router;
        this.btnClickNav = function (toNav) {
            this.router.navigateByUrl('/' + toNav);
        };
    }
    DepartmentAddComponent.prototype.ngOnInit = function () {
        this.department = {
            department_name: ''
        };
    };
    DepartmentAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-department-add',
            template: __webpack_require__("./src/app/layout/department/department-add/department-add.component.html"),
            styles: [__webpack_require__("./src/app/layout/department/department-add/department-add.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], DepartmentAddComponent);
    return DepartmentAddComponent;
}());



/***/ }),

/***/ "./src/app/layout/department/department-edit/department-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <app-page-header [heading]=\"'Department Edit'\" [icon]=\"'fa fa-university'\"></app-page-header>\n    <div>\n      <div class=\"col-md-6 offset-md-6 pull-right\" style=\"text-align: right\">\n          <button type=\"button\" class=\"btn btn-secondary\"><i class=\"fa fa-question\" aria-hidden=\"true\"></i> Help</button>\n          <button type=\"button\" class=\"btn btn-secondary\"><i class=\"fa fa-refresh\"></i> Reload</button>\n          <button type=\"button\" class=\"btn btn-success\" (click)=\"btnClickNav('department')\"><i class=\"fa fa-arrow-left\"></i> Back</button>\n      </div>\n      <div class=\"clearfix\"></div>\n    </div>\n    <hr/>\n    <div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n              <form role=\"form\">\n                <div class=\"card bg-light mb-3\">\n                    <div class=\"card-header\" style=\"background-color:#868e96; color: #fff;\">Department Edit</div>\n                    <div class=\"card-body\">\n                        <div class=\"row\">\n                            <div class=\"form-group col-md-6\">\n                              <label>Company</label>\n                                <select class=\"form-control\">\n                                    <option value=\"0\">Select Company</option>\n                                    <option value=\"1\">Shyam Futuretech</option>\n                                </select>\n                            </div>\n                            <div class=\"form-group col-md-6\">\n                                <label>Department Name</label>\n                                <input class=\"form-control\" [(ngModel)]=\"department.department_name\" name=\"department_name\" placeholder=\"Department Name\">\n                            </div>\n                            <div class=\"form-group col-md-12\" style=\"text-align: right\">\n                                <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n                                <button type=\"reset\" class=\"btn btn-secondary\">Reset</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n              </form>\n          </div>\n        </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/layout/department/department-edit/department-edit.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/department/department-edit/department-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentEditComponent; });
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



var DepartmentEditComponent = /** @class */ (function () {
    function DepartmentEditComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.btnClickNav = function (toNav) {
            this.router.navigateByUrl('/' + toNav);
        };
    }
    DepartmentEditComponent.prototype.ngOnInit = function () {
        this.getDepartment(this.route.snapshot.params['id']);
    };
    DepartmentEditComponent.prototype.getDepartment = function (id) {
        this.department = {
            department_name: 'Demo department'
        };
    };
    DepartmentEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-department-edit',
            template: __webpack_require__("./src/app/layout/department/department-edit/department-edit.component.html"),
            styles: [__webpack_require__("./src/app/layout/department/department-edit/department-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], DepartmentEditComponent);
    return DepartmentEditComponent;
}());



/***/ }),

/***/ "./src/app/layout/department/department-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__department_component__ = __webpack_require__("./src/app/layout/department/department.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__department_add_department_add_component__ = __webpack_require__("./src/app/layout/department/department-add/department-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__department_edit_department_edit_component__ = __webpack_require__("./src/app/layout/department/department-edit/department-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__department_component__["a" /* DepartmentComponent */]
    },
    {
        path: 'add',
        component: __WEBPACK_IMPORTED_MODULE_3__department_add_department_add_component__["a" /* DepartmentAddComponent */]
    },
    {
        path: 'edit/:id',
        component: __WEBPACK_IMPORTED_MODULE_4__department_edit_department_edit_component__["a" /* DepartmentEditComponent */]
    }
];
var DepartmentRoutingModule = /** @class */ (function () {
    function DepartmentRoutingModule() {
    }
    DepartmentRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], DepartmentRoutingModule);
    return DepartmentRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/department/department.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-page-header [heading]=\"'Department List'\" [icon]=\"'fa fa-university'\"></app-page-header>\n  <div>\n    <div class=\"col-md-6 offset-md-6 pull-right\" style=\"text-align: right\">\n        <button type=\"button\" class=\"btn btn-secondary\"><i class=\"fa fa-question\" aria-hidden=\"true\"></i> Help</button>\n        <button type=\"button\" class=\"btn btn-secondary\"><i class=\"fa fa-refresh\"></i> Reload</button>\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"btnClickNav('department/add')\"><i class=\"fa fa-plus\"></i> New Department</button>\n    </div>\n    <div class=\"clearfix\"></div>\n  </div>\n    \n  <hr/>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">Department</div>\n      <table class=\"card-body table table-hover table-sm table-bordered\">\n          <thead>\n          <tr>\n              <th>Sl.No.</th>\n              <th>Department</th>\n              <th>Company</th>\n              <th>Status</th>\n              <th>Action</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <th scope=\"row\">1</th>\n            <td>Demo Department</td>\n            <td>Shyam Futuretech</td>\n            <td><i class=\"fa fa-thumbs-up\"></i> Active</td>\n            <td>\n              <a href=\"javascript:void(0);\" title=\"Edit\" name=\"Edit\" [routerLink]=\"['/department/edit', 1]\"><i class=\"fa fa-edit\"></i></a>&nbsp;&nbsp;&nbsp;\n              <a href=\"javascript:void(0);\" title=\"Map\" name=\"Map\"><i class=\"fa fa-trash-o\"></i></a>\n            </td>\n          </tr>\n          </tbody>\n      </table>\n    </div>\n  </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/department/department.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/department/department.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentComponent; });
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


var DepartmentComponent = /** @class */ (function () {
    function DepartmentComponent(router) {
        this.router = router;
        this.btnClickNav = function (toNav) {
            this.router.navigateByUrl('/' + toNav);
        };
    }
    DepartmentComponent.prototype.ngOnInit = function () {
    };
    DepartmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-department',
            template: __webpack_require__("./src/app/layout/department/department.component.html"),
            styles: [__webpack_require__("./src/app/layout/department/department.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], DepartmentComponent);
    return DepartmentComponent;
}());



/***/ }),

/***/ "./src/app/layout/department/department.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentModule", function() { return DepartmentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__department_routing_module__ = __webpack_require__("./src/app/layout/department/department-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__department_component__ = __webpack_require__("./src/app/layout/department/department.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__department_add_department_add_component__ = __webpack_require__("./src/app/layout/department/department-add/department-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__department_edit_department_edit_component__ = __webpack_require__("./src/app/layout/department/department-edit/department-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__department_service__ = __webpack_require__("./src/app/layout/department/department.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var DepartmentModule = /** @class */ (function () {
    function DepartmentModule() {
    }
    DepartmentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__department_routing_module__["a" /* DepartmentRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared__["b" /* PageHeaderModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__department_component__["a" /* DepartmentComponent */], __WEBPACK_IMPORTED_MODULE_6__department_add_department_add_component__["a" /* DepartmentAddComponent */], __WEBPACK_IMPORTED_MODULE_7__department_edit_department_edit_component__["a" /* DepartmentEditComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_9__department_service__["a" /* DepartmentService */]]
        })
    ], DepartmentModule);
    return DepartmentModule;
}());



/***/ }),

/***/ "./src/app/layout/department/department.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentService; });
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

var DepartmentService = /** @class */ (function () {
    function DepartmentService() {
    }
    DepartmentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DepartmentService);
    return DepartmentService;
}());



/***/ })

});
//# sourceMappingURL=department.module.chunk.js.map