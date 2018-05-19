webpackJsonp(["terms-condition.module"],{

/***/ "./src/app/layout/terms-condition/terms-condition-add/terms-condition-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <!-- <app-page-header [heading]=\"'Terms & Conditions Add'\" [icon]=\"'fa fa-university'\"></app-page-header> -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <h4 class=\"page-header\">Terms & Conditions Add</h4>\r\n        </div>\r\n        <div class=\"col-md-6 pull-right\" style=\"text-align: right\">\r\n            <button type=\"button\" class=\"btn btn-secondary\">\r\n                <i class=\"fa fa-question\" aria-hidden=\"true\"></i> Help</button>\r\n            <button type=\"button\" class=\"btn btn-secondary\">\r\n                <i class=\"fa fa-refresh\"></i> Reload</button>\r\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"btnClickNav('terms-condition')\">\r\n                <i class=\"fa fa-arrow-left\"></i> Back</button>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n    </div>\r\n    <hr/>\r\n    <div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <form role=\"form\" [formGroup]=\"form\" novalidate>\r\n                    <div class=\"card bg-light mb-3\">\r\n                        <div class=\"card-header\" style=\"background-color:#868e96; color: #fff;\">Terms & Conditions Add</div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-6\">\r\n                                    <label>Term Type</label>\r\n                                    <select class=\"form-control\" name=\"term_type\" formControlName=\"term_type\" [ngClass]=\"displayFieldCss('term_type')\">\r\n                                        <option value=\"\">Select Type</option>\r\n                                        <option value=\"1\">Payment</option>\r\n                                        <option value=\"2\">Delivery</option>\r\n                                        <option value=\"3\">Others</option>\r\n                                    </select>\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['term_type'].hasError('required')\">\r\n                                        Please select term type\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-6\">\r\n                                    <label>Company</label>\r\n                                    <select class=\"form-control\" name=\"company\" formControlName=\"company\" [ngClass]=\"displayFieldCss('company')\">\r\n                                        <option value=\"\">Select company</option>\r\n                                        <option value=\"{{country.id}}\" *ngFor=\"let country of companyList\">{{country.company_name}}</option>\r\n                                    </select>\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['company'].hasError('required')\">\r\n                                        Please select company\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-12\">\r\n                                    <label>Terms & Conditions</label>\r\n                                    <textarea class=\"form-control\" rows=\"3\" formControlName=\"term_text\" [ngClass]=\"displayFieldCss('term_text')\" name=\"term_text\"\r\n                                        placeholder=\"Terms & Conditions\"></textarea>\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['term_text'].hasError('required')\">\r\n                                        Please enter terms and conditions\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"form-group col-md-12\" style=\"text-align: right\">\r\n                                    <button type=\"submit\" class=\"btn btn-success\" (click)=\"addNewTerms()\">Submit</button>\r\n                                    <button type=\"reset\" class=\"btn btn-secondary\" (click)=\"reSet\">Reset</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/terms-condition/terms-condition-add/terms-condition-add.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/terms-condition/terms-condition-add/terms-condition-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsConditionAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company_company_service__ = __webpack_require__("./src/app/layout/company/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__terms_condition_service__ = __webpack_require__("./src/app/layout/terms-condition/terms-condition.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TermsConditionAddComponent = /** @class */ (function () {
    function TermsConditionAddComponent(router, toastr, termsConditionService, companyService) {
        this.router = router;
        this.toastr = toastr;
        this.termsConditionService = termsConditionService;
        this.companyService = companyService;
        this.companyList = [];
    }
    TermsConditionAddComponent.prototype.ngOnInit = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({
            term_type: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required),
            company: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required),
            term_text: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required)
        });
        this.getCompanyDropdownList();
    };
    TermsConditionAddComponent.prototype.btnClickNav = function (toNav) {
        this.router.navigateByUrl('/' + toNav);
    };
    ;
    TermsConditionAddComponent.prototype.goToList = function (toNav) {
        this.router.navigateByUrl('/' + toNav);
    };
    ;
    TermsConditionAddComponent.prototype.getCompanyDropdownList = function () {
        var _this = this;
        this.companyService.getCompanyDropdownList().subscribe(function (data) {
            _this.companyList = data;
            // console.log(this.companyList);
        });
    };
    ;
    TermsConditionAddComponent.prototype.addNewTerms = function () {
        var _this = this;
        if (this.form.valid) {
            this.termsConditionService.addNewTerms(this.form.value).subscribe(function (response) {
                // console.log(response)
                _this.toastr.success('Terms and services added successfully', '', {
                    timeOut: 3000,
                });
                _this.goToList('terms-condition');
            }, function (error) {
                console.log('error', error);
                // this.toastr.error('everything is broken', '', {
                //   timeOut: 3000,
                // });
            });
        }
        else {
            Object.keys(this.form.controls).forEach(function (field) {
                var control = _this.form.get(field);
                control.markAsTouched({ onlySelf: true });
            });
        }
    };
    TermsConditionAddComponent.prototype.reSet = function () {
        this.form.reset();
    };
    TermsConditionAddComponent.prototype.displayFieldCss = function (field) {
        return {
            'is-invalid': this.form.controls[field].invalid && (this.form.controls[field].dirty || this.form.controls[field].touched),
            'is-valid': this.form.controls[field].valid && (this.form.controls[field].dirty || this.form.controls[field].touched)
        };
    };
    TermsConditionAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-terms-condition-add',
            template: __webpack_require__("./src/app/layout/terms-condition/terms-condition-add/terms-condition-add.component.html"),
            styles: [__webpack_require__("./src/app/layout/terms-condition/terms-condition-add/terms-condition-add.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_3__terms_condition_service__["a" /* TermsConditionService */],
            __WEBPACK_IMPORTED_MODULE_2__company_company_service__["a" /* CompanyService */]])
    ], TermsConditionAddComponent);
    return TermsConditionAddComponent;
}());



