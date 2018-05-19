webpackJsonp(["company.module"],{

/***/ "./src/app/layout/company/branch-add/branch-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div style=\"padding-top: 20px;\">\r\n        <div class=\"col-md-6 offset-md-6 pull-right\" style=\"text-align: right\">\r\n            <button type=\"button\" class=\"btn btn-secondary\">\r\n                <i class=\"fa fa-question\" aria-hidden=\"true\"></i> Help</button>\r\n            <button type=\"button\" class=\"btn btn-secondary\">\r\n                <i class=\"fa fa-refresh\"></i> Reload</button>\r\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"btnClickNav()\">\r\n                <i class=\"fa fa-arrow-left\"></i> Back</button>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n    </div>\r\n    <hr/>\r\n    <div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <form role=\"form\" [formGroup]=\"form\">\r\n                    <div class=\"card bg-light mb-3\">\r\n                        <div class=\"card-header\" style=\"background-color:#868e96; color: #fff;\">Company Branch Add</div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label>Branch Name</label>\r\n                                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"companyBranch.branch_name\" name=\"branch_name\" placeholder=\"Branch Name\"\r\n                                        formControlName=\"branch_name\" [ngClass]=\"displayFieldCss('branch_name')\">\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('branch_name')\">\r\n                                        Please enter branch name\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label>Email</label>\r\n                                    <input type=\"email\" class=\"form-control\" [(ngModel)]=\"companyBranch.branch_email\" name=\"branch_email\" placeholder=\"Email\"\r\n                                        formControlName=\"branch_email\" [ngClass]=\"displayFieldCss('branch_email')\">\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('branch_email')\">\r\n                                        Please enter email\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label>Phone</label>\r\n                                    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"companyBranch.branch_contact_no\" name=\"branch_contact_no\" placeholder=\"Phone\"\r\n                                        formControlName=\"branch_contact_no\" [ngClass]=\"displayFieldCss('branch_contact_no')\">\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('branch_contact_no')\">\r\n                                        Please enter phone\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-12\">\r\n                                    <label>Branch Address</label>\r\n                                    <textarea class=\"form-control\" [(ngModel)]=\"companyBranch.branch_address\" name=\"branch_address\" rows=\"3\" placeholder=\"Branch Address\"\r\n                                        formControlName=\"branch_address\" [ngClass]=\"displayFieldCss('branch_address')\">{{companyBranch.branch_address}}</textarea>\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('branch_address')\">\r\n                                        Please enter branch address\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label>State</label>\r\n                                    <select class=\"form-control\" [(ngModel)]=\"companyBranch.branch_state\" name=\"branch_state\" formControlName=\"branch_state\"\r\n                                        [ngClass]=\"displayFieldCss('branch_state')\">\r\n                                        <option value=\"\">Select State</option>\r\n                                        <option *ngFor=\"let state of stateList;\" value=\"{{state.id}}\">{{state.state_name}}</option>\r\n                                    </select>\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('branch_state')\">\r\n                                        Please select state\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label>City</label>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"City Name\" [(ngModel)]=\"companyBranch.branch_city\" name=\"branch_city\"\r\n                                        formControlName=\"branch_city\" [ngClass]=\"displayFieldCss('branch_city')\">\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('branch_city')\">\r\n                                        Please enter state\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label>Pin</label>\r\n                                    <input type=\"number\" class=\"form-control\" placeholder=\"Pin\" [(ngModel)]=\"companyBranch.branch_pincode\" name=\"branch_pincode\"\r\n                                        formControlName=\"branch_pincode\" [ngClass]=\"displayFieldCss('branch_pincode')\">\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('branch_pincode')\">\r\n                                        Please enter pin\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label>GSTIN</label>\r\n                                    <input type=\"number\" class=\"form-control\" placeholder=\"GSTIN\" [(ngModel)]=\"companyBranch.branch_gstin\" name=\"branch_gstin\"\r\n                                        formControlName=\"branch_gstin\" [ngClass]=\"displayFieldCss('branch_gstin')\">\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('branch_gstin')\">\r\n                                        Please enter GSTIN\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label>PAN</label>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"PAN\" [(ngModel)]=\"companyBranch.branch_pan\" name=\"branch_pan\" formControlName=\"branch_pan\"\r\n                                        [ngClass]=\"displayFieldCss('branch_pan')\">\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('branch_pan')\">\r\n                                        Please enter PAN\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label>CIN</label>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"CIN\" [(ngModel)]=\"companyBranch.branch_cin\" name=\"branch_cin\" formControlName=\"branch_cin\"\r\n                                        [ngClass]=\"displayFieldCss('branch_cin')\">\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('branch_cin')\">\r\n                                        Please enter CIN\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"form-group col-md-12\" style=\"text-align: right\">\r\n                                    <button type=\"submit\" class=\"btn btn-success\" (click)=\"addNewCompanyBranch()\">Submit</button>\r\n                                    <button type=\"reset\" class=\"btn btn-secondary\" (click)=\"reSet()\">Reset</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/company/branch-add/branch-add.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/company/branch-add/branch-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BranchAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company_service__ = __webpack_require__("./src/app/layout/company/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__states_states_service__ = __webpack_require__("./src/app/layout/states/states.service.ts");
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






var BranchAddComponent = /** @class */ (function () {
    function BranchAddComponent(companyService, statesService, router, route, formBuilder, toastr) {
        this.companyService = companyService;
        this.statesService = statesService;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.showBranchList = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.addNewCompanyBranch = function () {
            var _this = this;
            if (this.form.valid) {
                this.companyService.addNewCompanyBranch(this.companyBranch).subscribe(function (response) {
                    _this.toastr.success('Branch added successfully', '', {
                        timeOut: 3000,
                    });
                    //this.goToList('states');
                    _this.showBranchList.emit();
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
        this.btnClickNav = function () {
            this.showBranchList.emit();
        };
        this.getStateList = function () {
            var _this = this;
            this.statesService.getStateActiveList().subscribe(function (data) {
                _this.stateList = data;
            });
        };
    }
    BranchAddComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            branch_name: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            branch_email: [null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].email]],
            branch_contact_no: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            branch_address: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            branch_state: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            branch_city: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            branch_pincode: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            branch_gstin: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            branch_pan: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            branch_cin: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]
        });
        this.companyBranch = {
            branch_name: '',
            branch_email: '',
            branch_contact_no: '',
            branch_address: '',
            branch_state: '',
            branch_city: '',
            branch_pincode: '',
            branch_gstin: '',
            branch_pan: '',
            branch_cin: '',
            company: this.route.snapshot.params['id']
        };
        this.getStateList();
    };
    BranchAddComponent.prototype.reSet = function () {
        this.form.reset();
    };
    BranchAddComponent.prototype.isFieldValid = function (field) {
        return !this.form.get(field).valid && this.form.get(field).touched;
    };
    BranchAddComponent.prototype.displayFieldCss = function (field) {
        return {
            'is-invalid': !this.form.get(field).valid && this.form.get(field).touched,
            'is-valid': this.form.get(field).valid
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], BranchAddComponent.prototype, "showBranchList", void 0);
    BranchAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-branch-add',
            template: __webpack_require__("./src/app/layout/company/branch-add/branch-add.component.html"),
            styles: [__webpack_require__("./src/app/layout/company/branch-add/branch-add.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_3__states_states_service__["a" /* StatesService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */]])
    ], BranchAddComponent);
    return BranchAddComponent;
}());



/***/ }),

/***/ "./src/app/layout/company/branch-edit/branch-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div  style=\"padding-top: 20px;\">\r\n      <div class=\"col-md-6 offset-md-6 pull-right\" style=\"text-align: right\">\r\n          <button type=\"button\" class=\"btn btn-secondary\"><i class=\"fa fa-question\" aria-hidden=\"true\"></i> Help</button>\r\n          <button type=\"button\" class=\"btn btn-secondary\"><i class=\"fa fa-refresh\"></i> Reload</button>\r\n          <button type=\"button\" class=\"btn btn-success\" (click)=\"btnClickNav()\"><i class=\"fa fa-arrow-left\"></i> Back</button>\r\n      </div>\r\n      <div class=\"clearfix\"></div>\r\n    </div>\r\n    <hr/>\r\n    <div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n              <form role=\"form\" [formGroup]=\"form\">\r\n                <div class=\"card bg-light mb-3\">\r\n                    <div class=\"card-header\" style=\"background-color:#868e96; color: #fff;\">Company Branch Edit</div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"row\">\r\n                            <div class=\"form-group col-md-4\">\r\n                                <label>Branch Name</label>\r\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"companyBranch.branch_name\" name=\"branch_name\" placeholder=\"Branch Name\" formControlName=\"branch_name\" [ngClass]=\"displayFieldCss('branch_name')\">\r\n                                <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('branch_name')\">\r\n                                        Please enter branch name\r\n                                    </div>\r\n                            </div>\r\n                            <div class=\"form-group col-md-4\">\r\n                                <label>Email</label>\r\n                                <input type=\"email\" class=\"form-control\" [(ngModel)]=\"companyBranch.branch_email\" name=\"branch_email\" placeholder=\"Email\" formControlName=\"branch_email\" [ngClass]=\"displayFieldCss('branch_email')\">\r\n                                <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('branch_email')\">\r\n                                        Please enter email\r\n                                    </div>\r\n                            </div>\r\n                            <div class=\"form-group col-md-4\">\r\n                              <label>Phone</label>\r\n                              <input type=\"number\" class=\"form-control\" [(ngModel)]=\"companyBranch.branch_contact_no\" name=\"branch_contact_no\" placeholder=\"Phone\" formControlName=\"branch_contact_no\" [ngClass]=\"displayFieldCss('branch_contact_no')\">\r\n                              <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('branch_contact_no')\">\r\n                                    Please enter phone\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group col-md-12\">\r\n                                <label>Branch Address</label>\r\n                                <textarea class=\"form-control\" [(ngModel)]=\"companyBranch.branch_address\" name=\"branch_address\" rows=\"3\" placeholder=\"Branch Address\" formControlName=\"branch_address\" [ngClass]=\"displayFieldCss('branch_address')\">{{companyBranch.branch_address}}</textarea>\r\n                                <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('branch_address')\">\r\n                                        Please enter branch address\r\n                                    </div>\r\n                            </div>\r\n                            <div class=\"form-group col-md-4\">\r\n                                <label>State</label>\r\n                                <select class=\"form-control\"  [(ngModel)]=\"companyBranch.branch_state\" name=\"branch_state\" formControlName=\"branch_state\"\r\n                                [ngClass]=\"displayFieldCss('branch_state')\">\r\n                                    <option value=\"\">Select State</option>\r\n                                    <option *ngFor=\"let state of stateList;\" value=\"{{state.id}}\">{{state.state_name}}</option>\r\n                                </select>\r\n                                <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('branch_state')\">\r\n                                        Please select state\r\n                                    </div>\r\n                            </div>\r\n                            <div class=\"form-group col-md-4\">\r\n                                <label>City</label>\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"City Name\" [(ngModel)]=\"companyBranch.branch_city\" name=\"branch_city\" formControlName=\"branch_city\" [ngClass]=\"displayFieldCss('branch_city')\">\r\n                                <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('branch_city')\">\r\n                                        Please enter state\r\n                                    </div>\r\n                            </div>\r\n                            <div class=\"form-group col-md-4\">\r\n                                <label>Pin</label>\r\n                                <input type=\"number\" class=\"form-control\" placeholder=\"Pin\" [(ngModel)]=\"companyBranch.branch_pincode\" name=\"branch_pincode\" formControlName=\"branch_pincode\" [ngClass]=\"displayFieldCss('branch_pincode')\">\r\n                                <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('branch_pincode')\">\r\n                                        Please enter pin\r\n                                    </div>\r\n                            </div>\r\n                            <div class=\"form-group col-md-4\">\r\n                                <label>GSTIN</label>\r\n                                <input type=\"number\" class=\"form-control\" placeholder=\"GSTIN\" [(ngModel)]=\"companyBranch.branch_gstin\" name=\"branch_gstin\" formControlName=\"branch_gstin\" [ngClass]=\"displayFieldCss('branch_gstin')\">\r\n                                <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('branch_gstin')\">\r\n                                        Please enter GSTIN\r\n                                    </div>\r\n                            </div>\r\n                            <div class=\"form-group col-md-4\">\r\n                                <label>PAN</label>\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"PAN\" [(ngModel)]=\"companyBranch.branch_pan\" name=\"branch_pan\" formControlName=\"branch_pan\"\r\n                                [ngClass]=\"displayFieldCss('branch_pan')\">\r\n                                <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('branch_pan')\">\r\n                                        Please enter PAN\r\n                                    </div>\r\n                            </div>\r\n                            <div class=\"form-group col-md-4\">\r\n                                <label>CIN</label>\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"CIN\" [(ngModel)]=\"companyBranch.branch_cin\" name=\"branch_cin\" formControlName=\"branch_cin\"\r\n                                [ngClass]=\"displayFieldCss('branch_cin')\">\r\n                                <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('branch_cin')\">\r\n                                        Please enter CIN\r\n                                    </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group col-md-12\" style=\"text-align: right\">\r\n                                <button type=\"submit\" class=\"btn btn-success\" (click)=\"updateCompanyBranch()\">Submit</button>\r\n                                <button type=\"reset\" class=\"btn btn-secondary\" (click)=\"reSet()\">Reset</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n              </form>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/layout/company/branch-edit/branch-edit.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/company/branch-edit/branch-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BranchEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company_service__ = __webpack_require__("./src/app/layout/company/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__states_states_service__ = __webpack_require__("./src/app/layout/states/states.service.ts");
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






