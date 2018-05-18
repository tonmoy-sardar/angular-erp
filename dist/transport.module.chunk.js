webpackJsonp(["transport.module"],{

/***/ "./src/app/layout/transport/transport-add/transport-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <!-- <app-page-header [heading]=\"'Transport Add'\" [icon]=\"'fa fa-university'\"></app-page-header> -->\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <h4 class=\"page-header\">Transport Add</h4>\r\n    </div>\r\n    <div class=\"col-md-6 pull-right\" style=\"text-align: right\">\r\n      <button type=\"button\" class=\"btn btn-secondary\">\r\n        <i class=\"fa fa-question\" aria-hidden=\"true\"></i> Help</button>\r\n      <button type=\"button\" class=\"btn btn-secondary\">\r\n        <i class=\"fa fa-refresh\"></i> Reload</button>\r\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"btnClickNav('transport')\">\r\n        <i class=\"fa fa-arrow-left\"></i> Back</button>\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n  </div>\r\n  <hr/>\r\n  <div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <form role=\"form\" [formGroup]=\"form\" novalidate>\r\n          <div class=\"card bg-light mb-3\">\r\n            <div class=\"card-header\" style=\"background-color:#868e96; color: #fff;\">Transport Add</div>\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"form-group col-md-2\">\r\n                  <label>Transporter Name</label>\r\n                  <input class=\"form-control\" name=\"transporter_name\" placeholder=\"Transporter Name\" formControlName=\"transporter_name\" [ngClass]=\"displayFieldCss('transporter_name')\">\r\n                  <div class=\"invalid-feedback\" *ngIf=\"form.controls['transporter_name'].hasError('required')\">\r\n                      Please enter transporter name\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group col-md-2\">\r\n                  <label>Email</label>\r\n                  <input class=\"form-control\" name=\"email\" placeholder=\"Email\" formControlName=\"email\" [ngClass]=\"displayFieldCss('email')\">\r\n                  <div class=\"invalid-feedback\" *ngIf=\"form.controls['email'].hasError('pattern') && !form.controls['email'].hasError('required')\">\r\n                      Please enter a valid email address\r\n                  </div>\r\n                  <div class=\"invalid-feedback\" *ngIf=\"form.controls['email'].hasError('required')\">\r\n                      Email is required\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group col-md-2\">\r\n                  <label>Contact No</label>\r\n                  <input class=\"form-control\" name=\"phone\" placeholder=\"Contact No\" formControlName=\"phone\" [ngClass]=\"displayFieldCss('phone')\">\r\n                  <div class=\"invalid-feedback\" *ngIf=\"form.controls['phone'].hasError('minlength') && !form.controls['phone'].hasError('required')\">\r\n                      Please enter at least 10 digit\r\n                  </div>\r\n                  <div class=\"invalid-feedback\" *ngIf=\"form.controls['phone'].hasError('maxlength') && !form.controls['phone'].hasError('required')\">\r\n                      Phone number should be less then 13 digit\r\n                  </div>\r\n                  <div class=\"invalid-feedback\" *ngIf=\"form.controls['phone'].hasError('required')\">\r\n                      Please enter phone\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group col-md-2\">\r\n                  <label>Company</label>\r\n                  <select class=\"form-control\" name=\"company\" formControlName=\"company\" [ngClass]=\"displayFieldCss('company')\">\r\n                    <option value=\"\">Select company</option>\r\n                    <option value=\"{{country.id}}\" *ngFor=\"let country of companyList\">{{country.company_name}}</option>\r\n                  </select>\r\n                  <div class=\"invalid-feedback\" *ngIf=\"form.controls['company'].hasError('required')\">\r\n                    Please select company\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group col-md-2\">\r\n                  <label>Storage</label>\r\n                  <select class=\"form-control\" name=\"storage\" formControlName=\"storage\" [ngClass]=\"displayFieldCss('storage')\">\r\n                    <option value=\"\">Select storage</option>\r\n                    <option value=\"{{store.id}}\" *ngFor=\"let store of storageList\">{{store.storage_address}}</option>\r\n                  </select>\r\n                  <div class=\"invalid-feedback\" *ngIf=\"form.controls['storage'].hasError('required')\">\r\n                      Please select storage\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group col-md-2\">\r\n                  <label>State</label>\r\n                  <select class=\"form-control\" name=\"state\" formControlName=\"state\" [ngClass]=\"displayFieldCss('state')\">\r\n                    <option value=\"\">Select State</option>\r\n                    <option value=\"{{state.id}}\" *ngFor=\"let state of stateList\">{{state.state_name}}</option>\r\n                  </select>\r\n                  <div class=\"invalid-feedback\" *ngIf=\"form.controls['state'].hasError('required')\">\r\n                      Please select state\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group col-md-2\">\r\n                  <label>City</label>\r\n                  <input class=\"form-control\" name=\"city\" placeholder=\"City\" formControlName=\"city\" [ngClass]=\"displayFieldCss('city')\">\r\n                  <div class=\"invalid-feedback\" *ngIf=\"form.controls['city'].hasError('required')\">\r\n                      Please enter city\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group col-md-2\">\r\n                  <label>Pincode</label>\r\n                  <input class=\"form-control\" name=\"pin\" placeholder=\"Pincode\" formControlName=\"pin\" [ngClass]=\"displayFieldCss('pin')\">\r\n                  <div class=\"invalid-feedback\" *ngIf=\"form.controls['pin'].hasError('required')\">\r\n                      Please enter pincode\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group col-md-2\">\r\n                  <label>PAN</label>\r\n                  <input class=\"form-control\" name=\"pan\" placeholder=\"PAN\" formControlName=\"pan\" [ngClass]=\"displayFieldCss('pan')\">\r\n                  <div class=\"invalid-feedback\" *ngIf=\"form.controls['pan'].hasError('required')\">\r\n                      Please enter PAN\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group col-md-2\">\r\n                  <label>GSTIN</label>\r\n                  <input type=\"number\" class=\"form-control\" name=\"gstin\" placeholder=\"GSTIN\" formControlName=\"gstin\" [ngClass]=\"displayFieldCss('gstin')\">\r\n                  <div class=\"invalid-feedback\" *ngIf=\"form.controls['gstin'].hasError('required')\">\r\n                      Please enter GSTIN\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group col-md-2\">\r\n                  <label>Amount Credit</label>\r\n                  <input type=\"number\" class=\"form-control\"  name=\"amount_credit\" placeholder=\"Amount Credit\" formControlName=\"amount_credit\" [ngClass]=\"displayFieldCss('amount_credit')\">\r\n                  <div class=\"invalid-feedback\" *ngIf=\"form.controls['amount_credit'].hasError('required')\">\r\n                      Please enter amount credit\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group col-md-2\">\r\n                  <label>Amount Debit</label>\r\n                  <input type=\"number\" class=\"form-control\" name=\"amount_debit\" placeholder=\"Amount Debit\" formControlName=\"amount_debit\" [ngClass]=\"displayFieldCss('amount_debit')\">\r\n                  <div class=\"invalid-feedback\" *ngIf=\"form.controls['amount_debit'].hasError('required')\">\r\n                      Please enter amount debit\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group col-md-12\" style=\"text-align: right\">\r\n                  <button type=\"submit\" class=\"btn btn-success\" (click)=\"addNewTransport()\">Submit</button>\r\n                  <button type=\"reset\" class=\"btn btn-secondary\" (click)=\"reSet()\">Reset</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/transport/transport-add/transport-add.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/transport/transport-add/transport-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransportAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__states_states_service__ = __webpack_require__("./src/app/layout/states/states.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__company_company_service__ = __webpack_require__("./src/app/layout/company/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transport_service__ = __webpack_require__("./src/app/layout/transport/transport.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TransportAddComponent = /** @class */ (function () {
    function TransportAddComponent(router, toastr, transportService, companyService, statesService) {
        this.router = router;
        this.toastr = toastr;
        this.transportService = transportService;
        this.companyService = companyService;
        this.statesService = statesService;
        this.companyList = [];
        this.storageList = [];
        this.stateList = [];
        this.btnClickNav = function (toNav) {
            this.router.navigateByUrl('/' + toNav);
        };
    }
    TransportAddComponent.prototype.ngOnInit = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormGroup */]({
            transporter_name: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
            ]),
            phone: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].minLength(10),
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].maxLength(12)
            ]),
            company: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required),
            storage: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required),
            state: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required),
            city: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required),
            pan: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required),
            pin: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required),
            gstin: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required),
            amount_credit: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required),
            amount_debit: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required)
        });
        this.getCompanyList();
        this.getStorageList();
        this.getStateList();
    };
    TransportAddComponent.prototype.goToList = function (toNav) {
        this.router.navigateByUrl('/' + toNav);
    };
    ;
    TransportAddComponent.prototype.getStateList = function () {
        var _this = this;
        this.statesService.getStateActiveList().subscribe(function (res) {
            _this.stateList = res;
            // console.log(this.stateList);
        });
    };
    ;
    TransportAddComponent.prototype.getStorageList = function () {
        var _this = this;
        this.companyService.getStorageList().subscribe(function (res) {
            _this.storageList = res.results;
            // console.log(this.storageList)
        });
    };
    TransportAddComponent.prototype.getCompanyList = function () {
        var _this = this;
        this.companyService.getCompanyDropdownList().subscribe(function (data) {
            _this.companyList = data;
            // console.log(this.companyList);
        });
    };
    ;
    TransportAddComponent.prototype.addNewTransport = function () {
        var _this = this;
        if (this.form.valid) {
            this.transportService.addNewTransporter(this.form.value).subscribe(function (response) {
                // console.log(response)
                _this.toastr.success('Transporter added successfully', '', {
                    timeOut: 3000,
                });
                _this.goToList('transport');
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
    TransportAddComponent.prototype.reSet = function () {
        this.form.reset();
    };
    TransportAddComponent.prototype.displayFieldCss = function (field) {
        return {
            'is-invalid': this.form.controls[field].invalid && (this.form.controls[field].dirty || this.form.controls[field].touched),
            'is-valid': this.form.controls[field].valid && (this.form.controls[field].dirty || this.form.controls[field].touched)
        };
    };
    TransportAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-transport-add',
            template: __webpack_require__("./src/app/layout/transport/transport-add/transport-add.component.html"),
            styles: [__webpack_require__("./src/app/layout/transport/transport-add/transport-add.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_4__transport_service__["a" /* TransportService */],
            __WEBPACK_IMPORTED_MODULE_3__company_company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_2__states_states_service__["a" /* StatesService */]])
    ], TransportAddComponent);
    return TransportAddComponent;
}());



