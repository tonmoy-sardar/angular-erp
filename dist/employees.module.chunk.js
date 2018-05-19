webpackJsonp(["employees.module"],{

/***/ "./src/app/layout/employees/employees-add/employees-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-page-header [heading]=\"'Employee Add'\" [icon]=\"'fa fa-university'\"></app-page-header>\n  <div>\n    <div class=\"col-md-6 offset-md-6 pull-right\" style=\"text-align: right\">\n        <button type=\"button\" class=\"btn btn-secondary\"><i class=\"fa fa-question\" aria-hidden=\"true\"></i> Help</button>\n        <button type=\"button\" class=\"btn btn-secondary\"><i class=\"fa fa-refresh\"></i> Reload</button>\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"btnClickNav('employees')\"><i class=\"fa fa-arrow-left\"></i> Back</button>\n    </div>\n    <div class=\"clearfix\"></div>\n  </div>\n  <hr/>\n  <div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n            <form role=\"form\">\n              <div class=\"card bg-light mb-3\">\n                  <div class=\"card-header\" style=\"background-color:#868e96; color: #fff;\">Employee Add</div>\n                  <div class=\"card-body\">\n                      <div class=\"row\">\n                          <div class=\"form-group col-md-4\">\n                            <label>First Name</label>\n                            <input class=\"form-control\" [(ngModel)]=\"employee.first_name\" name=\"first_name\" placeholder=\"First Name\">\n                          </div>\n                          <div class=\"form-group col-md-4\">\n                            <label>Last Name</label>\n                            <input class=\"form-control\" [(ngModel)]=\"employee.last_name\" name=\"last_name\" placeholder=\"Last Name\">\n                          </div>\n                          <div class=\"form-group col-md-4\">\n                            <label>Email</label>\n                            <input class=\"form-control\" [(ngModel)]=\"employee.email\" name=\"email\" placeholder=\"Email\">\n                          </div>\n                          <div class=\"form-group col-md-4\">\n                            <label>Contact No.</label>\n                            <input class=\"form-control\" [(ngModel)]=\"employee.contact_no\" name=\"contact_no\" placeholder=\"Contact No.\">\n                          </div>\n                          <div class=\"form-group col-md-4\">\n                            <label>Alternate Contact No.</label>\n                            <input class=\"form-control\" [(ngModel)]=\"employee.alternate_contact_no\" name=\"alternate_contact_no\" placeholder=\"Alternate Contact No.\">\n                          </div>\n                          <div class=\"form-group col-md-4\">\n                            <label>DOB</label>\n                            <div class=\"input-group datepicker-input\">\n                              <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                                  name=\"quotation_date\" [(ngModel)]=\"model\" ngbDatepicker #quotation_date=\"ngbDatepicker\">\n                              <button class=\"input-group-addon\" (click)=\"quotation_date.toggle()\" type=\"button\">\n                                  <!-- <img src=\"img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"/> -->\n                                  <span class=\"fa fa-calendar\"></span>\n                              </button>\n                            </div>\n                          </div>\n                          <div class=\"form-group col-md-4\">\n                            <label>PAN Number</label>\n                            <input class=\"form-control\" [(ngModel)]=\"employee.pan_number\" name=\"pan_number\" placeholder=\"PAN Number\">\n                          </div>\n                          <div class=\"form-group col-md-4\">\n                            <label>AADHAAR Number</label>\n                            <input class=\"form-control\" [(ngModel)]=\"employee.aadhaar_name\" name=\"aadhaar_name\" placeholder=\"AADHAAR Number\">\n                          </div>\n                          <div class=\"form-group col-md-4\">\n                            <label>Company</label>\n                              <select class=\"form-control\">\n                                  <option value=\"0\">Select Company</option>\n                                  <option value=\"1\">Shyam Futuretech</option>\n                              </select>\n                          </div>\n                          <div class=\"form-group col-md-4\">\n                              <label>Department Name</label>\n                              <select class=\"form-control\">\n                                <option value=\"0\">Select Department</option>\n                                <option value=\"1\">Demo Department</option>\n                             </select>\n                          </div>\n                          <div class=\"form-group col-md-4\">\n                            <label>Position</label>\n                            <select class=\"form-control\">\n                              <option value=\"0\">Select Position</option>\n                              <option value=\"1\">Demo Position</option>\n                           </select>\n                        </div>\n                          <div class=\"form-group col-md-4\">\n                            <label>Amount Given</label>\n                            <input class=\"form-control\" [(ngModel)]=\"employee.amount_given\" name=\"amount_given\" placeholder=\"Amount Given\">\n                          </div>\n                          <div class=\"form-group col-md-12\" style=\"text-align: right\">\n                              <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n                              <button type=\"reset\" class=\"btn btn-secondary\">Reset</button>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n            </form>\n        </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/employees/employees-add/employees-add.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/employees/employees-add/employees-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeesAddComponent; });
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


var EmployeesAddComponent = /** @class */ (function () {
    function EmployeesAddComponent(router) {
        this.router = router;
        this.btnClickNav = function (toNav) {
            this.router.navigateByUrl('/' + toNav);
        };
    }
    EmployeesAddComponent.prototype.ngOnInit = function () {
        this.employee = {
            first_name: '',
            last_name: '',
            email: '',
            contact_no: '',
            alternate_contact_no: '',
            pan_number: '',
            aadhaar_name: '',
            amount_given: ''
        };
    };
    EmployeesAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-employees-add',
            template: __webpack_require__("./src/app/layout/employees/employees-add/employees-add.component.html"),
            styles: [__webpack_require__("./src/app/layout/employees/employees-add/employees-add.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], EmployeesAddComponent);
    return EmployeesAddComponent;
}());



/***/ }),

/***/ "./src/app/layout/employees/employees-edit/employees-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-page-header [heading]=\"'Employee Edit'\" [icon]=\"'fa fa-university'\"></app-page-header>\n  <div>\n    <div class=\"col-md-6 offset-md-6 pull-right\" style=\"text-align: right\">\n        <button type=\"button\" class=\"btn btn-secondary\"><i class=\"fa fa-question\" aria-hidden=\"true\"></i> Help</button>\n        <button type=\"button\" class=\"btn btn-secondary\"><i class=\"fa fa-refresh\"></i> Reload</button>\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"btnClickNav('employees')\"><i class=\"fa fa-arrow-left\"></i> Back</button>\n    </div>\n    <div class=\"clearfix\"></div>\n  </div>\n  <hr/>\n  <div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n            <form role=\"form\">\n              <div class=\"card bg-light mb-3\">\n                  <div class=\"card-header\" style=\"background-color:#868e96; color: #fff;\">Employee Edit</div>\n                  <div class=\"card-body\">\n                      <div class=\"row\">\n                          <div class=\"form-group col-md-4\">\n                            <label>First Name</label>\n                            <input class=\"form-control\" [(ngModel)]=\"employee.first_name\" name=\"first_name\" placeholder=\"First Name\">\n                          </div>\n                          <div class=\"form-group col-md-4\">\n                            <label>Last Name</label>\n                            <input class=\"form-control\" [(ngModel)]=\"employee.last_name\" name=\"last_name\" placeholder=\"Last Name\">\n                          </div>\n                          <div class=\"form-group col-md-4\">\n                            <label>Email</label>\n                            <input class=\"form-control\" [(ngModel)]=\"employee.email\" name=\"email\" placeholder=\"Email\">\n                          </div>\n                          <div class=\"form-group col-md-4\">\n                            <label>Contact No.</label>\n                            <input class=\"form-control\" [(ngModel)]=\"employee.contact_no\" name=\"contact_no\" placeholder=\"Contact No.\">\n                          </div>\n                          <div class=\"form-group col-md-4\">\n                            <label>Alternate Contact No.</label>\n                            <input class=\"form-control\" [(ngModel)]=\"employee.alternate_contact_no\" name=\"alternate_contact_no\" placeholder=\"Alternate Contact No.\">\n                          </div>\n                          <div class=\"form-group col-md-4\">\n                            <label>DOB</label>\n                            <div class=\"input-group datepicker-input\">\n                              <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                                  name=\"quotation_date\" [(ngModel)]=\"model\" ngbDatepicker #quotation_date=\"ngbDatepicker\">\n                              <button class=\"input-group-addon\" (click)=\"quotation_date.toggle()\" type=\"button\">\n                                  <!-- <img src=\"img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"/> -->\n                                  <span class=\"fa fa-calendar\"></span>\n                              </button>\n                            </div>\n                          </div>\n                          <div class=\"form-group col-md-4\">\n                            <label>PAN Number</label>\n                            <input class=\"form-control\" [(ngModel)]=\"employee.pan_number\" name=\"pan_number\" placeholder=\"PAN Number\">\n                          </div>\n                          <div class=\"form-group col-md-4\">\n                            <label>AADHAAR Number</label>\n                            <input class=\"form-control\" [(ngModel)]=\"employee.aadhaar_name\" name=\"aadhaar_name\" placeholder=\"AADHAAR Number\">\n                          </div>\n                          <div class=\"form-group col-md-4\">\n                            <label>Company</label>\n                              <select class=\"form-control\">\n                                  <option value=\"0\">Select Company</option>\n                                  <option value=\"1\">Shyam Futuretech</option>\n                              </select>\n                          </div>\n                          <div class=\"form-group col-md-4\">\n                              <label>Department Name</label>\n                              <select class=\"form-control\">\n                                <option value=\"0\">Select Department</option>\n                                <option value=\"1\">Demo Department</option>\n                             </select>\n                          </div>\n                          <div class=\"form-group col-md-4\">\n                            <label>Position</label>\n                            <select class=\"form-control\">\n                              <option value=\"0\">Select Position</option>\n                              <option value=\"1\">Demo Position</option>\n                           </select>\n                        </div>\n                          <div class=\"form-group col-md-4\">\n                            <label>Amount Given</label>\n                            <input class=\"form-control\" [(ngModel)]=\"employee.amount_given\" name=\"amount_given\" placeholder=\"Amount Given\">\n                          </div>\n                          <div class=\"form-group col-md-12\" style=\"text-align: right\">\n                              <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n                              <button type=\"reset\" class=\"btn btn-secondary\">Reset</button>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n            </form>\n        </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/employees/employees-edit/employees-edit.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/employees/employees-edit/employees-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeesEditComponent; });
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



var EmployeesEditComponent = /** @class */ (function () {
    function EmployeesEditComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.btnClickNav = function (toNav) {
            this.router.navigateByUrl('/' + toNav);
        };
    }
    EmployeesEditComponent.prototype.ngOnInit = function () {
        this.geEmployee(this.route.snapshot.params['id']);
    };
    EmployeesEditComponent.prototype.geEmployee = function (id) {
        this.employee = {
            first_name: 'Suraj',
            last_name: 'Mondal',
            email: '',
            contact_no: '',
            alternate_contact_no: '',
            pan_number: '',
            aadhaar_name: '',
            amount_given: ''
        };
    };
    EmployeesEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-employees-edit',
            template: __webpack_require__("./src/app/layout/employees/employees-edit/employees-edit.component.html"),
            styles: [__webpack_require__("./src/app/layout/employees/employees-edit/employees-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], EmployeesEditComponent);
    return EmployeesEditComponent;
}());



/***/ }),

/***/ "./src/app/layout/employees/employees-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employees_component__ = __webpack_require__("./src/app/layout/employees/employees.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__employees_add_employees_add_component__ = __webpack_require__("./src/app/layout/employees/employees-add/employees-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__employees_edit_employees_edit_component__ = __webpack_require__("./src/app/layout/employees/employees-edit/employees-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__employees_component__["a" /* EmployeesComponent */]
    },
    {
        path: 'add',
        component: __WEBPACK_IMPORTED_MODULE_3__employees_add_employees_add_component__["a" /* EmployeesAddComponent */]
    },
    {
        path: 'edit/:id',
        component: __WEBPACK_IMPORTED_MODULE_4__employees_edit_employees_edit_component__["a" /* EmployeesEditComponent */]
    }
];
var EmployeesRoutingModule = /** @class */ (function () {
    function EmployeesRoutingModule() {
    }
    EmployeesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], EmployeesRoutingModule);
    return EmployeesRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/employees/employees.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-page-header [heading]=\"'Employee List'\" [icon]=\"'fa fa-university'\"></app-page-header>\n  <div>\n    <div class=\"col-md-6 offset-md-6 pull-right\" style=\"text-align: right\">\n        <button type=\"button\" class=\"btn btn-secondary\"><i class=\"fa fa-question\" aria-hidden=\"true\"></i> Help</button>\n        <button type=\"button\" class=\"btn btn-secondary\"><i class=\"fa fa-refresh\"></i> Reload</button>\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"btnClickNav('employees/add')\"><i class=\"fa fa-plus\"></i> New Employee</button>\n    </div>\n    <div class=\"clearfix\"></div>\n  </div>\n    \n  <hr/>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">Employee</div>\n      <table class=\"card-body table table-hover table-sm table-bordered\">\n          <thead>\n          <tr>\n              <th>Sl.No.</th>\n              <th>First Name</th>\n              <th>Last Name</th>\n              <th>Email</th>\n              <th>Contact</th>\n              <th>Company</th>\n              <th>Department</th>\n              <th>Designation</th>\n              <th>Action</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <th scope=\"row\">1</th>\n            <td>Suraj</td>\n            <td>Mondol</td>\n            <td>suraj@gmail.com</td>\n            <td>9088856614</td>\n            <td>Shyam Futuretech</td>\n            <td>Demo Department</td>\n            <td>Demo Designation</td>\n            <td>\n              <a href=\"javascript:void(0);\" title=\"Edit\" name=\"Edit\" [routerLink]=\"['/employees/edit', 1]\"><i class=\"fa fa-edit\"></i></a>&nbsp;&nbsp;&nbsp;\n            </td>\n          </tr>\n          </tbody>\n      </table>\n    </div>\n  </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/employees/employees.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/employees/employees.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeesComponent; });
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