/***/ }),

/***/ "./src/app/layout/terms-condition/terms-condition-edit/terms-condition-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <!-- <app-page-header [heading]=\"'Terms & Conditions Edit'\" [icon]=\"'fa fa-university'\"></app-page-header> -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <h4 class=\"page-header\">Terms & Conditions Edit</h4>\r\n        </div>\r\n        <div class=\"col-md-6 pull-right\" style=\"text-align: right\">\r\n            <button type=\"button\" class=\"btn btn-secondary\">\r\n                <i class=\"fa fa-question\" aria-hidden=\"true\"></i> Help</button>\r\n            <button type=\"button\" class=\"btn btn-secondary\">\r\n                <i class=\"fa fa-refresh\"></i> Reload</button>\r\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"btnClickNav('terms-condition')\">\r\n                <i class=\"fa fa-arrow-left\"></i> Back</button>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n    </div>\r\n    <hr/>\r\n    <div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <form role=\"form\" [formGroup]=\"form\" novalidate>\r\n                    <div class=\"card bg-light mb-3\">\r\n                        <div class=\"card-header\" style=\"background-color:#868e96; color: #fff;\">Terms & Conditions Edit</div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-6\">\r\n                                    <label>Term Type</label>\r\n                                    <select class=\"form-control\" name=\"term_type\" formControlName=\"term_type\" [ngClass]=\"displayFieldCss('term_type')\" [(ngModel)]=\"termsCondition.term_type\">\r\n                                        <option value=\"\">Select Type</option>\r\n                                        <option value=\"1\">Payment</option>\r\n                                        <option value=\"2\">Delivery</option>\r\n                                        <option value=\"3\">Others</option>\r\n                                    </select>\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['term_type'].hasError('required')\">\r\n                                        Please select term type\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-6\">\r\n                                    <label>Company</label>\r\n                                    <select class=\"form-control\" name=\"company\" formControlName=\"company\" [ngClass]=\"displayFieldCss('company')\" [(ngModel)]=\"termsCondition.company\">\r\n                                        <option value=\"\">Select Type</option>\r\n                                        <option value=\"{{country.id}}\" *ngFor=\"let country of companyList\">{{country.company_name}}</option>\r\n                                    </select>\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['company'].hasError('required')\">\r\n                                        Please select company\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-12\">\r\n                                    <label>Terms & Conditions</label>\r\n                                    <textarea class=\"form-control\" rows=\"3\" formControlName=\"term_text\" [ngClass]=\"displayFieldCss('term_text')\" name=\"term_text\"\r\n                                        placeholder=\"Terms & Conditions\" [(ngModel)]=\"termsCondition.term_text\">{{termsCondition.term_text}}</textarea>\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['term_text'].hasError('required')\">\r\n                                        Please enter terms and conditions\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"form-group col-md-12\" style=\"text-align: right\">\r\n                                    <button type=\"submit\" class=\"btn btn-success\" (click)=\"updateTerms()\">Submit</button>\r\n                                    <button type=\"reset\" class=\"btn btn-secondary\" (click)=\"reSet\">Reset</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/terms-condition/terms-condition-edit/terms-condition-edit.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/terms-condition/terms-condition-edit/terms-condition-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsConditionEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company_company_service__ = __webpack_require__("./src/app/layout/company/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__terms_condition_service__ = __webpack_require__("./src/app/layout/terms-condition/terms-condition.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TermsConditionEditComponent = /** @class */ (function () {
    function TermsConditionEditComponent(router, route, toastr, termsConditionService, companyService) {
        this.router = router;
        this.route = route;
        this.toastr = toastr;
        this.termsConditionService = termsConditionService;
        this.companyService = companyService;
        this.companyList = [];
        this.btnClickNav = function (toNav) {
            this.router.navigateByUrl('/' + toNav);
        };
    }
    TermsConditionEditComponent.prototype.ngOnInit = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({
            term_type: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required),
            company: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required),
            term_text: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required)
        });
        this.termsCondition = {
            term_type: '',
            company: '',
            term_text: ''
        };
        this.getCompanyDropdownList();
        this.getTermsCondition(this.route.snapshot.params['id']);
    };
    TermsConditionEditComponent.prototype.getCompanyDropdownList = function () {
        var _this = this;
        this.companyService.getCompanyDropdownList().subscribe(function (data) {
            _this.companyList = data;
            // console.log(this.companyList);
        });
    };
    ;
    TermsConditionEditComponent.prototype.getTermsCondition = function (id) {
        var _this = this;
        this.termsConditionService.getTermsDetails(id).subscribe(function (data) {
            _this.termsCondition = data;
        });
    };
    TermsConditionEditComponent.prototype.goToList = function (toNav) {
        this.router.navigateByUrl('/' + toNav);
    };
    ;
    TermsConditionEditComponent.prototype.updateTerms = function () {
        var _this = this;
        if (this.form.valid) {
            this.termsConditionService.updateTerms(this.termsCondition).subscribe(function (response) {
                // console.log(response)
                _this.toastr.success('Terms and services updated successfully', '', {
                    timeOut: 3000,
                });
                _this.goToList('terms-condition');
            }, function (error) {
                console.log('error', error);
                // this.toastr.error('everything is broken', '', {
                //   timeOut: 3000,
                // });
            });
        }
        else {
            Object.keys(this.form.controls).forEach(function (field) {
                var control = _this.form.get(field);
                control.markAsTouched({ onlySelf: true });
            });
        }
    };
    TermsConditionEditComponent.prototype.reSet = function () {
        this.form.reset();
    };
    TermsConditionEditComponent.prototype.displayFieldCss = function (field) {
        return {
            'is-invalid': this.form.controls[field].invalid && (this.form.controls[field].dirty || this.form.controls[field].touched),
            'is-valid': this.form.controls[field].valid && (this.form.controls[field].dirty || this.form.controls[field].touched)
        };
    };
    TermsConditionEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-terms-condition-edit',
            template: __webpack_require__("./src/app/layout/terms-condition/terms-condition-edit/terms-condition-edit.component.html"),
            styles: [__webpack_require__("./src/app/layout/terms-condition/terms-condition-edit/terms-condition-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_3__terms_condition_service__["a" /* TermsConditionService */],
            __WEBPACK_IMPORTED_MODULE_2__company_company_service__["a" /* CompanyService */]])
    ], TermsConditionEditComponent);
    return TermsConditionEditComponent;
}());