var BranchEditComponent = /** @class */ (function () {
    function BranchEditComponent(companyService, statesService, router, route, formBuilder, toastr) {
        this.companyService = companyService;
        this.statesService = statesService;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.showBranchList = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.getCompanyBranchDetails = function (id) {
            var _this = this;
            this.companyService.getCompanyBranchDetails(id).subscribe(function (data) {
                _this.companyBranch = data;
            });
        };
        this.updateCompanyBranch = function () {
            var _this = this;
            if (this.form.valid) {
                this.companyService.updateCompanyBranch(this.companyBranch).subscribe(function (response) {
                    //this.goToList('states');
                    _this.toastr.success('Branch updated successfully', '', {
                        timeOut: 3000,
                    });
                    _this.showBranchList.emit();
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
        this.btnClickNav = function () {
            this.showBranchList.emit();
        };
        this.getStateList = function () {
            var _this = this;
            this.statesService.getStateActiveList().subscribe(function (data) {
                _this.stateList = data;
            });
        };
    }
    BranchEditComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            branch_name: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            branch_email: [null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].email]],
            branch_contact_no: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            branch_address: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            branch_state: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            branch_city: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            branch_pincode: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            branch_gstin: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            branch_pan: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            branch_cin: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]
        });
        // console.log(this.companyBranchId);
        this.companyBranch = {
            id: '',
            branch_name: '',
            branch_email: '',
            branch_contact_no: '',
            branch_address: '',
            branch_state: '',
            branch_city: '',
            branch_pincode: '',
            branch_gstin: '',
            branch_pan: '',
            branch_cin: '',
            company: this.route.snapshot.params['id']
        };
        this.getCompanyBranchDetails(this.companyBranchId);
        this.getStateList();
    };
    BranchEditComponent.prototype.reSet = function () {
        this.form.reset();
    };
    BranchEditComponent.prototype.isFieldValid = function (field) {
        return !this.form.get(field).valid && this.form.get(field).touched;
    };
    BranchEditComponent.prototype.displayFieldCss = function (field) {
        return {
            'is-invalid': !this.form.get(field).valid && this.form.get(field).touched,
            'is-valid': this.form.get(field).valid
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], BranchEditComponent.prototype, "companyBranchId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], BranchEditComponent.prototype, "showBranchList", void 0);
    BranchEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-branch-edit',
            template: __webpack_require__("./src/app/layout/company/branch-edit/branch-edit.component.html"),
            styles: [__webpack_require__("./src/app/layout/company/branch-edit/branch-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_3__states_states_service__["a" /* StatesService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */]])
    ], BranchEditComponent);
    return BranchEditComponent;
}());



/***/ }),

/***/ "./src/app/layout/company/branch-list/branch-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div *ngIf=\"companyBranchCompShow.showList==true\">\r\n    <div style=\"padding-top: 20px;\">\r\n      <div class=\"col-md-6 offset-md-6 pull-right\" style=\"text-align: right\">\r\n        <button type=\"button\" class=\"btn btn-secondary\">\r\n          <i class=\"fa fa-question\" aria-hidden=\"true\"></i> Help</button>\r\n        <button type=\"button\" class=\"btn btn-secondary\">\r\n          <i class=\"fa fa-refresh\"></i> Reload</button>\r\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"showBranchAdd()\">\r\n          <i class=\"fa fa-plus\"></i> New Branch</button>\r\n      </div>\r\n      <div class=\"clearfix\"></div>\r\n    </div>\r\n\r\n    <hr/>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-9\">\r\n                <h5>Branch</h5>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <form role=\"form\" (ngSubmit)=\"dataSearch()\">\r\n                  <div class=\"input-group\">\r\n                    <input type=\"text\" class=\"form-control\" name=\"search\" placeholder=\"Search\" [(ngModel)]=\"search_key\">\r\n                    <div class=\"input-group-append\">\r\n                      <button class=\"btn btn-secondary\" type=\"submit\">\r\n                        <i class=\"fa fa-search\"></i>\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <table class=\"card-body table table-hover table-sm table-bordered\">\r\n            <thead>\r\n              <tr>\r\n                <th>Sl.No.</th>\r\n                <th>Unit</th>\r\n                <th>Unit Location</th>\r\n                <th>Contact No.</th>\r\n                <th>Email</th>\r\n                <th>GST</th>\r\n                <th>PAN</th>\r\n                <th>CIN</th>\r\n                <th>Action</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let companyBranch of companyBranchList ; let i = index\">\r\n                <th scope=\"row\">{{i +1}}</th>\r\n                <td>{{companyBranch.branch_name}}</td>\r\n                <td>{{companyBranch.branch_address}}</td>\r\n                <td>{{companyBranch.branch_contact_no}}</td>\r\n                <td>{{companyBranch.branch_email}}</td>\r\n                <td>{{companyBranch.branch_gstin}}</td>\r\n                <td>{{companyBranch.branch_pan}}</td>\r\n                <td>{{companyBranch.branch_cin}}</td>\r\n                <td>\r\n                  <a href=\"javascript:void(0);\" title=\"Edit\" name=\"Edit\" (click)=\"showBranchEdit(companyBranch.id)\">\r\n                    <i class=\"fa fa-edit\"></i>\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n              <tr *ngIf=\"companyBranchList.length == 0\">\r\n                <td colspan=\"9\" class=\"text-center\">No record found</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"totalcompanyBranchList > 10\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"card-body pull-right\">\r\n          <ngb-pagination [collectionSize]=\"totalcompanyBranchList\" [(page)]=\"defaultPagination\" (pageChange)=\"pagination()\" size=\"sm\"></ngb-pagination>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"companyBranchCompShow.showAdd==true\">\r\n    <app-branch-add (showBranchList)=\"reloadBranchList($event)\"></app-branch-add>\r\n  </div>\r\n  <div *ngIf=\"companyBranchCompShow.showEdit==true\">\r\n    <app-branch-edit [companyBranchId]=companyBranchId (showBranchList)=\"reloadBranchList($event)\"></app-branch-edit>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/company/branch-list/branch-list.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/company/branch-list/branch-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BranchListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company_service__ = __webpack_require__("./src/app/layout/company/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__states_states_service__ = __webpack_require__("./src/app/layout/states/states.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BranchListComponent = /** @class */ (function () {
    function BranchListComponent(companyService, statesService, router, route, toastr) {
        this.companyService = companyService;
        this.statesService = statesService;
        this.router = router;
        this.route = route;
        this.toastr = toastr;
        this.companyBranchList = [];
        this.search_key = '';
        this.btnClickNav = function (toNav) {
            this.router.navigateByUrl('/' + toNav);
        };
        this.showBranchAdd = function () {
            this.companyBranchCompShow = {
                showList: false,
                showAdd: true,
                showEdit: false
            };
        };
        this.showBranchEdit = function (id) {
            this.companyBranchId = id;
            this.companyBranchCompShow = {
                showList: false,
                showAdd: false,
                showEdit: true
            };
        };
        this.reloadBranchList = function () {
            this.companyBranchCompShow = {
                showList: true,
                showAdd: false,
                showEdit: false
            };
            this.getCompanyBranchList(this.route.snapshot.params['id']);
        };
        this.getCompanyBranchList = function (id) {
            var _this = this;
            var params = new URLSearchParams();
            params.set('page', this.defaultPagination.toString());
            params.set('search', this.search_key.toString());
            this.companyService.getCompanyBranchList(id, params).subscribe(function (data) {
                _this.totalcompanyBranchList = data['count'];
                _this.companyBranchList = data['results'];
                // console.log(this.companyBranchList);
            });
        };
        this.pagination = function () {
            this.getCompanyBranchList(this.route.snapshot.params['id']);
        };
    }
    BranchListComponent.prototype.ngOnInit = function () {
        this.defaultPagination = 1;
        this.companyBranchCompShow = {
            showList: true,
            showAdd: false,
            showEdit: false
        };
        this.getCompanyBranchList(this.route.snapshot.params['id']);
    };
    BranchListComponent.prototype.dataSearch = function () {
        this.defaultPagination = 1;
        this.getCompanyBranchList(this.route.snapshot.params['id']);
    };
    BranchListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-branch-list',
            template: __webpack_require__("./src/app/layout/company/branch-list/branch-list.component.html"),
            styles: [__webpack_require__("./src/app/layout/company/branch-list/branch-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_3__states_states_service__["a" /* StatesService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */]])
    ], BranchListComponent);
    return BranchListComponent;
}());



/***/ }),