/***/ }),

/***/ "./src/app/layout/transport/transport-edit/transport-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <!-- <app-page-header [heading]=\"'Transport Edit'\" [icon]=\"'fa fa-university'\"></app-page-header> -->\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <h4 class=\"page-header\">Transport Edit</h4>\r\n    </div>\r\n    <div class=\"col-md-6 pull-right\" style=\"text-align: right\">\r\n      <button type=\"button\" class=\"btn btn-secondary\">\r\n        <i class=\"fa fa-question\" aria-hidden=\"true\"></i> Help</button>\r\n      <button type=\"button\" class=\"btn btn-secondary\">\r\n        <i class=\"fa fa-refresh\"></i> Reload</button>\r\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"btnClickNav('transport')\">\r\n        <i class=\"fa fa-arrow-left\"></i> Back</button>\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n  </div>\r\n  <hr/>\r\n  <div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <form role=\"form\" [formGroup]=\"form\" novalidate>\r\n          <div class=\"card bg-light mb-3\">\r\n            <div class=\"card-header\" style=\"background-color:#868e96; color: #fff;\">Transport Edit</div>\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"form-group col-md-2\">\r\n                  <label>Transporter Name</label>\r\n                  <input class=\"form-control\" [(ngModel)]=\"transport.transporter_name\" name=\"transporter_name\" placeholder=\"Transporter Name\" formControlName=\"transporter_name\" [ngClass]=\"displayFieldCss('transporter_name')\"\r\n                  >\r\n                  <div class=\"invalid-feedback\" *ngIf=\"form.controls['transporter_name'].hasError('required')\">\r\n                      Please enter transporter name\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group col-md-2\">\r\n                  <label>Email</label>\r\n                  <input class=\"form-control\" [(ngModel)]=\"transport.email\" name=\"email\" placeholder=\"Email\" formControlName=\"email\" [ngClass]=\"displayFieldCss('email')\">\r\n                  <div class=\"invalid-feedback\" *ngIf=\"form.controls['email'].hasError('pattern') && !form.controls['email'].hasError('required')\">\r\n                      Please enter a valid email address\r\n                  </div>\r\n                  <div class=\"invalid-feedback\" *ngIf=\"form.controls['email'].hasError('required')\">\r\n                      Email is required\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group col-md-2\">\r\n                  <label>Contact No</label>\r\n                  <input class=\"form-control\" [(ngModel)]=\"transport.phone\" name=\"phone\" placeholder=\"Contact No\" formControlName=\"phone\" [ngClass]=\"displayFieldCss('phone')\">\r\n                  <div class=\"invalid-feedback\" *ngIf=\"form.controls['phone'].hasError('minlength') && !form.controls['phone'].hasError('required')\">\r\n                      Please enter at least 10 digit\r\n                  </div>\r\n                  <div class=\"invalid-feedback\" *ngIf=\"form.controls['phone'].hasError('maxlength') && !form.controls['phone'].hasError('required')\">\r\n                      Phone number should be less then 13 digit\r\n                  </div>\r\n                  <div class=\"invalid-feedback\" *ngIf=\"form.controls['phone'].hasError('required')\">\r\n                      Please enter phone\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"form-group col-md-2\">\r\n                    <label>Company</label>\r\n                    <select class=\"form-control\" name=\"company\" [(ngModel)]=\"transport.company\" formControlName=\"company\" [ngClass]=\"displayFieldCss('company')\" >\r\n                      <option value=\"\">Select company</option>\r\n                      <option value=\"{{country.id}}\" *ngFor=\"let country of companyList\">{{country.company_name}}</option>\r\n                    </select>\r\n                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['company'].hasError('required')\">\r\n                      Please select company\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group col-md-2\">\r\n                    <label>Storage</label>\r\n                    <select class=\"form-control\" name=\"storage\" [(ngModel)]=\"transport.storage\" formControlName=\"storage\" [ngClass]=\"displayFieldCss('storage')\">\r\n                      <option value=\"\">Select storage</option>\r\n                      <option value=\"{{store.id}}\" *ngFor=\"let store of storageList\">{{store.storage_address}}</option>\r\n                    </select>\r\n                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['storage'].hasError('required')\">\r\n                        Please select storage\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"form-group col-md-2\">\r\n                    <label>State</label>\r\n                    <select class=\"form-control\" name=\"state\" [(ngModel)]=\"transport.state\" formControlName=\"state\" [ngClass]=\"displayFieldCss('state')\">\r\n                      <option value=\"\">Select State</option>\r\n                      <option value=\"{{state.id}}\" *ngFor=\"let state of stateList\">{{state.state_name}}</option>\r\n                    </select>\r\n                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['state'].hasError('required')\">\r\n                        Please select state\r\n                      </div>\r\n                  </div>\r\n                <div class=\"form-group col-md-2\">\r\n                  <label>City</label>\r\n                  <input class=\"form-control\" [(ngModel)]=\"transport.city\" name=\"city\" placeholder=\"City\" formControlName=\"city\" [ngClass]=\"displayFieldCss('city')\">\r\n                  <div class=\"invalid-feedback\" *ngIf=\"form.controls['city'].hasError('required')\">\r\n                      Please enter city\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group col-md-2\">\r\n                  <label>Pincode</label>\r\n                  <input class=\"form-control\" [(ngModel)]=\"transport.pin\" name=\"pin\" placeholder=\"Pincode\" formControlName=\"pin\" [ngClass]=\"displayFieldCss('pin')\">\r\n                  <div class=\"invalid-feedback\" *ngIf=\"form.controls['pin'].hasError('required')\">\r\n                      Please enter pincode\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group col-md-2\">\r\n                  <label>PAN</label>\r\n                  <input class=\"form-control\" [(ngModel)]=\"transport.pan\" name=\"pan\" placeholder=\"PAN\" formControlName=\"pan\" [ngClass]=\"displayFieldCss('pan')\">\r\n                  <div class=\"invalid-feedback\" *ngIf=\"form.controls['pan'].hasError('required')\">\r\n                      Please enter PAN\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group col-md-2\">\r\n                  <label>GSTIN</label>\r\n                  <input class=\"form-control\" [(ngModel)]=\"transport.gstin\" name=\"gstin\" placeholder=\"GSTIN\" formControlName=\"gstin\" [ngClass]=\"displayFieldCss('gstin')\">\r\n                  <div class=\"invalid-feedback\" *ngIf=\"form.controls['gstin'].hasError('required')\">\r\n                      Please enter GSTIN\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group col-md-2\">\r\n                  <label>Amount Credit</label>\r\n                  <input class=\"form-control\" [(ngModel)]=\"transport.amount_credit\" name=\"amount_credit\" placeholder=\"Amount Credit\" formControlName=\"amount_credit\" [ngClass]=\"displayFieldCss('amount_credit')\">\r\n                  <div class=\"invalid-feedback\" *ngIf=\"form.controls['amount_credit'].hasError('required')\">\r\n                      Please enter amount credit\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group col-md-2\">\r\n                  <label>Amount Debit</label>\r\n                  <input class=\"form-control\" [(ngModel)]=\"transport.amount_debit\" name=\"amount_debit\" placeholder=\"Amount Debit\" formControlName=\"amount_debit\" [ngClass]=\"displayFieldCss('amount_debit')\">\r\n                  <div class=\"invalid-feedback\" *ngIf=\"form.controls['amount_debit'].hasError('required')\">\r\n                      Please enter amount debit\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group col-md-12\" style=\"text-align: right\">\r\n                  <button type=\"submit\" class=\"btn btn-success\" (click)=\"updateTransport()\">Submit</button>\r\n                  <button type=\"reset\" class=\"btn btn-secondary\" (click)=\"reSet()\">Reset</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/transport/transport-edit/transport-edit.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/transport/transport-edit/transport-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransportEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__states_states_service__ = __webpack_require__("./src/app/layout/states/states.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__company_company_service__ = __webpack_require__("./src/app/layout/company/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transport_service__ = __webpack_require__("./src/app/layout/transport/transport.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TransportEditComponent = /** @class */ (function () {
    function TransportEditComponent(router, route, toastr, transportService, companyService, statesService) {
        this.router = router;
        this.route = route;
        this.toastr = toastr;
        this.transportService = transportService;
        this.companyService = companyService;
        this.statesService = statesService;
        this.companyList = [];
        this.storageList = [];
        this.stateList = [];
        this.btnClickNav = function (toNav) {
            this.router.navigateByUrl('/' + toNav);
        };
    }
    TransportEditComponent.prototype.ngOnInit = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormGroup */]({
            transporter_name: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
            ]),
            phone: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].minLength(10),
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].maxLength(12)
            ]),
            company: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required),
            storage: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required),
            state: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required),
            city: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required),
            pan: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required),
            pin: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required),
            gstin: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required),
            amount_credit: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required),
            amount_debit: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required)
        });
        this.getCompanyList();
        this.getStorageList();
        this.getStateList();
        this.getTransport(this.route.snapshot.params['id']);
        this.transport = {
            transporter_name: '',
            email: '',
            phone: '',
            company: '',
            storage: '',
            city: '',
            pan: '',
            pin: '',
            gstin: '',
            amount_credit: '',
            amount_debit: ''
        };
    };
    TransportEditComponent.prototype.goToList = function (toNav) {
        this.router.navigateByUrl('/' + toNav);
    };
    ;
    TransportEditComponent.prototype.getStateList = function () {
        var _this = this;
        this.statesService.getStateActiveList().subscribe(function (res) {
            _this.stateList = res;
            // console.log(this.stateList);
        });
    };
    ;
    TransportEditComponent.prototype.getStorageList = function () {
        var _this = this;
        this.companyService.getStorageList().subscribe(function (res) {
            _this.storageList = res.results;
            // console.log(this.storageList)
        });
    };
    TransportEditComponent.prototype.getCompanyList = function () {
        var _this = this;
        this.companyService.getCompanyDropdownList().subscribe(function (data) {
            _this.companyList = data;
            // console.log(this.companyList);
        });
    };
    ;
    TransportEditComponent.prototype.getTransport = function (id) {
        var _this = this;
        this.transportService.getTransporterDetails(id).subscribe(function (res) {
            _this.transport = res;
        });
    };
    TransportEditComponent.prototype.updateTransport = function () {
        var _this = this;
        if (this.form.valid) {
            this.transportService.updateTransporter(this.transport).subscribe(function (response) {
                // console.log(response)
                _this.toastr.success('Transporter updated successfully', '', {
                    timeOut: 3000,
                });
                _this.goToList('transport');
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
    TransportEditComponent.prototype.reSet = function () {
        this.form.reset();
    };
    TransportEditComponent.prototype.displayFieldCss = function (field) {
        return {
            'is-invalid': this.form.controls[field].invalid && (this.form.controls[field].dirty || this.form.controls[field].touched),
            'is-valid': this.form.controls[field].valid && (this.form.controls[field].dirty || this.form.controls[field].touched)
        };
    };
    TransportEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-transport-edit',
            template: __webpack_require__("./src/app/layout/transport/transport-edit/transport-edit.component.html"),
            styles: [__webpack_require__("./src/app/layout/transport/transport-edit/transport-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_4__transport_service__["a" /* TransportService */],
            __WEBPACK_IMPORTED_MODULE_3__company_company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_2__states_states_service__["a" /* StatesService */]])
    ], TransportEditComponent);
    return TransportEditComponent;
}());