/***/ }),

/***/ "./src/app/layout/terms-condition/terms-condition-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsConditionRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terms_condition_component__ = __webpack_require__("./src/app/layout/terms-condition/terms-condition.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__terms_condition_add_terms_condition_add_component__ = __webpack_require__("./src/app/layout/terms-condition/terms-condition-add/terms-condition-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__terms_condition_edit_terms_condition_edit_component__ = __webpack_require__("./src/app/layout/terms-condition/terms-condition-edit/terms-condition-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__terms_condition_component__["a" /* TermsConditionComponent */]
    },
    {
        path: 'add',
        component: __WEBPACK_IMPORTED_MODULE_3__terms_condition_add_terms_condition_add_component__["a" /* TermsConditionAddComponent */]
    },
    {
        path: 'edit/:id',
        component: __WEBPACK_IMPORTED_MODULE_4__terms_condition_edit_terms_condition_edit_component__["a" /* TermsConditionEditComponent */]
    }
];
var TermsConditionRoutingModule = /** @class */ (function () {
    function TermsConditionRoutingModule() {
    }
    TermsConditionRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], TermsConditionRoutingModule);
    return TermsConditionRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/terms-condition/terms-condition.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <!-- <app-page-header [heading]=\"'Terms & Condition List'\" [icon]=\"'fa fa-university'\"></app-page-header> -->\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <h4 class=\"page-header\">Terms & Condition List</h4>\r\n    </div>\r\n    <div class=\"col-md-6 pull-right\" style=\"text-align: right\">\r\n      <button type=\"button\" class=\"btn btn-secondary\">\r\n        <i class=\"fa fa-question\" aria-hidden=\"true\"></i> Help</button>\r\n      <button type=\"button\" class=\"btn btn-secondary\">\r\n        <i class=\"fa fa-refresh\"></i> Reload</button>\r\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"btnClickNav('terms-condition/add')\">\r\n        <i class=\"fa fa-plus\"></i> New Terms & Condition</button>\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n  </div>\r\n\r\n  <hr/>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-9\">\r\n              <h5>Terms & Condition</h5>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <form role=\"form\" (ngSubmit)=\"dataSearch()\">\r\n                <div class=\"input-group\">\r\n                  <input type=\"text\" class=\"form-control\" name=\"search\" placeholder=\"Search\" [(ngModel)]=\"search_key\">\r\n                  <div class=\"input-group-append\">\r\n                    <button class=\"btn btn-secondary\" type=\"submit\">\r\n                      <i class=\"fa fa-search\"></i>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <table class=\"card-body table table-hover table-sm table-bordered\">\r\n          <thead>\r\n            <tr>\r\n              <th>Sl.No.</th>\r\n              <th>Terms & Condition</th>\r\n              <th>Company Name</th>\r\n              <th>Created Date</th>\r\n              <th>Status</th>\r\n              <th>Action</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let term of termsList ; let i = index\">\r\n              <th scope=\"row\">{{i +1}}</th>\r\n              <td>{{term.term_text}}</td>\r\n              <td>{{getCompanyName(term.company)}}</td>\r\n              <td>{{term.created_at | date:'dd-MM-yyyy'}}</td>\r\n              <td>\r\n                <a href=\"javascript:void(0);\" title=\"Active\" name=\"Active\" (click)=\"inactiveState(term.id)\" *ngIf=\"term.status==true\">\r\n                  <i class=\"fa fa-thumbs-up\"></i> Active</a>\r\n                <a href=\"javascript:void(0);\" title=\"Inactive\" name=\"Inactive\" (click)=\"activeState(term.id)\" *ngIf=\"term.status==false\">\r\n                  <i class=\"fa fa-thumbs-down\"></i> Inactive</a>\r\n              </td>\r\n              <td>\r\n                <a href=\"javascript:void(0);\" title=\"Edit\" name=\"Edit\" [routerLink]=\"['/terms-condition/edit', term.id]\">\r\n                  <i class=\"fa fa-edit\"></i>\r\n                </a>&nbsp;&nbsp;&nbsp;\r\n                <a href=\"javascript:void(0);\" title=\"Map\" name=\"Map\" (click)=\"deleteTerm(term.id)\">\r\n                  <i class=\"fa fa-trash-o\"></i>\r\n                </a>\r\n              </td>\r\n            </tr>\r\n            <tr *ngIf=\"termsList.length == 0\">\r\n              <td colspan=\"6\" class=\"text-center\">No record found</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"totaltermsList > 10\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card-body pull-right\">\r\n        <ngb-pagination [collectionSize]=\"totaltermsList\" [(page)]=\"defaultPagination\" (pageChange)=\"pagination()\" size=\"sm\"></ngb-pagination>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/terms-condition/terms-condition.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/terms-condition/terms-condition.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsConditionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terms_condition_service__ = __webpack_require__("./src/app/layout/terms-condition/terms-condition.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__company_company_service__ = __webpack_require__("./src/app/layout/company/company.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TermsConditionComponent = /** @class */ (function () {
    function TermsConditionComponent(router, toastr, termsConditionService, companyService) {
        this.router = router;
        this.toastr = toastr;
        this.termsConditionService = termsConditionService;
        this.companyService = companyService;
        this.termsList = [];
        this.search_key = '';
        this.companyList = [];
        this.btnClickNav = function (toNav) {
            this.router.navigateByUrl('/' + toNav);
        };
    }
    TermsConditionComponent.prototype.ngOnInit = function () {
        this.defaultPagination = 1;
        this.getTermsList();
        this.getCompanyDropdownList();
    };
    TermsConditionComponent.prototype.dataSearch = function () {
        this.defaultPagination = 1;
        this.getTermsList();
    };
    TermsConditionComponent.prototype.getCompanyDropdownList = function () {
        var _this = this;
        this.companyService.getCompanyDropdownList().subscribe(function (data) {
            _this.companyList = data;
            // console.log(this.companyList);
        });
    };
    ;
    TermsConditionComponent.prototype.getTermsList = function () {
        var _this = this;
        var params = new URLSearchParams();
        params.set('page', this.defaultPagination.toString());
        params.set('search', this.search_key.toString());
        this.termsConditionService.getTermsList(params).subscribe(function (data) {
            _this.totaltermsList = data['count'];
            _this.termsList = data['results'];
            // console.log(this.termsList)
        });
    };
    ;
    TermsConditionComponent.prototype.getCompanyName = function (id) {
        var data = { id: 0, company_name: '' };
        data = this.companyList.filter(function (x) { return x.id === id; })[0];
        if (data != undefined) {
            return data.company_name;
        }
    };
    TermsConditionComponent.prototype.activeState = function (id) {
        var _this = this;
        var terms;
        terms = {
            id: id,
            status: true
        };
        this.termsConditionService.activeInactiveTerms(terms).subscribe(function (response) {
            _this.toastr.success('Status changed successfully', '', {
                timeOut: 3000,
            });
            _this.getTermsList();
        }, function (error) {
            console.log('error', error);
            // this.toastr.error('everything is broken', '', {
            //   timeOut: 3000,
            // });
        });
    };
    ;
    TermsConditionComponent.prototype.inactiveState = function (id) {
        var _this = this;
        var terms;
        terms = {
            id: id,
            status: false
        };
        this.termsConditionService.activeInactiveTerms(terms).subscribe(function (response) {
            _this.toastr.success('Status changed successfully', '', {
                timeOut: 3000,
            });
            _this.getTermsList();
        }, function (error) {
            console.log('error', error);
            // this.toastr.error('everything is broken', '', {
            //   timeOut: 3000,
            // });
        });
    };
    ;
    TermsConditionComponent.prototype.deleteTerm = function (id) {
        var _this = this;
        var terms;
        terms = {
            id: id
        };
        this.termsConditionService.deleteTerms(terms).subscribe(function (response) {
            _this.toastr.success('Terms deleted successfully', '', {
                timeOut: 3000,
            });
            _this.getTermsList();
        }, function (error) {
            console.log('error', error);
            // this.toastr.error('everything is broken', '', {
            //   timeOut: 3000,
            // });
        });
    };
    ;
    TermsConditionComponent.prototype.pagination = function () {
        this.getTermsList();
    };
    ;
    TermsConditionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-terms-condition',
            template: __webpack_require__("./src/app/layout/terms-condition/terms-condition.component.html"),
            styles: [__webpack_require__("./src/app/layout/terms-condition/terms-condition.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_2__terms_condition_service__["a" /* TermsConditionService */],
            __WEBPACK_IMPORTED_MODULE_4__company_company_service__["a" /* CompanyService */]])
    ], TermsConditionComponent);
    return TermsConditionComponent;
}());