/***/ "./src/app/layout/company/company-add/company-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <!-- <app-page-header [heading]=\"'Add Company'\" [icon]=\"'fa fa-university'\"></app-page-header> -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <h4 class=\"page-header\">Add Company</h4>\r\n        </div>\r\n        <div class=\"col-md-6 pull-right\" style=\"text-align: right\">\r\n            <button type=\"button\" class=\"btn btn-secondary\">\r\n                <i class=\"fa fa-question\" aria-hidden=\"true\"></i> Help</button>\r\n            <button type=\"button\" class=\"btn btn-secondary\">\r\n                <i class=\"fa fa-refresh\"></i> Reload</button>\r\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"btnClickNav('company')\">\r\n                <i class=\"fa fa-arrow-left\"></i> Back</button>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n    </div>\r\n    <hr/>\r\n\r\n    <div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <form role=\"form\" [formGroup]=\"form\" novalidate>\r\n                    <div class=\"card bg-light mb-3\">\r\n                        <div class=\"card-header\" style=\"background-color:#868e96; color: #fff;\">Company Add</div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-6\">\r\n                                    <label>Mother Company</label>\r\n                                    <select class=\"form-control\" name=\"company_list\" formControlName=\"parent\" [ngClass]=\"displayFieldCss('parent')\">\r\n                                        <option value=\"\">Select Mother company</option>\r\n                                        <option *ngFor=\"let motherCompany of companyList ;\" value=\"{{motherCompany.id}}\">{{motherCompany.company_name}}</option>\r\n                                    </select>\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['parent'].hasError('required')\">\r\n                                        Please select mother company\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-6\">\r\n                                    <label>Company Name</label>\r\n                                    <input type=\"text\" class=\"form-control\" name=\"company_name\" placeholder=\"Name\" formControlName=\"company_name\" [ngClass]=\"displayFieldCss('company_name')\">\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['company_name'].hasError('required')\">\r\n                                        Please enter company name\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label>Website</label>\r\n                                    <input type=\"text\" class=\"form-control\" name=\"company_url\" placeholder=\"Website\" formControlName=\"company_url\" [ngClass]=\"displayFieldCss('company_url')\">\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['company_url'].hasError('pattern') && !form.controls['company_url'].hasError('required')\">\r\n                                        Please enter a valid website\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['company_url'].hasError('required')\">\r\n                                        Please enter website\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label>Email</label>\r\n                                    <input type=\"email\" class=\"form-control\" name=\"company_email\" placeholder=\"Email\" formControlName=\"company_email\" [ngClass]=\"displayFieldCss('company_email')\">\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['company_email'].hasError('pattern') && !form.controls['company_email'].hasError('required')\">\r\n                                        Please enter a valid email address\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['company_email'].hasError('required')\">\r\n                                        Email is required\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label>Phone</label>\r\n                                    <input type=\"text\" class=\"form-control\" name=\"company_contact\" placeholder=\"Phone\" formControlName=\"company_contact\" [ngClass]=\"displayFieldCss('company_contact')\">\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['company_contact'].hasError('minlength') && !form.controls['company_contact'].hasError('required')\">\r\n                                        Please enter at least 10 digit\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['company_contact'].hasError('maxlength') && !form.controls['company_contact'].hasError('required')\">\r\n                                        Phone number should be less then 13 digit\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['company_contact'].hasError('required')\">\r\n                                        Please enter phone\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-12\">\r\n                                    <label>Company Address</label>\r\n                                    <textarea class=\"form-control\" rows=\"3\" placeholder=\"Company Address\" name=\"company_address\" formControlName=\"company_address\"\r\n                                        [ngClass]=\"displayFieldCss('company_address')\"></textarea>\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['company_address'].hasError('required')\">\r\n                                        Please enter address\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label>State</label>\r\n                                    <select class=\"form-control\" name=\"company_state\" formControlName=\"company_state\" [ngClass]=\"displayFieldCss('company_state')\">\r\n                                        <option value=\"\">Select State</option>\r\n                                        <option *ngFor=\"let state of stateList ;\" value=\"{{state.id}}\">{{state.state_name}}</option>\r\n                                    </select>\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['company_state'].hasError('required')\">\r\n                                        Please select state\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label>City</label>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"City Name\" name=\"company_city\" formControlName=\"company_city\" [ngClass]=\"displayFieldCss('company_city')\">\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['company_city'].hasError('required')\">\r\n                                        Please enter city\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label>Pin</label>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Pin\" name=\"company_pin\" formControlName=\"company_pin\" [ngClass]=\"displayFieldCss('company_pin')\">\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['company_pin'].hasError('required')\">\r\n                                        Please enter pin\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label>GSTIN</label>\r\n                                    <input type=\"number\" class=\"form-control\" placeholder=\"GSTIN\" name=\"company_gst\" formControlName=\"company_gst\" [ngClass]=\"displayFieldCss('company_gst')\">\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['company_gst'].hasError('required')\">\r\n                                        Please enter GSTN\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label>PAN</label>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"PAN\" name=\"company_pan\" formControlName=\"company_pan\" [ngClass]=\"displayFieldCss('company_pan')\">\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['company_pan'].hasError('required')\">\r\n                                        Please enter PAN\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label>CIN</label>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"CIN\" placeholder=\"CIN\" name=\"company_cin\" formControlName=\"company_cin\"\r\n                                        [ngClass]=\"displayFieldCss('company_cin')\">\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['company_cin'].hasError('required')\">\r\n                                        Please enter CIN\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-12\" style=\"text-align: right\">\r\n                                    <button type=\"submit\" class=\"btn btn-success\" (click)=\"addNewCompany()\">Submit</button>\r\n                                    <button type=\"reset\" class=\"btn btn-secondary\" (click)=\"reSet()\">Reset</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/company/company-add/company-add.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/company/company-add/company-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company_service__ = __webpack_require__("./src/app/layout/company/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__states_states_service__ = __webpack_require__("./src/app/layout/states/states.service.ts");
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






var CompanyAddComponent = /** @class */ (function () {
    function CompanyAddComponent(companyService, statesService, router, toastr) {
        this.companyService = companyService;
        this.statesService = statesService;
        this.router = router;
        this.toastr = toastr;
        this.companyList = [];
        this.goToList = function (toNav) {
            this.router.navigateByUrl('/' + toNav);
        };
        this.addNewCompany = function () {
            var _this = this;
            if (this.form.valid) {
                this.companyService.addNewCompany(this.form.value).subscribe(function (response) {
                    // console.log(response)
                    _this.toastr.success('Company added successfully', '', {
                        timeOut: 3000,
                    });
                    _this.goToList('company');
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
        this.getStateList = function () {
            var _this = this;
            this.statesService.getStateActiveList().subscribe(function (data) {
                _this.stateList = data;
                // console.log(this.stateList);
            });
        };
        this.getCompanyDropdownList = function () {
            var _this = this;
            this.companyService.getCompanyDropdownList().subscribe(function (data) {
                _this.companyList = data;
                // console.log(this.companyList);
            });
        };
        this.btnClickNav = function (toNav) {
            this.router.navigateByUrl('/' + toNav);
        };
    }
    CompanyAddComponent.prototype.ngOnInit = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({
            parent: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required),
            company_name: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required),
            company_url: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)
            ]),
            company_email: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
            ]),
            company_contact: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(10),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].maxLength(12)
            ]),
            company_address: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required),
            company_state: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required),
            company_city: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required),
            company_pin: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required),
            company_gst: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required),
            company_pan: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required),
            company_cin: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required)
        });
        this.getCompanyDropdownList();
        this.getStateList();
    };
    CompanyAddComponent.prototype.reSet = function () {
        this.form.reset();
    };
    CompanyAddComponent.prototype.displayFieldCss = function (field) {
        return {
            'is-invalid': this.form.controls[field].invalid && (this.form.controls[field].dirty || this.form.controls[field].touched),
            'is-valid': this.form.controls[field].valid && (this.form.controls[field].dirty || this.form.controls[field].touched)
        };
    };
    CompanyAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-company-add',
            template: __webpack_require__("./src/app/layout/company/company-add/company-add.component.html"),
            styles: [__webpack_require__("./src/app/layout/company/company-add/company-add.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_3__states_states_service__["a" /* StatesService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */]])
    ], CompanyAddComponent);
    return CompanyAddComponent;
}());



/***/ }),

/***/ "./src/app/layout/company/company-details/company-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <!-- <app-page-header [heading]=\"'Company Details'\" [icon]=\"'fa fa-university'\"></app-page-header> -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <h4 class=\"page-header\">Company Details</h4>\r\n        </div>\r\n        <div class=\"col-md-6 pull-right\" style=\"text-align: right\">\r\n            <button type=\"button\" class=\"btn btn-secondary\">\r\n                <i class=\"fa fa-question\" aria-hidden=\"true\"></i> Help</button>\r\n            <button type=\"button\" class=\"btn btn-secondary\">\r\n                <i class=\"fa fa-refresh\"></i> Reload</button>\r\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"btnClickNav('company')\">\r\n                <i class=\"fa fa-arrow-left\"></i> Back</button>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n    </div>\r\n    <hr/>\r\n\r\n    <div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card bg-light mb-3\">\r\n                    <div class=\"card-header\" style=\"background-color:#868e96; color: #fff;\">Company Details : {{company.company_name}}</div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <ngb-tabset>\r\n                                    <ngb-tab title=\"Company Details\">\r\n                                        <ng-template ngbTabContent>\r\n                                            <table class=\"card-body table table-hover table-sm table-bordered\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th colspan=\"2\">\r\n                                                            <label class=\"control-label \">Company Name : </label>\r\n                                                            <br>\r\n                                                            <h5>{{company.company_name}}</h5>\r\n                                                        </th>\r\n                                                        <th>\r\n                                                            <button type=\"button\" class=\"btn btn-success\" [routerLink]=\"['/company/edit', company.id]\">\r\n                                                                <i class=\"fa fa-edit\"></i> Edit</button>\r\n                                                        </th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr>\r\n                                                        <td>\r\n                                                            <label class=\"control-label \">Website : </label>\r\n                                                            <br>\r\n                                                            <h5>{{company.company_url}}</h5>\r\n                                                        </td>\r\n                                                        <td>\r\n                                                            <label class=\"control-label \">Email : </label>\r\n                                                            <br>\r\n                                                            <h5>{{company.company_email}}</h5>\r\n                                                        </td>\r\n                                                        <td>\r\n                                                            <label class=\"control-label \">Phone : </label>\r\n                                                            <br>\r\n                                                            <h5>{{company.company_contact}}</h5>\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <td>\r\n                                                            <label class=\"control-label \">Company Address : </label>\r\n                                                            <br>\r\n                                                            <h5>{{company.company_address}}</h5>\r\n                                                        </td>\r\n                                                        <td>\r\n                                                            <label class=\"control-label \">State : </label>\r\n                                                            <br>\r\n                                                            <h5>{{states.state_name}}</h5>\r\n                                                        </td>\r\n                                                        <td>\r\n                                                            <label class=\"control-label \">City : </label>\r\n                                                            <br>\r\n                                                            <h5>{{company.company_city}}</h5>\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <td>\r\n                                                            <label class=\"control-label \">Pin : </label>\r\n                                                            <br>\r\n                                                            <h5>{{company.company_pin}}</h5>\r\n                                                        </td>\r\n                                                        <td>\r\n                                                            <label class=\"control-label \">GSTIN : </label>\r\n                                                            <br>\r\n                                                            <h5>{{company.company_gst}}</h5>\r\n                                                        </td>\r\n                                                        <td>\r\n                                                            <label class=\"control-label \">PAN : </label>\r\n                                                            <br>\r\n                                                            <h5>{{company.company_pan}}</h5>\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <td colspan=\"3\">\r\n                                                            <label class=\"control-label \">CIN : </label>\r\n                                                            <br>\r\n                                                            <h5>{{company.company_cin}}</h5>\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                        </ng-template>\r\n                                    </ngb-tab>\r\n                                    <ngb-tab title=\"Unit / Branch\">\r\n                                        <ng-template ngbTabContent>\r\n                                            <app-branch-list></app-branch-list>\r\n                                        </ng-template>\r\n                                    </ngb-tab>\r\n                                    <ngb-tab title=\"Storage Location\">\r\n                                        <ng-template ngbTabContent>\r\n                                            <app-storage-location-list></app-storage-location-list>\r\n                                        </ng-template>\r\n                                    </ngb-tab>\r\n                                    <ngb-tab title=\"Storage Bin\">\r\n                                        <ng-template ngbTabContent>\r\n                                            <app-storage-bin-list></app-storage-bin-list>\r\n                                        </ng-template>\r\n                                    </ngb-tab>\r\n                                </ngb-tabset>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/company/company-details/company-details.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/company/company-details/company-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company_service__ = __webpack_require__("./src/app/layout/company/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__states_states_service__ = __webpack_require__("./src/app/layout/states/states.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompanyDetailsComponent = /** @class */ (function () {
    function CompanyDetailsComponent(companyService, statesService, router, route) {
        this.companyService = companyService;
        this.statesService = statesService;
        this.router = router;
        this.route = route;
    }
    CompanyDetailsComponent.prototype.ngOnInit = function () {
        this.company = {
            id: '',
            company_name: '',
            company_url: '',
            company_email: '',
            company_contact: '',
            company_address: '',
            company_state: '',
            company_city: '',
            company_pin: '',
            company_gst: '',
            company_pan: '',
            company_cin: ''
        };
        this.states = {
            id: '',
            state_name: '',
            tin_number: '',
            state_code: ''
        };
        this.getCompanyDetails(this.route.snapshot.params['id']);
    };
    CompanyDetailsComponent.prototype.getCompanyDetails = function (id) {
        var _this = this;
        this.companyService.getCompanyDetails(id).subscribe(function (data) {
            _this.company = data;
            if (_this.company.company_state) {
                _this.getStateDetails(_this.company.company_state);
            }
        });
    };
    CompanyDetailsComponent.prototype.getStateDetails = function (id) {
        var _this = this;
        this.statesService.getStateDetails(id).subscribe(function (data) {
            _this.states = data;
        });
    };
    CompanyDetailsComponent.prototype.btnClickNav = function (toNav) {
        this.router.navigateByUrl('/' + toNav);
    };
    ;
    CompanyDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-company-details',
            template: __webpack_require__("./src/app/layout/company/company-details/company-details.component.html"),
            styles: [__webpack_require__("./src/app/layout/company/company-details/company-details.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_3__states_states_service__["a" /* StatesService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], CompanyDetailsComponent);
    return CompanyDetailsComponent;
}());



/***/ }),