/***/ }),

/***/ "./src/app/layout/transport/transport-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransportRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transport_component__ = __webpack_require__("./src/app/layout/transport/transport.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transport_add_transport_add_component__ = __webpack_require__("./src/app/layout/transport/transport-add/transport-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transport_edit_transport_edit_component__ = __webpack_require__("./src/app/layout/transport/transport-edit/transport-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__transport_component__["a" /* TransportComponent */]
    },
    {
        path: 'add',
        component: __WEBPACK_IMPORTED_MODULE_3__transport_add_transport_add_component__["a" /* TransportAddComponent */]
    },
    {
        path: 'edit/:id',
        component: __WEBPACK_IMPORTED_MODULE_4__transport_edit_transport_edit_component__["a" /* TransportEditComponent */]
    }
];
var TransportRoutingModule = /** @class */ (function () {
    function TransportRoutingModule() {
    }
    TransportRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], TransportRoutingModule);
    return TransportRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/transport/transport.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <!-- <app-page-header [heading]=\"'Transport List'\" [icon]=\"'fa fa-university'\"></app-page-header> -->\r\n  <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n          <h4 class=\"page-header\">Transport List</h4>\r\n        </div>\r\n    <div class=\"col-md-6 pull-right\" style=\"text-align: right\">\r\n        <button type=\"button\" class=\"btn btn-secondary\"><i class=\"fa fa-question\" aria-hidden=\"true\"></i> Help</button>\r\n        <button type=\"button\" class=\"btn btn-secondary\"><i class=\"fa fa-refresh\"></i> Reload</button>\r\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"btnClickNav('transport/add')\"><i class=\"fa fa-plus\"></i> New Transport</button>\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n  </div>\r\n    \r\n  <hr/>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n          <div class=\"row\">\r\n              <div class=\"col-md-9\">\r\n                <h5>Transport</h5>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <form role=\"form\" (ngSubmit)=\"dataSearch()\">\r\n                  <div class=\"input-group\">\r\n                    <input type=\"text\" class=\"form-control\" name=\"search\" placeholder=\"Search\" [(ngModel)]=\"search_key\">\r\n                    <div class=\"input-group-append\">\r\n                      <button class=\"btn btn-secondary\" type=\"submit\">\r\n                        <i class=\"fa fa-search\"></i>\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n      </div>\r\n      <table class=\"card-body table table-hover table-sm table-bordered\">\r\n          <thead>\r\n          <tr>\r\n              <th>Sl.No.</th>\r\n              <th>Transport</th>\r\n              <th>Created Date</th>\r\n              <th>Status</th>\r\n              <th>Action</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr *ngFor=\"let transport of transportList ; let i = index\">\r\n            <th scope=\"row\">{{i +1}}</th>\r\n            <td>{{transport.transporter_name}}</td>\r\n            <td>{{transport.created_at | date:'dd-MM-yyyy'}}</td>\r\n            <td><a href=\"javascript:void(0);\" title=\"Active\" name=\"Active\" (click)=\"inactiveState(transport.id)\" *ngIf=\"transport.status==true\">\r\n                <i class=\"fa fa-thumbs-up\"></i> Active</a>\r\n              <a href=\"javascript:void(0);\" title=\"Inactive\" name=\"Inactive\" (click)=\"activeState(transport.id)\" *ngIf=\"transport.status==false\">\r\n                <i class=\"fa fa-thumbs-down\"></i> Inactive</a>\r\n              </td>\r\n            <td>\r\n              <a href=\"javascript:void(0);\" title=\"Edit\" name=\"Edit\" [routerLink]=\"['/transport/edit', transport.id]\">\r\n                <i class=\"fa fa-edit\"></i>\r\n              </a>&nbsp;&nbsp;&nbsp;\r\n              <a href=\"javascript:void(0);\" title=\"Map\" name=\"Map\" (click)=\"deletetransport(transport.id)\">\r\n                <i class=\"fa fa-trash-o\"></i>\r\n              </a>\r\n            </td>\r\n          </tr>\r\n          <tr *ngIf=\"transportList.length == 0\">\r\n              <td colspan=\"5\" class=\"text-center\">No record found</td>\r\n            </tr>\r\n          </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"totaltransportList > 10\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"card-body pull-right\">\r\n          <ngb-pagination [collectionSize]=\"totaltransportList\" [(page)]=\"defaultPagination\" (pageChange)=\"pagination()\" size=\"sm\"></ngb-pagination>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/transport/transport.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/transport/transport.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transport_service__ = __webpack_require__("./src/app/layout/transport/transport.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TransportComponent = /** @class */ (function () {
    function TransportComponent(router, toastr, transportService) {
        this.router = router;
        this.toastr = toastr;
        this.transportService = transportService;
        this.transportList = [];
        this.search_key = '';
        this.btnClickNav = function (toNav) {
            this.router.navigateByUrl('/' + toNav);
        };
    }
    TransportComponent.prototype.ngOnInit = function () {
        this.defaultPagination = 1;
        this.gettransportList();
    };
    TransportComponent.prototype.dataSearch = function () {
        this.defaultPagination = 1;
        this.gettransportList();
    };
    TransportComponent.prototype.gettransportList = function () {
        var _this = this;
        var params = new URLSearchParams();
        params.set('page', this.defaultPagination.toString());
        params.set('search', this.search_key.toString());
        this.transportService.getTransporterList(params).subscribe(function (data) {
            _this.totaltransportList = data['count'];
            _this.transportList = data['results'];
            // console.log(this.transportList)
        });
    };
    ;
    TransportComponent.prototype.activeState = function (id) {
        var _this = this;
        var transporter;
        transporter = {
            id: id,
            status: true
        };
        this.transportService.activeInactiveTransporter(transporter).subscribe(function (response) {
            _this.toastr.success('Status changed successfully', '', {
                timeOut: 3000,
            });
            _this.gettransportList();
        }, function (error) {
            console.log('error', error);
            // this.toastr.error('everything is broken', '', {
            //   timeOut: 3000,
            // });
        });
    };
    ;
    TransportComponent.prototype.inactiveState = function (id) {
        var _this = this;
        var transporter;
        transporter = {
            id: id,
            status: false
        };
        this.transportService.activeInactiveTransporter(transporter).subscribe(function (response) {
            _this.toastr.success('Status changed successfully', '', {
                timeOut: 3000,
            });
            _this.gettransportList();
        }, function (error) {
            console.log('error', error);
            // this.toastr.error('everything is broken', '', {
            //   timeOut: 3000,
            // });
        });
    };
    ;
    TransportComponent.prototype.deletetransport = function (id) {
        var _this = this;
        var transporter;
        transporter = {
            id: id
        };
        this.transportService.deleteTransporter(transporter).subscribe(function (response) {
            _this.toastr.success('Transporter deleted successfully', '', {
                timeOut: 3000,
            });
            _this.gettransportList();
        }, function (error) {
            console.log('error', error);
            // this.toastr.error('everything is broken', '', {
            //   timeOut: 3000,
            // });
        });
    };
    ;
    TransportComponent.prototype.pagination = function () {
        this.gettransportList();
    };
    ;
    TransportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-transport',
            template: __webpack_require__("./src/app/layout/transport/transport.component.html"),
            styles: [__webpack_require__("./src/app/layout/transport/transport.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_2__transport_service__["a" /* TransportService */]])
    ], TransportComponent);
    return TransportComponent;
}());