/***/ }),

/***/ "./src/app/layout/terms-condition/terms-condition.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsConditionModule", function() { return TermsConditionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bs_component_bs_component_module__ = __webpack_require__("./src/app/layout/bs-component/bs-component.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__terms_condition_routing_module__ = __webpack_require__("./src/app/layout/terms-condition/terms-condition-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__terms_condition_component__ = __webpack_require__("./src/app/layout/terms-condition/terms-condition.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__terms_condition_add_terms_condition_add_component__ = __webpack_require__("./src/app/layout/terms-condition/terms-condition-add/terms-condition-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__terms_condition_edit_terms_condition_edit_component__ = __webpack_require__("./src/app/layout/terms-condition/terms-condition-edit/terms-condition-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__terms_condition_service__ = __webpack_require__("./src/app/layout/terms-condition/terms-condition.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__company_company_service__ = __webpack_require__("./src/app/layout/company/company.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var TermsConditionModule = /** @class */ (function () {
    function TermsConditionModule() {
    }
    TermsConditionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__terms_condition_routing_module__["a" /* TermsConditionRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared__["b" /* PageHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_5__bs_component_bs_component_module__["BsComponentModule"],
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */].forRoot()
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_7__terms_condition_component__["a" /* TermsConditionComponent */], __WEBPACK_IMPORTED_MODULE_8__terms_condition_add_terms_condition_add_component__["a" /* TermsConditionAddComponent */], __WEBPACK_IMPORTED_MODULE_9__terms_condition_edit_terms_condition_edit_component__["a" /* TermsConditionEditComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_11__terms_condition_service__["a" /* TermsConditionService */], __WEBPACK_IMPORTED_MODULE_12__company_company_service__["a" /* CompanyService */]]
        })
    ], TermsConditionModule);
    return TermsConditionModule;
}());



/***/ })

});
//# sourceMappingURL=terms-condition.module.chunk.js.map