/***/ "./src/app/layout/company/company-edit/company-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <!-- <app-page-header [heading]=\"'Edit Company'\" [icon]=\"'fa fa-university'\"></app-page-header> -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <h4 class=\"page-header\">Edit Company</h4>\r\n        </div>\r\n        <div class=\"col-md-6 pull-right\" style=\"text-align: right\">\r\n            <button type=\"button\" class=\"btn btn-secondary\">\r\n                <i class=\"fa fa-question\" aria-hidden=\"true\"></i> Help</button>\r\n            <button type=\"button\" class=\"btn btn-secondary\">\r\n                <i class=\"fa fa-refresh\"></i> Reload</button>\r\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"btnClickNav('company')\">\r\n                <i class=\"fa fa-arrow-left\"></i> Back</button>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n    </div>\r\n    <hr/>\r\n\r\n    <div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <form role=\"form\" [formGroup]=\"form\" novalidate>\r\n                    <div class=\"card bg-light mb-3\">\r\n                        <div class=\"card-header\" style=\"background-color:#868e96; color: #fff;\">Company Edit</div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-12\">\r\n                                    <label>Company Name</label>\r\n                                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"company.company_name\" name=\"company_name\" placeholder=\"Name\" formControlName=\"company_name\"\r\n                                        [ngClass]=\"displayFieldCss('company_name')\">\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['company_name'].hasError('required')\">\r\n                                        Please enter company name\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label>Website</label>\r\n                                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"company.company_url\" name=\"company_url\" placeholder=\"Website\" formControlName=\"company_url\"\r\n                                        [ngClass]=\"displayFieldCss('company_url')\">\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['company_url'].hasError('pattern') && !form.controls['company_url'].hasError('required')\">\r\n                                        Please enter a valid website\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['company_url'].hasError('required')\">\r\n                                        Please enter website\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label>Email</label>\r\n                                    <input type=\"email\" class=\"form-control\" [(ngModel)]=\"company.company_email\" name=\"company_email\" placeholder=\"Email\" formControlName=\"company_email\"\r\n                                        [ngClass]=\"displayFieldCss('company_email')\">\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['company_email'].hasError('pattern') && !form.controls['company_email'].hasError('required')\">\r\n                                        Please enter a valid email address\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['company_email'].hasError('required')\">\r\n                                        Email is required\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label>Phone</label>\r\n                                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"company.company_contact\" name=\"company_contact\" placeholder=\"Phone\"\r\n                                        formControlName=\"company_contact\" [ngClass]=\"displayFieldCss('company_contact')\">\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['company_contact'].hasError('minlength') && !form.controls['company_contact'].hasError('required')\">\r\n                                        Please enter at least 10 digit\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['company_contact'].hasError('maxlength') && !form.controls['company_contact'].hasError('required')\">\r\n                                        Phone number should be less then 13 digit\r\n                                    </div>\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['company_contact'].hasError('required')\">\r\n                                        Please enter phone\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-12\">\r\n                                    <label>Company Address</label>\r\n                                    <textarea class=\"form-control\" [(ngModel)]=\"company.company_address\" name=\"company_address\" rows=\"3\" placeholder=\"Company Address\"\r\n                                        formControlName=\"company_address\" [ngClass]=\"displayFieldCss('company_address')\">{{company.company_address}}</textarea>\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['company_address'].hasError('required')\">\r\n                                        Please enter address\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label>State</label>\r\n                                    <select class=\"form-control\" [(ngModel)]=\"company.company_state\" name=\"company_state\" formControlName=\"company_state\" [ngClass]=\"displayFieldCss('company_state')\">\r\n                                        <option value=\"0\">Select State</option>\r\n                                        <option *ngFor=\"let state of stateList ;\" value=\"{{state.id}}\">{{state.state_name}}</option>\r\n                                    </select>\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['company_state'].hasError('required')\">\r\n                                        Please select state\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label>City</label>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"City Name\" [(ngModel)]=\"company.company_city\" name=\"company_city\" formControlName=\"company_city\"\r\n                                        [ngClass]=\"displayFieldCss('company_city')\">\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['company_city'].hasError('required')\">\r\n                                        Please enter city\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label>Pin</label>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Pin\" [(ngModel)]=\"company.company_pin\" name=\"company_pin\" formControlName=\"company_pin\"\r\n                                        [ngClass]=\"displayFieldCss('company_pin')\">\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['company_pin'].hasError('required')\">\r\n                                        Please enter pin\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label>GSTIN</label>\r\n                                    <input type=\"number\" class=\"form-control\" placeholder=\"GSTIN\" [(ngModel)]=\"company.company_gst\" name=\"company_gst\" formControlName=\"company_gst\"\r\n                                        [ngClass]=\"displayFieldCss('company_gst')\">\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['company_gst'].hasError('required')\">\r\n                                        Please enter GSTN\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label>PAN</label>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"PAN\" [(ngModel)]=\"company.company_pan\" name=\"company_pan\" formControlName=\"company_pan\"\r\n                                        [ngClass]=\"displayFieldCss('company_pan')\">\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['company_pan'].hasError('required')\">\r\n                                        Please enter PAN\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label>CIN</label>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"CIN\" [(ngModel)]=\"company.company_cin\" name=\"company_cin\" formControlName=\"company_cin\"\r\n                                        [ngClass]=\"displayFieldCss('company_cin')\">\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['company_cin'].hasError('required')\">\r\n                                        Please enter CIN\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-12\" style=\"text-align: right\">\r\n                                    <button type=\"submit\" class=\"btn btn-success\" (click)=\"updateCompany()\">Submit</button>\r\n                                    <button type=\"reset\" class=\"btn btn-secondary\" (click)=\"reSet()\">Reset</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/company/company-edit/company-edit.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/company/company-edit/company-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company_service__ = __webpack_require__("./src/app/layout/company/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__states_states_service__ = __webpack_require__("./src/app/layout/states/states.service.ts");
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






var CompanyEditComponent = /** @class */ (function () {
    function CompanyEditComponent(companyService, statesService, router, route, toastr) {
        this.companyService = companyService;
        this.statesService = statesService;
        this.router = router;
        this.route = route;
        this.toastr = toastr;
        this.getCompanyDetails = function (id) {
            var _this = this;
            this.companyService.getCompanyDetails(id).subscribe(function (data) {
                _this.company = data;
                // console.log(this.company);
            });
        };
        this.goToList = function (toNav) {
            this.router.navigateByUrl('/' + toNav);
        };
        this.updateCompany = function () {
            var _this = this;
            if (this.form.valid) {
                this.companyService.updateCompany(this.company).subscribe(function (response) {
                    _this.toastr.success('Company updated successfully', '', {
                        timeOut: 3000,
                    });
                    _this.goToList('company');
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
        this.getStateList = function () {
            var _this = this;
            this.statesService.getStateActiveList().subscribe(function (data) {
                _this.stateList = data;
            });
        };
        this.btnClickNav = function (toNav) {
            this.router.navigateByUrl('/' + toNav);
        };
    }
    CompanyEditComponent.prototype.ngOnInit = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({
            company_name: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required),
            company_url: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)
            ]),
            company_email: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
            ]),
            company_contact: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(10),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].maxLength(12)
            ]),
            company_address: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required),
            company_state: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required),
            company_city: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required),
            company_pin: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required),
            company_gst: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required),
            company_pan: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required),
            company_cin: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required)
        });
        this.company = {
            id: '',
            company_name: '',
            company_url: '',
            company_email: '',
            company_contact: '',
            company_address: '',
            company_state: '',
            company_city: '',
            company_pin: '',
            company_gst: '',
            company_pan: '',
            company_cin: ''
        };
        this.getCompanyDetails(this.route.snapshot.params['id']);
        this.getStateList();
    };
    CompanyEditComponent.prototype.reSet = function () {
        this.form.reset();
    };
    CompanyEditComponent.prototype.displayFieldCss = function (field) {
        return {
            'is-invalid': this.form.controls[field].invalid && (this.form.controls[field].dirty || this.form.controls[field].touched),
            'is-valid': this.form.controls[field].valid && (this.form.controls[field].dirty || this.form.controls[field].touched)
        };
    };
    CompanyEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-company-edit',
            template: __webpack_require__("./src/app/layout/company/company-edit/company-edit.component.html"),
            styles: [__webpack_require__("./src/app/layout/company/company-edit/company-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_3__states_states_service__["a" /* StatesService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */]])
    ], CompanyEditComponent);
    return CompanyEditComponent;
}());



/***/ }),

/***/ "./src/app/layout/company/company-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company_component__ = __webpack_require__("./src/app/layout/company/company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__company_add_company_add_component__ = __webpack_require__("./src/app/layout/company/company-add/company-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__company_details_company_details_component__ = __webpack_require__("./src/app/layout/company/company-details/company-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__company_edit_company_edit_component__ = __webpack_require__("./src/app/layout/company/company-edit/company-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__company_component__["a" /* CompanyComponent */]
    },
    {
        path: 'add',
        component: __WEBPACK_IMPORTED_MODULE_3__company_add_company_add_component__["a" /* CompanyAddComponent */]
    },
    {
        path: 'details/:id',
        component: __WEBPACK_IMPORTED_MODULE_4__company_details_company_details_component__["a" /* CompanyDetailsComponent */]
    },
    {
        path: 'edit/:id',
        component: __WEBPACK_IMPORTED_MODULE_5__company_edit_company_edit_component__["a" /* CompanyEditComponent */]
    },
];
var CompanyRoutingModule = /** @class */ (function () {
    function CompanyRoutingModule() {
    }
    CompanyRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], CompanyRoutingModule);
    return CompanyRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/company/company-tree/company-tree.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"col-md-6 offset-md-6 pull-right\" style=\"text-align: right\">\n     <button type=\"button\" class=\"btn btn-secondary\"><i class=\"fa fa-question\" aria-hidden=\"true\"></i> Help</button>\n     <button type=\"button\" class=\"btn btn-secondary\"><i class=\"fa fa-refresh\"></i> Reload</button>\n     <button type=\"button\" class=\"btn btn-success\" (click)=\"btnClickNav('company/add')\"><i class=\"fa fa-plus\"></i> New Company</button>\n  </div>\n  <div class=\"clearfix\"></div>\n</div>\n\n<hr/>\n<div style=\"text-align: center\">\n  <div class=\"tree\">\n    <ul>\n        <li *ngFor=\"let company of companyList\" >\n            <a href=\"javascript:void(0);\" [routerLink]=\"['/company/details', company.id]\">{{company.company_name}}</a>\n            <ul *ngIf=\"company.children.length>0\">\n                <li *ngFor=\"let subCompany of company.children\">\n                    <a href=\"javascript:void(0);\" [routerLink]=\"['/company/details', subCompany.id]\">{{subCompany.company_name}}</a>\n                    <ul *ngIf=\"subCompany.children.length>0\">\n                        <li *ngFor=\"let subSubCompany of subCompany.children\">\n                            <a href=\"javascript:void(0);\" [routerLink]=\"['/company/details', subSubCompany.id]\">{{subSubCompany.company_name}}</a>\n                            <ul *ngIf=\"subSubCompany.children.length>0\">\n                                <li *ngFor=\"let subSubSubCompany of subSubCompany.children\">\n                                    <a href=\"javascript:void(0);\" [routerLink]=\"['/company/details', subSubSubCompany.id]\">{{subSubSubCompany.company_name}}</a>\n                                </li>\n                            </ul>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        </li>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/company/company-tree/company-tree.component.scss":