var EmployeesComponent = /** @class */ (function () {
    function EmployeesComponent(router) {
        this.router = router;
        this.btnClickNav = function (toNav) {
            this.router.navigateByUrl('/' + toNav);
        };
    }
    EmployeesComponent.prototype.ngOnInit = function () {
    };
    EmployeesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-employees',
            template: __webpack_require__("./src/app/layout/employees/employees.component.html"),
            styles: [__webpack_require__("./src/app/layout/employees/employees.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], EmployeesComponent);
    return EmployeesComponent;
}());



/***/ }),

/***/ "./src/app/layout/employees/employees.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesModule", function() { return EmployeesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__employees_routing_module__ = __webpack_require__("./src/app/layout/employees/employees-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__employees_component__ = __webpack_require__("./src/app/layout/employees/employees.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__employees_add_employees_add_component__ = __webpack_require__("./src/app/layout/employees/employees-add/employees-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__employees_edit_employees_edit_component__ = __webpack_require__("./src/app/layout/employees/employees-edit/employees-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__bs_component_bs_component_module__ = __webpack_require__("./src/app/layout/bs-component/bs-component.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__employees_service__ = __webpack_require__("./src/app/layout/employees/employees.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var EmployeesModule = /** @class */ (function () {
    function EmployeesModule() {
    }
    EmployeesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__employees_routing_module__["a" /* EmployeesRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared__["b" /* PageHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__bs_component_bs_component_module__["BsComponentModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__employees_component__["a" /* EmployeesComponent */], __WEBPACK_IMPORTED_MODULE_7__employees_add_employees_add_component__["a" /* EmployeesAddComponent */], __WEBPACK_IMPORTED_MODULE_8__employees_edit_employees_edit_component__["a" /* EmployeesEditComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_11__employees_service__["a" /* EmployeesService */]]
        })
    ], EmployeesModule);
    return EmployeesModule;
}());



/***/ }),

/***/ "./src/app/layout/employees/employees.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeesService; });
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

var EmployeesService = /** @class */ (function () {
    function EmployeesService() {
    }
    EmployeesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], EmployeesService);
    return EmployeesService;
}());



/***/ })

});
//# sourceMappingURL=employees.module.chunk.js.map