/***/ }),

/***/ "./src/app/layout/transport/transport.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportModule", function() { return TransportModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bs_component_bs_component_module__ = __webpack_require__("./src/app/layout/bs-component/bs-component.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__transport_routing_module__ = __webpack_require__("./src/app/layout/transport/transport-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__transport_component__ = __webpack_require__("./src/app/layout/transport/transport.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__transport_add_transport_add_component__ = __webpack_require__("./src/app/layout/transport/transport-add/transport-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__transport_edit_transport_edit_component__ = __webpack_require__("./src/app/layout/transport/transport-edit/transport-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__transport_service__ = __webpack_require__("./src/app/layout/transport/transport.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__company_company_service__ = __webpack_require__("./src/app/layout/company/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__states_states_service__ = __webpack_require__("./src/app/layout/states/states.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var TransportModule = /** @class */ (function () {
    function TransportModule() {
    }
    TransportModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__transport_routing_module__["a" /* TransportRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared__["b" /* PageHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_5__bs_component_bs_component_module__["BsComponentModule"],
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */].forRoot()
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_7__transport_component__["a" /* TransportComponent */], __WEBPACK_IMPORTED_MODULE_8__transport_add_transport_add_component__["a" /* TransportAddComponent */], __WEBPACK_IMPORTED_MODULE_9__transport_edit_transport_edit_component__["a" /* TransportEditComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_11__transport_service__["a" /* TransportService */], __WEBPACK_IMPORTED_MODULE_12__company_company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_13__states_states_service__["a" /* StatesService */]]
        })
    ], TransportModule);
    return TransportModule;
}());