/***/ (function(module, exports) {

module.exports = ".tree ul {\n  padding-top: 20px;\n  position: relative;\n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  -moz-transition: all 0.5s; }\n\n.tree li {\n  float: left;\n  text-align: center;\n  list-style-type: none;\n  position: relative;\n  padding: 20px 5px 0 5px;\n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  -moz-transition: all 0.5s; }\n\n/*We will use ::before and ::after to draw the connectors*/\n\n.tree li::before, .tree li::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: 50%;\n  border-top: 1px solid #2BBBAF;\n  width: 50%;\n  height: 20px; }\n\n.tree li::after {\n  right: auto;\n  left: 50%;\n  border-left: 1px solid #2BBBAF; }\n\n/*We need to remove left-right connectors from elements without\r\n\r\nany siblings*/\n\n.tree li:only-child::after, .tree li:only-child::before {\n  display: none; }\n\n/*Remove space from the top of single children*/\n\n.tree li:only-child {\n  padding-top: 0; }\n\n/*Remove left connector from first child and\r\n\r\nright connector from last child*/\n\n.tree li:first-child::before, .tree li:last-child::after {\n  border: 0 none; }\n\n/*Adding back the vertical connector to the last nodes*/\n\n.tree li:last-child::before {\n  border-right: 1px solid #2BBBAF;\n  border-radius: 0 5px 0 0;\n  -webkit-border-radius: 0 5px 0 0;\n  -moz-border-radius: 0 5px 0 0; }\n\n.tree li:first-child::after {\n  border-radius: 5px 0 0 0;\n  -webkit-border-radius: 5px 0 0 0;\n  -moz-border-radius: 5px 0 0 0; }\n\n/*Time to add downward connectors from parents*/\n\n.tree ul ul::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 50%;\n  border-left: 1px solid #2BBBAF;\n  width: 0;\n  height: 20px; }\n\n.tree li a {\n  border: 1px solid #2BBBAF;\n  padding: 8px 19px;\n  text-decoration: none;\n  color: #666;\n  font-family: arial, verdana, tahoma;\n  font-size: 14px;\n  display: inline-block;\n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  -moz-transition: all 0.5s; }\n\n/*Time for some hover effects*/\n\n/*We will apply the hover effect the the lineage of the element also*/\n\n.tree li a:hover, .tree li a:hover + ul li a {\n  background-color: #2BBBAF;\n  color: #fff;\n  border: 1px solid #2BBBAF; }\n\n/*Connector styles on hover*/\n\n.tree li a:hover + ul li::after,\n.tree li a:hover + ul li::before,\n.tree li a:hover + ul::before,\n.tree li a:hover + ul ul::before {\n  border-color: #2BBBAF; }\n"

/***/ }),

/***/ "./src/app/layout/company/company-tree/company-tree.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyTreeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company_service__ = __webpack_require__("./src/app/layout/company/company.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyTreeComponent = /** @class */ (function () {
    function CompanyTreeComponent(companyService, router) {
        this.companyService = companyService;
        this.router = router;
        this.getCompanyList = function () {
            var _this = this;
            this.companyService.getCompanyList().subscribe(function (data) {
                _this.companyList = data;
                // console.log(this.companyList);
            });
        };
        this.btnClickNav = function (toNav) {
            this.router.navigateByUrl('/' + toNav);
        };
    }
    CompanyTreeComponent.prototype.ngOnInit = function () {
        this.getCompanyList();
    };
    CompanyTreeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-company-tree',
            template: __webpack_require__("./src/app/layout/company/company-tree/company-tree.component.html"),
            styles: [__webpack_require__("./src/app/layout/company/company-tree/company-tree.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], CompanyTreeComponent);
    return CompanyTreeComponent;
}());



/***/ }),

/***/ "./src/app/layout/company/company.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <!-- <app-page-header [heading]=\"'Company Hierarchy'\" [icon]=\"'fa fa-university'\"></app-page-header> -->\r\n  <h2 class=\"text-muted\">Company Hierarchy</h2>\r\n  <app-company-tree></app-company-tree>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/company/company.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/company/company.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyComponent; });
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


var CompanyComponent = /** @class */ (function () {
    function CompanyComponent(router) {
        this.router = router;
    }
    CompanyComponent.prototype.ngOnInit = function () {
    };
    CompanyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-company',
            template: __webpack_require__("./src/app/layout/company/company.component.html"),
            styles: [__webpack_require__("./src/app/layout/company/company.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], CompanyComponent);
    return CompanyComponent;
}());



/***/ }),

/***/ "./src/app/layout/company/company.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyModule", function() { return CompanyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__company_routing_module__ = __webpack_require__("./src/app/layout/company/company-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__company_component__ = __webpack_require__("./src/app/layout/company/company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__company_tree_company_tree_component__ = __webpack_require__("./src/app/layout/company/company-tree/company-tree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__company_add_company_add_component__ = __webpack_require__("./src/app/layout/company/company-add/company-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__company_details_company_details_component__ = __webpack_require__("./src/app/layout/company/company-details/company-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__company_edit_company_edit_component__ = __webpack_require__("./src/app/layout/company/company-edit/company-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__branch_list_branch_list_component__ = __webpack_require__("./src/app/layout/company/branch-list/branch-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__branch_add_branch_add_component__ = __webpack_require__("./src/app/layout/company/branch-add/branch-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__branch_edit_branch_edit_component__ = __webpack_require__("./src/app/layout/company/branch-edit/branch-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__storage_location_list_storage_location_list_component__ = __webpack_require__("./src/app/layout/company/storage-location-list/storage-location-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__storage_location_add_storage_location_add_component__ = __webpack_require__("./src/app/layout/company/storage-location-add/storage-location-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__storage_location_edit_storage_location_edit_component__ = __webpack_require__("./src/app/layout/company/storage-location-edit/storage-location-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__storage_bin_list_storage_bin_list_component__ = __webpack_require__("./src/app/layout/company/storage-bin-list/storage-bin-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__storage_bin_add_storage_bin_add_component__ = __webpack_require__("./src/app/layout/company/storage-bin-add/storage-bin-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__storage_bin_edit_storage_bin_edit_component__ = __webpack_require__("./src/app/layout/company/storage-bin-edit/storage-bin-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__bs_component_bs_component_module__ = __webpack_require__("./src/app/layout/bs-component/bs-component.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__company_service__ = __webpack_require__("./src/app/layout/company/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__states_states_service__ = __webpack_require__("./src/app/layout/states/states.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var CompanyModule = /** @class */ (function () {
    function CompanyModule() {
    }
    CompanyModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__company_routing_module__["a" /* CompanyRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared__["b" /* PageHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_20__bs_component_bs_component_module__["BsComponentModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__company_component__["a" /* CompanyComponent */],
                __WEBPACK_IMPORTED_MODULE_7__company_tree_company_tree_component__["a" /* CompanyTreeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__company_add_company_add_component__["a" /* CompanyAddComponent */],
                __WEBPACK_IMPORTED_MODULE_9__company_details_company_details_component__["a" /* CompanyDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__company_edit_company_edit_component__["a" /* CompanyEditComponent */],
                __WEBPACK_IMPORTED_MODULE_11__branch_list_branch_list_component__["a" /* BranchListComponent */],
                __WEBPACK_IMPORTED_MODULE_12__branch_add_branch_add_component__["a" /* BranchAddComponent */],
                __WEBPACK_IMPORTED_MODULE_13__branch_edit_branch_edit_component__["a" /* BranchEditComponent */],
                __WEBPACK_IMPORTED_MODULE_14__storage_location_list_storage_location_list_component__["a" /* StorageLocationListComponent */],
                __WEBPACK_IMPORTED_MODULE_15__storage_location_add_storage_location_add_component__["a" /* StorageLocationAddComponent */],
                __WEBPACK_IMPORTED_MODULE_16__storage_location_edit_storage_location_edit_component__["a" /* StorageLocationEditComponent */],
                __WEBPACK_IMPORTED_MODULE_17__storage_bin_list_storage_bin_list_component__["a" /* StorageBinListComponent */],
                __WEBPACK_IMPORTED_MODULE_18__storage_bin_add_storage_bin_add_component__["a" /* StorageBinAddComponent */],
                __WEBPACK_IMPORTED_MODULE_19__storage_bin_edit_storage_bin_edit_component__["a" /* StorageBinEditComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_21__company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_22__states_states_service__["a" /* StatesService */]]
        })
    ], CompanyModule);
    return CompanyModule;
}());



/***/ }),

/***/ "./src/app/layout/company/storage-bin-add/storage-bin-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div style=\"padding-top: 20px;\">\r\n        <div class=\"col-md-6 offset-md-6 pull-right\" style=\"text-align: right\">\r\n            <button type=\"button\" class=\"btn btn-secondary\">\r\n                <i class=\"fa fa-question\" aria-hidden=\"true\"></i> Help</button>\r\n            <button type=\"button\" class=\"btn btn-secondary\">\r\n                <i class=\"fa fa-refresh\"></i> Reload</button>\r\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"btnClickNav()\">\r\n                <i class=\"fa fa-arrow-left\"></i> Back</button>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n    </div>\r\n    <hr/>\r\n    <div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <form role=\"form\" [formGroup]=\"form\">\r\n                    <div class=\"card bg-light mb-3\">\r\n                        <div class=\"card-header\" style=\"background-color:#868e96; color: #fff;\">Company Storage Bin Add</div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-3\">\r\n                                    <label>Branch</label>\r\n                                    <select class=\"form-control\" [(ngModel)]=\"companyStorageBin.branch\" name=\"storagebin_branch\" formControlName=\"branch\" [ngClass]=\"displayFieldCss('branch')\">\r\n                                        <option value=\"\">Select Branch</option>\r\n                                        <option *ngFor=\"let companyBranch of companyBranchList;\" value=\"{{companyBranch.id}}\">{{companyBranch.branch_name}}</option>\r\n                                    </select>\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('branch')\">\r\n                                        Please select branch\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-3\">\r\n                                    <label>Storage</label>\r\n                                    <select class=\"form-control\" [(ngModel)]=\"companyStorageBin.storage\" name=\"storagebin_storage\" formControlName=\"storage\"\r\n                                        [ngClass]=\"displayFieldCss('storage')\">\r\n                                        <option value=\"\">Select Storage</option>\r\n                                        <option *ngFor=\"let companyStorage of companyStorageList;\" value=\"{{companyStorage.id}}\">{{companyStorage.storage_address}}</option>\r\n                                    </select>\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('storage')\">\r\n                                        Please select storage\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-2\">\r\n                                    <label>Bin Number</label>\r\n                                    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"companyStorageBin.bin_no\" name=\"bin_no\" placeholder=\"Bin Number\" formControlName=\"bin_no\"\r\n                                        [ngClass]=\"displayFieldCss('bin_no')\">\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('bin_no')\">\r\n                                        Please enter bin number\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-2\">\r\n                                    <label>Bin Volume</label>\r\n                                    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"companyStorageBin.bin_volume\" name=\"bin_volume\" placeholder=\"Bin Volume\" formControlName=\"bin_volume\"\r\n                                        [ngClass]=\"displayFieldCss('bin_volume')\">\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('bin_volume')\">\r\n                                        Please enter bin volume\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"form-group col-md-2\">\r\n                                    <label>Material UOM</label>\r\n                                    <select class=\"form-control\" [(ngModel)]=\"companyStorageBin.uom\" name=\"storagebin_uom\" formControlName=\"uom\" [ngClass]=\"displayFieldCss('uom')\">\r\n                                        <option value=\"\">Select UOM</option>\r\n                                        <option *ngFor=\"let uom of UOMList;\" value=\"{{uom.id}}\">{{uom.name}}</option>\r\n                                    </select>\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('uom')\">\r\n                                        Please select UMO\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"form-group col-md-12\" style=\"text-align: right\">\r\n                                    <button type=\"submit\" class=\"btn btn-success\" (click)=\"addNewCompanyStorageBin()\">Submit</button>\r\n                                    <button type=\"reset\" class=\"btn btn-secondary\" (click)=\"reSet()\">Reset</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/company/storage-bin-add/storage-bin-add.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/company/storage-bin-add/storage-bin-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageBinAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company_service__ = __webpack_require__("./src/app/layout/company/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StorageBinAddComponent = /** @class */ (function () {
    function StorageBinAddComponent(companyService, router, route, formBuilder, toastr) {
        this.companyService = companyService;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.showStorageBinList = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.addNewCompanyStorageBin = function () {
            var _this = this;
            if (this.form.valid) {
                this.companyService.addNewCompanyStorageBin(this.companyStorageBin).subscribe(function (response) {
                    _this.toastr.success('Storeage bin added successfully', '', {
                        timeOut: 3000,
                    });
                    _this.showStorageBinList.emit();
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
        this.btnClickNav = function () {
            this.showStorageBinList.emit();
        };
        this.getCompanyBranchList = function (id) {
            var _this = this;
            this.companyService.getCompanyBranchList(id).subscribe(function (data) {
                _this.companyBranchList = data['results'];
                // console.log(this.companyBranchList);
            });
        };
        this.getCompanyStorageList = function (id) {
            var _this = this;
            this.companyService.getCompanyStorageList(id).subscribe(function (data) {
                _this.companyStorageList = data['results'];
                // console.log(this.companyStorageList);
            });
        };
        this.getUOMList = function () {
            var _this = this;
            this.companyService.getUOMList().subscribe(function (data) {
                _this.UOMList = data['results'];
                // console.log(this.UOMList);
            });
        };
    }
    StorageBinAddComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            bin_no: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            bin_volume: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            branch: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            storage: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            uom: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]
        });
        this.companyStorageBin = {
            bin_no: '',
            bin_volume: '',
            branch: '',
            storage: '',
            uom: '',
            company: this.route.snapshot.params['id']
        };
        this.getCompanyBranchList(this.route.snapshot.params['id']);
        this.getCompanyStorageList(this.route.snapshot.params['id']);
        this.getUOMList();
    };
    StorageBinAddComponent.prototype.reSet = function () {
        this.form.reset();
    };
    StorageBinAddComponent.prototype.isFieldValid = function (field) {
        return !this.form.get(field).valid && this.form.get(field).touched;
    };
    StorageBinAddComponent.prototype.displayFieldCss = function (field) {
        return {
            'is-invalid': !this.form.get(field).valid && this.form.get(field).touched,
            'is-valid': this.form.get(field).valid
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], StorageBinAddComponent.prototype, "showStorageBinList", void 0);
    StorageBinAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-storage-bin-add',
            template: __webpack_require__("./src/app/layout/company/storage-bin-add/storage-bin-add.component.html"),
            styles: [__webpack_require__("./src/app/layout/company/storage-bin-add/storage-bin-add.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */]])
    ], StorageBinAddComponent);
    return StorageBinAddComponent;
}());



/***/ }),

/***/ "./src/app/layout/company/storage-bin-edit/storage-bin-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div style=\"padding-top: 20px;\">\r\n        <div class=\"col-md-6 offset-md-6 pull-right\" style=\"text-align: right\">\r\n            <button type=\"button\" class=\"btn btn-secondary\">\r\n                <i class=\"fa fa-question\" aria-hidden=\"true\"></i> Help</button>\r\n            <button type=\"button\" class=\"btn btn-secondary\">\r\n                <i class=\"fa fa-refresh\"></i> Reload</button>\r\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"btnClickNav()\">\r\n                <i class=\"fa fa-arrow-left\"></i> Back</button>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n    </div>\r\n    <hr/>\r\n    <div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <form role=\"form\" [formGroup]=\"form\">\r\n                    <div class=\"card bg-light mb-3\">\r\n                        <div class=\"card-header\" style=\"background-color:#868e96; color: #fff;\">Company Storage Bin Edit</div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-3\">\r\n                                    <label>Branch</label>\r\n                                    <select class=\"form-control\" [(ngModel)]=\"companyStorageBin.branch\" name=\"storagebin_branch\" formControlName=\"branch\" [ngClass]=\"displayFieldCss('branch')\">\r\n                                        <option value=\"0\">Select Branch</option>\r\n                                        <option *ngFor=\"let companyBranch of companyBranchList;\" value=\"{{companyBranch.id}}\">{{companyBranch.branch_name}}</option>\r\n                                    </select>\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('branch')\">\r\n                                        Please select branch\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-3\">\r\n                                    <label>Storage</label>\r\n                                    <select class=\"form-control\" [(ngModel)]=\"companyStorageBin.storage\" name=\"storagebin_storage\" formControlName=\"storage\"\r\n                                        [ngClass]=\"displayFieldCss('storage')\">\r\n                                        <option value=\"0\">Select Storage</option>\r\n                                        <option *ngFor=\"let companyStorage of companyStorageList;\" value=\"{{companyStorage.id}}\">{{companyStorage.storage_address}}</option>\r\n                                    </select>\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('storage')\">\r\n                                        Please select storage\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-2\">\r\n                                    <label>Bin Number</label>\r\n                                    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"companyStorageBin.bin_no\" name=\"bin_no\" placeholder=\"Bin Number\" formControlName=\"bin_no\"\r\n                                        [ngClass]=\"displayFieldCss('bin_no')\">\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('bin_no')\">\r\n                                        Please enter bin number\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-2\">\r\n                                    <label>Bin Volume</label>\r\n                                    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"companyStorageBin.bin_volume\" name=\"bin_volume\" placeholder=\"Bin Volume\"\r\n                                        formControlName=\"bin_volume\" [ngClass]=\"displayFieldCss('bin_volume')\">\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('bin_volume')\">\r\n                                        Please enter bin volume\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"form-group col-md-2\">\r\n                                    <label>Material UOM</label>\r\n                                    <select class=\"form-control\" [(ngModel)]=\"companyStorageBin.uom\" name=\"storagebin_uom\" formControlName=\"uom\" [ngClass]=\"displayFieldCss('uom')\">\r\n                                        <option value=\"0\">Select UOM</option>\r\n                                        <option *ngFor=\"let uom of UOMList;\" value=\"{{uom.id}}\">{{uom.name}}</option>\r\n                                    </select>\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('uom')\">\r\n                                        Please select UMO\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"form-group col-md-12\" style=\"text-align: right\">\r\n                                    <button type=\"submit\" class=\"btn btn-success\" (click)=\"updateCompanyStorageBin()\">Submit</button>\r\n                                    <button type=\"reset\" class=\"btn btn-secondary\" (click)=\"reSet()\">Reset</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/company/storage-bin-edit/storage-bin-edit.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/company/storage-bin-edit/storage-bin-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageBinEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company_service__ = __webpack_require__("./src/app/layout/company/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StorageBinEditComponent = /** @class */ (function () {
    function StorageBinEditComponent(companyService, router, route, formBuilder, toastr) {
        this.companyService = companyService;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.showStorageBinList = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.getCompanyStorageBinDetails = function (id) {
            var _this = this;
            this.companyService.getCompanyStorageBinDetails(id).subscribe(function (data) {
                _this.companyStorageBin = data;
                // console.log(this.companyStorageBin);
            });
        };
        this.updateCompanyStorageBin = function () {
            var _this = this;
            if (this.form.valid) {
                this.companyService.updateCompanyStorageBin(this.companyStorageBin).subscribe(function (response) {
                    //this.goToList('states');
                    _this.toastr.success('Storeage bin updated successfully', '', {
                        timeOut: 3000,
                    });
                    _this.showStorageBinList.emit();
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
        this.btnClickNav = function () {
            this.showStorageBinList.emit();
        };
        this.getCompanyBranchList = function (id) {
            var _this = this;
            this.companyService.getCompanyBranchList(id).subscribe(function (data) {
                _this.companyBranchList = data['results'];
                // console.log(this.companyBranchList);
            });
        };
        this.getCompanyStorageList = function (id) {
            var _this = this;
            this.companyService.getCompanyStorageList(id).subscribe(function (data) {
                _this.companyStorageList = data['results'];
                // console.log(this.companyStorageList);
            });
        };
        this.getUOMList = function () {
            var _this = this;
            this.companyService.getUOMList().subscribe(function (data) {
                _this.UOMList = data['results'];
                // console.log(this.UOMList);
            });
        };
    }
    StorageBinEditComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            bin_no: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            bin_volume: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            branch: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            storage: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            uom: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]
        });
        // console.log(this.companyStorageBinId);
        this.companyStorageBin = {
            id: '',
            bin_no: '',
            bin_volume: '',
            branch: '',
            storage: '',
            uom: '',
            company: this.route.snapshot.params['id']
        };
        this.getCompanyStorageBinDetails(this.companyStorageBinId);
        this.getCompanyBranchList(this.route.snapshot.params['id']);
        this.getCompanyStorageList(this.route.snapshot.params['id']);
        this.getUOMList();
    };
    StorageBinEditComponent.prototype.reSet = function () {
        this.form.reset();
    };
    StorageBinEditComponent.prototype.isFieldValid = function (field) {
        return !this.form.get(field).valid && this.form.get(field).touched;
    };
    StorageBinEditComponent.prototype.displayFieldCss = function (field) {
        return {
            'is-invalid': !this.form.get(field).valid && this.form.get(field).touched,
            'is-valid': this.form.get(field).valid
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], StorageBinEditComponent.prototype, "companyStorageBinId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], StorageBinEditComponent.prototype, "showStorageBinList", void 0);
    StorageBinEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-storage-bin-edit',
            template: __webpack_require__("./src/app/layout/company/storage-bin-edit/storage-bin-edit.component.html"),
            styles: [__webpack_require__("./src/app/layout/company/storage-bin-edit/storage-bin-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */]])
    ], StorageBinEditComponent);
    return StorageBinEditComponent;
}());



/***/ }),

/***/ "./src/app/layout/company/storage-bin-list/storage-bin-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div *ngIf=\"companyStorageBinCompShow.showList==true\">\r\n      <div style=\"padding-top: 20px;\">\r\n        <div class=\"col-md-6 offset-md-6 pull-right\" style=\"text-align: right\">\r\n            <button type=\"button\" class=\"btn btn-secondary\"><i class=\"fa fa-question\" aria-hidden=\"true\"></i> Help</button>\r\n            <button type=\"button\" class=\"btn btn-secondary\"><i class=\"fa fa-refresh\"></i> Reload</button>\r\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"showStorageBinAdd()\"><i class=\"fa fa-plus\"></i> New Branch</button>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n      </div>\r\n        \r\n      <hr/>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-9\">\r\n                <h5>Storage Bin</h5>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <form role=\"form\" (ngSubmit)=\"dataSearch()\">\r\n                  <div class=\"input-group\">\r\n                    <input type=\"text\" class=\"form-control\" name=\"search\" placeholder=\"Search\" [(ngModel)]=\"search_key\">\r\n                    <div class=\"input-group-append\">\r\n                      <button class=\"btn btn-secondary\" type=\"submit\">\r\n                        <i class=\"fa fa-search\"></i>\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <table class=\"card-body table table-hover table-sm table-bordered\">\r\n              <thead>\r\n              <tr>\r\n                  <th>Sl.No.</th>\r\n                  <th>Bin No.</th>\r\n                  <th>Capacity</th>\r\n                  <th>UOM</th>\r\n                  <th>Action</th>\r\n              </tr>\r\n              </thead>\r\n              <tbody>\r\n              <tr  *ngFor=\"let companyStorageBin of companyStorageBinList ; let i = index\" >\r\n                <th scope=\"row\">{{i +1}}</th>\r\n                <td>{{companyStorageBin.bin_no}}</td>\r\n                <td>{{companyStorageBin.bin_volume}}</td>\r\n                <td>{{companyStorageBin.uom}}</td>\r\n                <td>\r\n                  <a href=\"javascript:void(0);\" title=\"Edit\" name=\"Edit\" (click)=\"showStorageBinEdit(companyStorageBin.id)\"><i class=\"fa fa-edit\"></i></a>\r\n                </td>\r\n              </tr>\r\n              <tr *ngIf=\"companyStorageBinList.length == 0\">\r\n                <td colspan=\"9\" class=\"text-center\">No record found</td>\r\n              </tr>\r\n              </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      </div>\r\n      <div class=\"row\" *ngIf=\"totalcompanyStorageBinList > 10\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"card-body pull-right\">\r\n            <ngb-pagination [collectionSize]=\"totalcompanyStorageBinList\" [(page)]=\"defaultPagination\" (pageChange)=\"pagination()\" size=\"sm\"></ngb-pagination>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"companyStorageBinCompShow.showAdd==true\">\r\n      <app-storage-bin-add (showStorageBinList)=\"reloadStorageBinList($event)\"></app-storage-bin-add>\r\n    </div>\r\n    <div *ngIf=\"companyStorageBinCompShow.showEdit==true\">\r\n      <app-storage-bin-edit [companyStorageBinId]=companyStorageBinId (showStorageBinList)=\"reloadStorageBinList($event)\"></app-storage-bin-edit>\r\n    </div>\r\n  </div>\r\n  \r\n"