/***/ }),

/***/ "./src/app/layout/transport/transport.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransportService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TransportService = /** @class */ (function () {
    function TransportService(http) {
        this.http = http;
    }
    TransportService.prototype.addNewTransporter = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + 'transporter/', data, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Token ' + localStorage.getItem('logedUserToken'))
        });
    };
    TransportService.prototype.getTransporterList = function (params) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + 'transporter/?' + params, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Token ' + localStorage.getItem('logedUserToken'))
        });
    };
    TransportService.prototype.getTransporterDetails = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + 'transporter/' + id + '/', {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Token ' + localStorage.getItem('logedUserToken'))
        });
    };
    TransportService.prototype.updateTransporter = function (data) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + 'transporter/' + data.id + '/', data, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Token ' + localStorage.getItem('logedUserToken'))
        });
    };
    TransportService.prototype.activeInactiveTransporter = function (data) {
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + 'transporter/' + data.id + '/', data, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Token ' + localStorage.getItem('logedUserToken'))
        });
    };
    TransportService.prototype.deleteTransporter = function (data) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + 'transporter/' + data.id + '/', {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Token ' + localStorage.getItem('logedUserToken'))
        });
    };
    TransportService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TransportService);
    return TransportService;
}());



/***/ })

});
//# sourceMappingURL=transport.module.chunk.js.map