/***/ }),

/***/ "./src/app/layout/company/storage-bin-list/storage-bin-list.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/company/storage-bin-list/storage-bin-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageBinListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company_service__ = __webpack_require__("./src/app/layout/company/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__states_states_service__ = __webpack_require__("./src/app/layout/states/states.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StorageBinListComponent = /** @class */ (function () {
    function StorageBinListComponent(companyService, statesService, router, route, toastr) {
        this.companyService = companyService;
        this.statesService = statesService;
        this.router = router;
        this.route = route;
        this.toastr = toastr;
        this.companyStorageBinList = [];
        this.search_key = '';
        this.btnClickNav = function (toNav) {
            this.router.navigateByUrl('/' + toNav);
        };
        this.showStorageBinAdd = function () {
            this.companyStorageBinCompShow = {
                showList: false,
                showAdd: true,
                showEdit: false
            };
        };
        this.showStorageBinEdit = function (id) {
            this.companyStorageBinId = id;
            this.companyStorageBinCompShow = {
                showList: false,
                showAdd: false,
                showEdit: true
            };
        };
        this.reloadStorageBinList = function () {
            this.companyStorageBinCompShow = {
                showList: true,
                showAdd: false,
                showEdit: false
            };
            this.getCompanyStorageBinList(this.route.snapshot.params['id']);
        };
        this.getCompanyStorageBinList = function (id) {
            var _this = this;
            var params = new URLSearchParams();
            params.set('page', this.defaultPagination.toString());
            params.set('search', this.search_key.toString());
            this.companyService.getCompanyStorageBinList(id, params).subscribe(function (data) {
                _this.companyStorageBinList = data['results'];
                // console.log(this.companyStorageBinList);
            });
        };
        this.pagination = function () {
            this.getCompanyStorageBinList(this.route.snapshot.params['id']);
        };
    }
    StorageBinListComponent.prototype.ngOnInit = function () {
        this.defaultPagination = 1;
        this.companyStorageBinCompShow = {
            showList: true,
            showAdd: false,
            showEdit: false
        };
        this.getCompanyStorageBinList(this.route.snapshot.params['id']);
    };
    StorageBinListComponent.prototype.dataSearch = function () {
        this.defaultPagination = 1;
        this.getCompanyStorageBinList(this.route.snapshot.params['id']);
    };
    StorageBinListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-storage-bin-list',
            template: __webpack_require__("./src/app/layout/company/storage-bin-list/storage-bin-list.component.html"),
            styles: [__webpack_require__("./src/app/layout/company/storage-bin-list/storage-bin-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_3__states_states_service__["a" /* StatesService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */]])
    ], StorageBinListComponent);
    return StorageBinListComponent;
}());



/***/ }),

/***/ "./src/app/layout/company/storage-location-add/storage-location-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div style=\"padding-top: 20px;\">\r\n        <div class=\"col-md-6 offset-md-6 pull-right\" style=\"text-align: right\">\r\n            <button type=\"button\" class=\"btn btn-secondary\">\r\n                <i class=\"fa fa-question\" aria-hidden=\"true\"></i> Help</button>\r\n            <button type=\"button\" class=\"btn btn-secondary\">\r\n                <i class=\"fa fa-refresh\"></i> Reload</button>\r\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"btnClickNav()\">\r\n                <i class=\"fa fa-arrow-left\"></i> Back</button>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n    </div>\r\n    <hr/>\r\n    <div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <form role=\"form\" [formGroup]=\"form\">\r\n                    <div class=\"card bg-light mb-3\">\r\n                        <div class=\"card-header\" style=\"background-color:#868e96; color: #fff;\">Company Storage Add</div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label>Branch</label>\r\n                                    <select class=\"form-control\" [(ngModel)]=\"companyStorage.branch\" name=\"storage_branch\" formControlName=\"branch\" [ngClass]=\"displayFieldCss('branch')\">\r\n                                        <option value=\"\">Select Branch</option>\r\n                                        <option *ngFor=\"let companyBranch of companyBranchList;\" value=\"{{companyBranch.id}}\">{{companyBranch.branch_name}}</option>\r\n                                    </select>\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('branch')\">\r\n                                        Please select branch\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label>Email</label>\r\n                                    <input type=\"email\" class=\"form-control\" [(ngModel)]=\"companyStorage.storage_email\" name=\"storage_email\" placeholder=\"Email\"\r\n                                        formControlName=\"storage_email\" [ngClass]=\"displayFieldCss('storage_email')\">\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('storage_email')\">\r\n                                        Please enter email\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label>Phone</label>\r\n                                    <input type=\"number\" class=\"form-control\" [(ngModel)]=\"companyStorage.storage_contact_no\" name=\"storage_contact_no\" placeholder=\"Phone\"\r\n                                        formControlName=\"storage_contact_no\" [ngClass]=\"displayFieldCss('storage_contact_no')\">\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('storage_contact_no')\">\r\n                                        Please enter phone\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-12\">\r\n                                    <label>Store Address</label>\r\n                                    <textarea class=\"form-control\" [(ngModel)]=\"companyStorage.storage_address\" name=\"storage_address\" rows=\"3\" placeholder=\"Store Address\"\r\n                                        formControlName=\"storage_address\" [ngClass]=\"displayFieldCss('storage_address')\">{{companyStorage.branch_address}}</textarea>\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('storage_address')\">\r\n                                        Please enter store address\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label>State</label>\r\n                                    <select class=\"form-control\" [(ngModel)]=\"companyStorage.storage_state\" name=\"storage_state\" formControlName=\"storage_state\"\r\n                                        [ngClass]=\"displayFieldCss('storage_state')\">\r\n                                        <option value=\"\">Select State</option>\r\n                                        <option *ngFor=\"let state of stateList;\" value=\"{{state.id}}\">{{state.state_name}}</option>\r\n                                    </select>\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('storage_state')\">\r\n                                        Please select state\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label>City</label>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"City Name\" [(ngModel)]=\"companyStorage.storage_city\" name=\"storage_city\"\r\n                                        formControlName=\"storage_city\" [ngClass]=\"displayFieldCss('storage_city')\">\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('storage_city')\">\r\n                                        Please enter city\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-4\">\r\n                                    <label>Pin</label>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Pin\" [(ngModel)]=\"companyStorage.storage_pincode\" name=\"storage_pincode\"\r\n                                        formControlName=\"storage_pincode\" [ngClass]=\"displayFieldCss('storage_pincode')\">\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('storage_pincode')\">\r\n                                        Please enter city\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"form-group col-md-12\" style=\"text-align: right\">\r\n                                    <button type=\"submit\" class=\"btn btn-success\" (click)=\"addNewCompanyStorage()\">Submit</button>\r\n                                    <button type=\"reset\" class=\"btn btn-secondary\" (click)=\"reSet()\">Reset</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/company/storage-location-add/storage-location-add.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/company/storage-location-add/storage-location-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageLocationAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company_service__ = __webpack_require__("./src/app/layout/company/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__states_states_service__ = __webpack_require__("./src/app/layout/states/states.service.ts");
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






var StorageLocationAddComponent = /** @class */ (function () {
    function StorageLocationAddComponent(companyService, statesService, router, route, formBuilder, toastr) {
        this.companyService = companyService;
        this.statesService = statesService;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.showStorageList = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.addNewCompanyStorage = function () {
            var _this = this;
            if (this.form.valid) {
                this.companyService.addNewCompanyStorage(this.companyStorage).subscribe(function (response) {
                    _this.toastr.success('Store added successfully', '', {
                        timeOut: 3000,
                    });
                    //this.goToList('states');
                    _this.showStorageList.emit();
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
        this.btnClickNav = function () {
            this.showStorageList.emit();
        };
        this.getStateList = function () {
            var _this = this;
            this.statesService.getStateActiveList().subscribe(function (data) {
                _this.stateList = data;
            });
        };
        this.getCompanyBranchList = function (id) {
            var _this = this;
            this.companyService.getCompanyBranchList(id).subscribe(function (data) {
                _this.companyBranchList = data['results'];
                // console.log(this.companyBranchList);
            });
        };
    }
    StorageLocationAddComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            storage_email: [null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].email]],
            storage_contact_no: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            storage_address: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            storage_state: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            storage_city: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            storage_pincode: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            branch: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]
        });
        this.companyStorage = {
            storage_email: '',
            storage_contact_no: '',
            storage_address: '',
            storage_state: '',
            storage_city: '',
            storage_pincode: '',
            company: this.route.snapshot.params['id'],
            branch: ''
        };
        this.getStateList();
        this.getCompanyBranchList(this.route.snapshot.params['id']);
    };
    StorageLocationAddComponent.prototype.reSet = function () {
        this.form.reset();
    };
    StorageLocationAddComponent.prototype.isFieldValid = function (field) {
        return !this.form.get(field).valid && this.form.get(field).touched;
    };
    StorageLocationAddComponent.prototype.displayFieldCss = function (field) {
        return {
            'is-invalid': !this.form.get(field).valid && this.form.get(field).touched,
            'is-valid': this.form.get(field).valid
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], StorageLocationAddComponent.prototype, "showStorageList", void 0);
    StorageLocationAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-storage-location-add',
            template: __webpack_require__("./src/app/layout/company/storage-location-add/storage-location-add.component.html"),
            styles: [__webpack_require__("./src/app/layout/company/storage-location-add/storage-location-add.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_3__states_states_service__["a" /* StatesService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */]])
    ], StorageLocationAddComponent);
    return StorageLocationAddComponent;
}());



/***/ }),

/***/ "./src/app/layout/company/storage-location-edit/storage-location-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div  style=\"padding-top: 20px;\">\r\n      <div class=\"col-md-6 offset-md-6 pull-right\" style=\"text-align: right\">\r\n          <button type=\"button\" class=\"btn btn-secondary\"><i class=\"fa fa-question\" aria-hidden=\"true\"></i> Help</button>\r\n          <button type=\"button\" class=\"btn btn-secondary\"><i class=\"fa fa-refresh\"></i> Reload</button>\r\n          <button type=\"button\" class=\"btn btn-success\" (click)=\"btnClickNav()\"><i class=\"fa fa-arrow-left\"></i> Back</button>\r\n      </div>\r\n      <div class=\"clearfix\"></div>\r\n    </div>\r\n    <hr/>\r\n    <div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n              <form role=\"form\" [formGroup]=\"form\">\r\n                <div class=\"card bg-light mb-3\">\r\n                    <div class=\"card-header\" style=\"background-color:#868e96; color: #fff;\">Company Storage Add</div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"row\">\r\n                            <div class=\"form-group col-md-4\">\r\n                                <label>Branch</label>\r\n                                <select class=\"form-control\"  [(ngModel)]=\"companyStorage.branch\" name=\"storage_branch\" formControlName=\"branch\" [ngClass]=\"displayFieldCss('branch')\">\r\n                                    <option value=\"\">Select Branch</option>\r\n                                    <option *ngFor=\"let companyBranch of companyBranchList;\" value=\"{{companyBranch.id}}\">{{companyBranch.branch_name}}</option>\r\n                                </select>\r\n                                <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('branch')\">\r\n                                    Please select branch\r\n                                </div>\r\n                            </div>\r\n                            \r\n                            <div class=\"form-group col-md-4\">\r\n                                <label>Email</label>\r\n                                <input type=\"email\" class=\"form-control\" [(ngModel)]=\"companyStorage.storage_email\" name=\"storage_email\" placeholder=\"Email\" formControlName=\"storage_email\" [ngClass]=\"displayFieldCss('storage_email')\">\r\n                                <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('storage_email')\">\r\n                                    Please enter email\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group col-md-4\">\r\n                              <label>Phone</label>\r\n                              <input type=\"number\" class=\"form-control\" [(ngModel)]=\"companyStorage.storage_contact_no\" name=\"storage_contact_no\" placeholder=\"Phone\" formControlName=\"storage_contact_no\" [ngClass]=\"displayFieldCss('storage_contact_no')\">\r\n                              <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('storage_contact_no')\">\r\n                                Please enter phone\r\n                            </div>\r\n                            </div>\r\n                            <div class=\"form-group col-md-12\">\r\n                                <label>Store Address</label>\r\n                                <textarea class=\"form-control\" [(ngModel)]=\"companyStorage.storage_address\" name=\"storage_address\" rows=\"3\" placeholder=\"Store Address\" formControlName=\"storage_address\" [ngClass]=\"displayFieldCss('storage_address')\">{{companyStorage.branch_address}}</textarea>\r\n                                <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('storage_address')\">\r\n                                    Please enter store address\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group col-md-4\">\r\n                                <label>State</label>\r\n                                <select class=\"form-control\"  [(ngModel)]=\"companyStorage.storage_state\" name=\"storage_state\" formControlName=\"storage_state\"\r\n                                [ngClass]=\"displayFieldCss('storage_state')\">\r\n                                    <option value=\"0\">Select State</option>\r\n                                    <option *ngFor=\"let state of stateList;\" value=\"{{state.id}}\">{{state.state_name}}</option>\r\n                                </select>\r\n                                <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('storage_state')\">\r\n                                    Please select state\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group col-md-4\">\r\n                                <label>City</label>\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"City Name\" [(ngModel)]=\"companyStorage.storage_city\" name=\"storage_city\" formControlName=\"storage_city\" [ngClass]=\"displayFieldCss('storage_city')\">\r\n                                <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('storage_city')\">\r\n                                    Please enter city\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group col-md-4\">\r\n                                <label>Pin</label>\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Pin\" [(ngModel)]=\"companyStorage.storage_pincode\" name=\"storage_pincode\" formControlName=\"storage_pincode\" [ngClass]=\"displayFieldCss('storage_pincode')\">\r\n                                <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('storage_pincode')\">\r\n                                    Please enter city\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group col-md-12\" style=\"text-align: right\">\r\n                                <button type=\"submit\" class=\"btn btn-success\" (click)=\"updateCompanyStorage()\">Submit</button>\r\n                                <button type=\"reset\" class=\"btn btn-secondary\" (click)=\"reSet()\">Reset</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n              </form>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/layout/company/storage-location-edit/storage-location-edit.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/company/storage-location-edit/storage-location-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageLocationEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company_service__ = __webpack_require__("./src/app/layout/company/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__states_states_service__ = __webpack_require__("./src/app/layout/states/states.service.ts");
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






var StorageLocationEditComponent = /** @class */ (function () {
    function StorageLocationEditComponent(companyService, statesService, router, route, formBuilder, toastr) {
        this.companyService = companyService;
        this.statesService = statesService;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.showStorageList = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.getCompanyStorageDetails = function (id) {
            var _this = this;
            this.companyService.getCompanyStorageDetails(id).subscribe(function (data) {
                _this.companyStorage = data;
                // console.log(this.companyStorage);
            });
        };
        this.updateCompanyStorage = function () {
            var _this = this;
            if (this.form.valid) {
                this.companyService.updateCompanyStorage(this.companyStorage).subscribe(function (response) {
                    _this.toastr.success('Store updated successfully', '', {
                        timeOut: 3000,
                    });
                    //this.goToList('states');
                    _this.showStorageList.emit();
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
        this.btnClickNav = function () {
            this.showStorageList.emit();
        };
        this.getStateList = function () {
            var _this = this;
            this.statesService.getStateActiveList().subscribe(function (data) {
                _this.stateList = data;
                // console.log(this.stateList)
            });
        };
        this.getCompanyBranchList = function (id) {
            var _this = this;
            this.companyService.getCompanyBranchList(id).subscribe(function (data) {
                _this.companyBranchList = data['results'];
                // console.log(this.companyBranchList);
            });
        };
    }
    StorageLocationEditComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            storage_email: [null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].email]],
            storage_contact_no: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            storage_address: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            storage_state: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            storage_city: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            storage_pincode: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required],
            branch: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required]
        });
        // console.log(this.companyStorageId);
        this.companyStorage = {
            id: '',
            storage_email: '',
            storage_contact_no: '',
            storage_address: '',
            storage_state: '',
            storage_city: '',
            storage_pincode: '',
            company: this.route.snapshot.params['id'],
            branch: ''
        };
        this.getCompanyStorageDetails(this.companyStorageId);
        this.getStateList();
        this.getCompanyBranchList(this.route.snapshot.params['id']);
    };
    StorageLocationEditComponent.prototype.reSet = function () {
        this.form.reset();
    };
    StorageLocationEditComponent.prototype.isFieldValid = function (field) {
        return !this.form.get(field).valid && this.form.get(field).touched;
    };
    StorageLocationEditComponent.prototype.displayFieldCss = function (field) {
        return {
            'is-invalid': !this.form.get(field).valid && this.form.get(field).touched,
            'is-valid': this.form.get(field).valid
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], StorageLocationEditComponent.prototype, "companyStorageId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], StorageLocationEditComponent.prototype, "showStorageList", void 0);
    StorageLocationEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-storage-location-edit',
            template: __webpack_require__("./src/app/layout/company/storage-location-edit/storage-location-edit.component.html"),
            styles: [__webpack_require__("./src/app/layout/company/storage-location-edit/storage-location-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_3__states_states_service__["a" /* StatesService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */]])
    ], StorageLocationEditComponent);
    return StorageLocationEditComponent;
}());



/***/ }),

/***/ "./src/app/layout/company/storage-location-list/storage-location-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div *ngIf=\"companyStorageCompShow.showList==true\">\r\n    <div style=\"padding-top: 20px;\">\r\n      <div class=\"col-md-6 offset-md-6 pull-right\" style=\"text-align: right\">\r\n        <button type=\"button\" class=\"btn btn-secondary\">\r\n          <i class=\"fa fa-question\" aria-hidden=\"true\"></i> Help</button>\r\n        <button type=\"button\" class=\"btn btn-secondary\">\r\n          <i class=\"fa fa-refresh\"></i> Reload</button>\r\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"showStorageAdd()\">\r\n          <i class=\"fa fa-plus\"></i> New Storage Location</button>\r\n      </div>\r\n      <div class=\"clearfix\"></div>\r\n    </div>\r\n\r\n    <hr/>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-9\">\r\n                <h5>Storage</h5>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <form role=\"form\" (ngSubmit)=\"dataSearch()\">\r\n                  <div class=\"input-group\">\r\n                    <input type=\"text\" class=\"form-control\" name=\"search\" placeholder=\"Search\" [(ngModel)]=\"search_key\">\r\n                    <div class=\"input-group-append\">\r\n                      <button class=\"btn btn-secondary\" type=\"submit\">\r\n                        <i class=\"fa fa-search\"></i>\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <table class=\"card-body table table-hover table-sm table-bordered\">\r\n            <thead>\r\n              <tr>\r\n                <th>Sl.No.</th>\r\n                <th>Storage Location</th>\r\n                <th>Contact</th>\r\n                <th>Email</th>\r\n                <th>Action</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let companyStorage of companyStorageList ; let i = index\">\r\n                <th scope=\"row\">{{i +1}}</th>\r\n                <td>{{companyStorage.storage_address}}</td>\r\n                <td>{{companyStorage.storage_contact_no}}</td>\r\n                <td>{{companyStorage.storage_email}}</td>\r\n                <td>\r\n                  <a href=\"javascript:void(0);\" title=\"Edit\" name=\"Edit\" (click)=\"showStorageEdit(companyStorage.id)\">\r\n                    <i class=\"fa fa-edit\"></i>\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n              <tr *ngIf=\"companyStorageList.length == 0\">\r\n                <td colspan=\"9\" class=\"text-center\">No record found</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"totalcompanyStorageList > 10\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"card-body pull-right\">\r\n          <ngb-pagination [collectionSize]=\"totalcompanyStorageList\" [(page)]=\"defaultPagination\" (pageChange)=\"pagination()\" size=\"sm\"></ngb-pagination>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"companyStorageCompShow.showAdd==true\">\r\n    <app-storage-location-add (showStorageList)=\"reloadStorageList($event)\"></app-storage-location-add>\r\n  </div>\r\n  <div *ngIf=\"companyStorageCompShow.showEdit==true\">\r\n    <app-storage-location-edit [companyStorageId]=companyStorageId (showStorageList)=\"reloadStorageList($event)\"></app-storage-location-edit>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/company/storage-location-list/storage-location-list.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/company/storage-location-list/storage-location-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageLocationListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company_service__ = __webpack_require__("./src/app/layout/company/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__states_states_service__ = __webpack_require__("./src/app/layout/states/states.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StorageLocationListComponent = /** @class */ (function () {
    function StorageLocationListComponent(companyService, statesService, router, route, toastr) {
        this.companyService = companyService;
        this.statesService = statesService;
        this.router = router;
        this.route = route;
        this.toastr = toastr;
        this.companyStorageList = [];
        this.search_key = '';
        this.btnClickNav = function (toNav) {
            this.router.navigateByUrl('/' + toNav);
        };
        this.showStorageAdd = function () {
            this.companyStorageCompShow = {
                showList: false,
                showAdd: true,
                showEdit: false
            };
        };
        this.showStorageEdit = function (id) {
            this.companyStorageId = id;
            this.companyStorageCompShow = {
                showList: false,
                showAdd: false,
                showEdit: true
            };
        };
        this.reloadStorageList = function () {
            this.companyStorageCompShow = {
                showList: true,
                showAdd: false,
                showEdit: false
            };
            this.getCompanyStorageList(this.route.snapshot.params['id']);
        };
        this.getCompanyStorageList = function (id) {
            var _this = this;
            var params = new URLSearchParams();
            params.set('page', this.defaultPagination.toString());
            params.set('search', this.search_key.toString());
            this.companyService.getCompanyStorageList(id, params).subscribe(function (data) {
                _this.totalcompanyStorageList = data['count'];
                _this.companyStorageList = data['results'];
                // console.log(this.companyStorageList);
            });
        };
        this.pagination = function () {
            this.getCompanyStorageList(this.route.snapshot.params['id']);
        };
    }
    StorageLocationListComponent.prototype.ngOnInit = function () {
        this.defaultPagination = 1;
        this.companyStorageCompShow = {
            showList: true,
            showAdd: false,
            showEdit: false
        };
        this.getCompanyStorageList(this.route.snapshot.params['id']);
    };
    StorageLocationListComponent.prototype.dataSearch = function () {
        this.defaultPagination = 1;
        this.getCompanyStorageList(this.route.snapshot.params['id']);
    };
    StorageLocationListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-storage-location-list',
            template: __webpack_require__("./src/app/layout/company/storage-location-list/storage-location-list.component.html"),
            styles: [__webpack_require__("./src/app/layout/company/storage-location-list/storage-location-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_3__states_states_service__["a" /* StatesService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */]])
    ], StorageLocationListComponent);
    return StorageLocationListComponent;
}());



/***/ })

});
//# sourceMappingURL=company.module.chunk.js.map