webpackJsonp(["purchase-requisition.module"],{

/***/ "./src/app/layout/purchase-requisition/purchase-requisition-add/purchase-requisition-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <!-- <app-page-header [heading]=\"'Purchase Requisition Add'\" [icon]=\"'fa fa-university'\"></app-page-header> -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <h4 class=\"page-header\">Purchase Requisition Add</h4>\r\n        </div>\r\n        <div class=\"col-md-6 pull-right\" style=\"text-align: right\">\r\n            <button type=\"button\" class=\"btn btn-secondary\">\r\n                <i class=\"fa fa-question\" aria-hidden=\"true\"></i> Help</button>\r\n            <button type=\"button\" class=\"btn btn-secondary\">\r\n                <i class=\"fa fa-refresh\"></i> Reload</button>\r\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"btnClickNav('purchase-requisition')\">\r\n                <i class=\"fa fa-arrow-left\"></i> Back</button>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n    </div>\r\n    <hr/>\r\n    <div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <form role=\"form\" [formGroup]=\"form\">\r\n                    <div class=\"card bg-light mb-3\">\r\n                        <div class=\"card-header\" style=\"background-color:#868e96; color: #fff;\">Purchase Requisition Add</div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"card bg-light mb-3\">\r\n                                <div class=\"card-header\">Header Line</div>\r\n                                <div class=\"card-body\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"form-group col-md-3\">\r\n                                            <label>Purchase Organization</label>\r\n                                            <select class=\"form-control\" formControlName=\"purchase_org\" [ngClass]=\"displayFieldCss('purchase_org')\" [(ngModel)]=\"purchaseRequisition.purchase_organization\" name=\"purchase_organization\" (ngModelChange)=\"changePurchaseOrganization(purchaseRequisition.purchase_organization)\">\r\n                                                <option value=\"\">Select Purchase Organization</option>\r\n                                                <option *ngFor=\"let purchaseOrganization of purchaseOrganizationList\" value={{purchaseOrganization.id}}>{{purchaseOrganization.name}} </option>\r\n                                            </select>\r\n                                            <div class=\"invalid-feedback\" *ngIf=\"form.controls['purchase_org'].hasError('required')\">\r\n                                                    Please select purchase organization\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-group col-md-3\">\r\n                                            <label>Purchase Group</label>\r\n                                            <select class=\"form-control\" formControlName=\"purchase_grp\" [ngClass]=\"displayFieldCss('purchase_grp')\">\r\n                                                <option value=\"\">Select Group</option>\r\n                                                <option *ngFor=\"let purchaseGroup of purchaseGroupList;\" value={{purchaseGroup.id}}>{{purchaseGroup.name}} </option>\r\n                                            </select>\r\n                                            <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('purchase_grp')\">\r\n                                                    Please select purchase group\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-group col-md-3\">\r\n                                            <label>Company</label>\r\n                                            <select class=\"form-control\" name=\"company\" formControlName=\"company\" [ngClass]=\"displayFieldCss('company')\" [(ngModel)]=\"purchaseRequisition.company\" name=\"company\" (ngModelChange)=\"changeCompany(purchaseRequisition.company)\">\r\n                                                <option value=\"\">Select Company</option>\r\n                                                <option *ngFor=\"let purchaseOrganizationCompany of purchaseOrganizationCompanyList;\" value={{purchaseOrganizationCompany.id}}>{{purchaseOrganizationCompany.company_name}} </option>\r\n                                            </select>\r\n                                            <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('company')\">\r\n                                                    Please select company\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-group col-md-3\">\r\n                                            <label>PR Date</label>\r\n                                            <div class=\"input-group\">\r\n                                                <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"created_at\" formControlName=\"created_at\" [ngClass]=\"displayFieldCss('created_at')\"  ngbDatepicker #d=\"ngbDatepicker\">\r\n                                                <div class=\"input-group-append\">\r\n                                                    <button class=\"btn btn-outline-secondary\" (click)=\"d.toggle()\" type=\"button\">\r\n                                                        <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                                                    </button>\r\n                                                </div>\r\n                                                <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('created_at')\">\r\n                                                        Please enter date\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                             <div class=\"card bg-light mb-3\">\r\n                                <div class=\"card-header\">Material Line</div>\r\n                                <div class=\"card-body\">\r\n                                    <div class=\"row\" formArrayName=\"requisition_detail\"  *ngFor=\"let requisition of form.controls['requisition_detail'].controls; let i = index;\">\r\n                                        <div [formGroupName]=\"i\" class=\"col-md-12\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"form-group col-md-2\">\r\n                                                    <label>Material</label>\r\n                                                    <select class=\"form-control\" name=\"material\" formControlName=\"material\">\r\n                                                        <option value=\"\">Select Material</option>\r\n                                                        <option *ngFor=\"let purchaseOrganizationMaterial of purchaseOrganizationMaterialList;\" value=\"{{purchaseOrganizationMaterial.id}}\">{{purchaseOrganizationMaterial.material_fullname}}</option>\r\n                                                        \r\n                                                    </select>\r\n                                                </div>\r\n                                                <div class=\"form-group col-md-1\">\r\n                                                    <label>Quantity</label>\r\n                                                    <input class=\"form-control\" placeholder=\"Quantity\" name=\"quantity\" formControlName=\"quantity\">\r\n                                                </div>\r\n                                                <div class=\"form-group col-md-2\">\r\n                                                    <label>UOM</label>\r\n                                                    <select class=\"form-control\"  name=\"uom\" formControlName=\"uom\">\r\n                                                        <option value=\"0\">Select UOM</option>\r\n                                                        <option *ngFor=\"let uom of UOMList;\" value=\"{{uom.id}}\">{{uom.name}}</option>\r\n                                                    </select>\r\n                                                </div>\r\n                                                <div class=\"form-group col-md-2\">\r\n                                                    <label>Branch</label>\r\n                                                    <select class=\"form-control\"  name=\"branch\" formControlName=\"branch\">\r\n                                                        <option value=\"\">Select Branch</option>\r\n                                                       \r\n                                                        <option *ngFor=\"let companyBranch of companyBranchDropdownList;\" value=\"{{companyBranch.id}}\">{{companyBranch.branch_name}}</option>\r\n                                                    </select>\r\n                                                </div>\r\n                                                <div class=\"form-group col-md-2\">\r\n                                                    <label>Storage</label>\r\n                                                    <select class=\"form-control\"  name=\"storage_location\" formControlName=\"storage_location\">\r\n                                                        <option>Select Storage</option>\r\n                                                        <option *ngFor=\"let companyStorage of companyStorageDropdownList;\" value=\"{{companyStorage.id}}\">{{companyStorage.storage_address}}</option>\r\n                                                    </select>\r\n                                                </div>\r\n                                                <div class=\"form-group col-md-2\">\r\n                                                    <label>Bin</label>\r\n                                                    <select class=\"form-control\"  name=\"storage_bin\" formControlName=\"storage_bin\">\r\n                                                        <option value=\"\">Select Bin</option>\r\n                                                        <option *ngFor=\"let companyStoragebin of companyStoragebinDropdownList;\" value=\"{{companyStoragebin.id}}\">{{companyStoragebin.bin_no}}</option>\r\n                                                    </select>\r\n                                                </div>\r\n                                                \r\n                                                <div class=\"form-group col-md-1\" style=\"padding-top:30px;\">\r\n                                                    <a routerLink=\".\" (click)=\"addRequisitionDetail()\" title=\"Add More\" name=\"Add More\" *ngIf=\"i == 0\">\r\n                                                        <i class=\"fa fa-plus\"></i> Add More</a>\r\n                                                    <a href=\"javascript:void(0);\" title=\"Delete\" name=\"Delete\" *ngIf=\"i > 0\"  (click)=\"deleteRequisitionDetail(i)\">\r\n                                                        <i class=\"fa fa-times-circle fa-2\" ></i> Delete</a>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-12\">\r\n                                    <label>Special Note</label>\r\n                                    <textarea class=\"form-control\" rows=\"3\" placeholder=\"Special Note\" name=\"note\" formControlName=\"special_note\" [ngClass]=\"displayFieldCss('special_note')\"></textarea>\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"isFieldValid('special_note')\">\r\n                                            Please enter special note\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-12\" style=\"text-align: right\">\r\n                                    <button type=\"submit\" class=\"btn btn-success\" (click)=\"addPurchaseRequisition()\">Submit</button>\r\n                                    <button type=\"reset\" class=\"btn btn-secondary\" (click)=\"reSet()\">Reset</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/purchase-requisition/purchase-requisition-add/purchase-requisition-add.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/purchase-requisition/purchase-requisition-add/purchase-requisition-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurchaseRequisitionAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__purchase_requisition_service__ = __webpack_require__("./src/app/layout/purchase-requisition/purchase-requisition.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__company_company_service__ = __webpack_require__("./src/app/layout/company/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__purchase_organization_purchase_organization_service__ = __webpack_require__("./src/app/layout/purchase-organization/purchase-organization.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__purchase_group_purchase_group_service__ = __webpack_require__("./src/app/layout/purchase-group/purchase-group.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_material_service__ = __webpack_require__("./src/app/layout/material/material.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PurchaseRequisitionAddComponent = /** @class */ (function () {
    function PurchaseRequisitionAddComponent(purchaseRequisitionService, materialService, purchaseOrganizationService, purchaseGroupService, companyService, router, toastr, formBuilder) {
        this.purchaseRequisitionService = purchaseRequisitionService;
        this.materialService = materialService;
        this.purchaseOrganizationService = purchaseOrganizationService;
        this.purchaseGroupService = purchaseGroupService;
        this.companyService = companyService;
        this.router = router;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.UOMList = [];
        this.purchaseGroupList = [];
        this.purchaseOrganizationList = [];
        this.purchaseOrganizationCompanyList = [];
        this.purchaseOrganizationMaterialList = [];
        this.companyBranchDropdownList = [];
        this.companyStorageDropdownList = [];
        this.companyStoragebinDropdownList = [];
        this.btnClickNav = function (toNav) {
            this.router.navigateByUrl('/' + toNav);
        };
    }
    PurchaseRequisitionAddComponent.prototype.ngOnInit = function () {
        this.purchaseRequisition = {
            purchase_organization: '',
            company: ''
        };
        this.form = this.formBuilder.group({
            purchase_org: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            purchase_grp: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            company: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            created_at: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            special_note: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            requisition_detail: this.formBuilder.array([this.createRequisitionDetail()])
        });
        //
        this.getUOMList();
        this.getPurchaseGroupActiveList();
        this.getPurchaseOrganizationActiveList();
    };
    PurchaseRequisitionAddComponent.prototype.createRequisitionDetail = function () {
        return this.formBuilder.group({
            material: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            quantity: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            uom: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            branch: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            storage_location: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            storage_bin: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
        });
    };
    PurchaseRequisitionAddComponent.prototype.addRequisitionDetail = function () {
        var control = this.form.controls['requisition_detail'];
        control.push(this.createRequisitionDetail());
    };
    PurchaseRequisitionAddComponent.prototype.deleteRequisitionDetail = function (index) {
        var control = this.form.controls['requisition_detail'];
        control.removeAt(index);
    };
    PurchaseRequisitionAddComponent.prototype.addPurchaseRequisition = function () {
        var _this = this;
        console.log(this.form.valid);
        if (this.form.valid) {
            this.purchaseRequisitionService.addNewPurchaseRequisition(this.form.value).subscribe(function (response) {
                _this.toastr.success('Material added successfully', '', {
                    timeOut: 3000,
                });
                _this.goToList('purchase-requisition');
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
    PurchaseRequisitionAddComponent.prototype.goToList = function (toNav) {
        this.router.navigateByUrl('/' + toNav);
    };
    ;
    PurchaseRequisitionAddComponent.prototype.reSet = function () {
        this.form.reset();
    };
    PurchaseRequisitionAddComponent.prototype.isFieldValid = function (field) {
        return !this.form.get(field).valid && this.form.get(field).touched;
    };
    PurchaseRequisitionAddComponent.prototype.displayFieldCss = function (field) {
        return {
            'is-invalid': this.form.get(field).invalid && (this.form.get(field).dirty || this.form.get(field).touched),
            'is-valid': this.form.get(field).valid && (this.form.get(field).dirty || this.form.get(field).touched)
        };
    };
    PurchaseRequisitionAddComponent.prototype.getUOMList = function () {
        var _this = this;
        this.companyService.getUOMList().subscribe(function (data) {
            _this.UOMList = data['results'];
        });
    };
    ;
    PurchaseRequisitionAddComponent.prototype.getCompanyBranchDropdownList = function (id) {
        var _this = this;
        this.companyService.getCompanyBranchDropdownList(id).subscribe(function (data) {
            _this.companyBranchDropdownList = data;
            console.log(_this.companyBranchDropdownList);
        });
    };
    ;
    PurchaseRequisitionAddComponent.prototype.getCompanyStorageDropdownList = function (id) {
        var _this = this;
        this.companyService.getCompanyStorageDropdownList(id).subscribe(function (data) {
            _this.companyStorageDropdownList = data;
            console.log(_this.companyStorageDropdownList);
        });
    };
    ;
    PurchaseRequisitionAddComponent.prototype.getCompanyStoragebinDropdownList = function (id) {
        var _this = this;
        this.companyService.getCompanyStoragebinDropdownList(id).subscribe(function (data) {
            _this.companyStoragebinDropdownList = data;
            console.log(_this.companyStoragebinDropdownList);
        });
    };
    ;
    PurchaseRequisitionAddComponent.prototype.getPurchaseGroupActiveList = function () {
        var _this = this;
        this.purchaseGroupService.getPurchaseGroupActiveList().subscribe(function (data) {
            _this.purchaseGroupList = data;
        });
    };
    PurchaseRequisitionAddComponent.prototype.getPurchaseOrganizationActiveList = function () {
        var _this = this;
        this.purchaseOrganizationService.getPurchaseOrganizationActiveList().subscribe(function (data) {
            _this.purchaseOrganizationList = data;
        });
    };
    PurchaseRequisitionAddComponent.prototype.getPurchaseOrganizationCompanyList = function (id) {
        var _this = this;
        this.purchaseOrganizationService.getPurchaseOrganizationCompanyList(id).subscribe(function (data) {
            _this.purchaseOrganizationCompanyList = data;
            console.log(_this.purchaseOrganizationCompanyList);
        });
    };
    PurchaseRequisitionAddComponent.prototype.getPurchaseOrganizationMaterialList = function (id) {
        var _this = this;
        this.purchaseOrganizationService.getPurchaseOrganizationMaterialList(id).subscribe(function (data) {
            _this.purchaseOrganizationMaterialList = data;
            console.log(_this.purchaseOrganizationMaterialList);
        });
    };
    PurchaseRequisitionAddComponent.prototype.changePurchaseOrganization = function (id) {
        if (id > 0) {
            this.getPurchaseOrganizationCompanyList(id);
            this.getPurchaseOrganizationMaterialList(id);
        }
    };
    PurchaseRequisitionAddComponent.prototype.changeCompany = function (id) {
        if (id > 0) {
            this.getCompanyBranchDropdownList(id);
            this.getCompanyStorageDropdownList(id);
            this.getCompanyStoragebinDropdownList(id);
        }
    };
    PurchaseRequisitionAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-purchase-requisition-add',
            template: __webpack_require__("./src/app/layout/purchase-requisition/purchase-requisition-add/purchase-requisition-add.component.html"),
            styles: [__webpack_require__("./src/app/layout/purchase-requisition/purchase-requisition-add/purchase-requisition-add.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__purchase_requisition_service__["a" /* PurchaseRequisitionService */],
            __WEBPACK_IMPORTED_MODULE_7__material_material_service__["a" /* MaterialService */],
            __WEBPACK_IMPORTED_MODULE_5__purchase_organization_purchase_organization_service__["a" /* PurchaseOrganizationService */],
            __WEBPACK_IMPORTED_MODULE_6__purchase_group_purchase_group_service__["a" /* PurchaseGroupService */],
            __WEBPACK_IMPORTED_MODULE_4__company_company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], PurchaseRequisitionAddComponent);
    return PurchaseRequisitionAddComponent;
}());



/***/ }),

/***/ "./src/app/layout/purchase-requisition/purchase-requisition-deatils/purchase-requisition-deatils.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <!-- <app-page-header [heading]=\"'Company Details'\" [icon]=\"'fa fa-university'\"></app-page-header> -->\n  <div class=\"row\">\n      <div class=\"col-md-6\">\n          <h4 class=\"page-header\">Purchase Requisition Details</h4>\n      </div>\n      <div class=\"col-md-6 pull-right\" style=\"text-align: right\">\n          <button type=\"button\" class=\"btn btn-secondary\">\n              <i class=\"fa fa-question\" aria-hidden=\"true\"></i> Help</button>\n          <button type=\"button\" class=\"btn btn-secondary\">\n              <i class=\"fa fa-refresh\"></i> Reload</button>\n          <button type=\"button\" class=\"btn btn-success\" (click)=\"btnClickNav('purchase-requisition')\">\n              <i class=\"fa fa-arrow-left\"></i> Back</button>\n      </div>\n      <div class=\"clearfix\"></div>\n  </div>\n  <hr/>\n\n  <div>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"card bg-light mb-3\">\n                <div class=\"card-header\" style=\"background-color:#868e96; color: #fff;\">Purchase Requisition Number : {{purchaseRequisition.requisition_map[0].requisition_no}}</div>\n                <div class=\"card-body\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <table class=\"card-body table table-hover table-sm table-bordered\">\n                                \n                                <tbody>\n                                    <tr>\n                                        <td>\n                                            <label>Purchase Requisition Number : </label>\n                                        </td>\n                                        <td>\n                                            <label>{{purchaseRequisition.requisition_map[0].requisition_no}}</label>\n                                        </td>\n                                        <td>\n                                            <label>Company : </label>\n                                        </td>\n                                        <td>\n                                            <label>{{purchaseRequisition.company.company_name}}</label>\n                                        </td>\n                                        \n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            <label>Purchase Org : </label>\n                                        </td>\n                                        <td>\n                                            <label>{{purchaseRequisition.purchase_org.name}}</label>\n                                        </td>\n                                        <td>\n                                            <label>Purchase Group : </label>\n                                        </td>\n                                        <td>\n                                            <label>{{purchaseRequisition.purchase_grp.name}}</label>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            <label>Raised By : </label>\n                                        </td>\n                                        <td>\n                                            <label>{{purchaseRequisition.created_by.first_name}}</label>\n                                        </td>\n                                        <td>\n                                            <label>Status : </label>\n                                        </td>\n                                        <td>\n                                            <label></label>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            <label>Raised Date :</label>\n                                        </td>\n                                        <td colspan=\"3\">\n                                            <label>{{purchaseRequisition.created_at | date: 'dd-MM-yyyy'}}</label>\n                                        </td>\n                                        \n                                    </tr>\n                                </tbody>\n\n                            </table>\n                        </div>\n                        <div class=\"col-md-12\">\n                            <h4>Items requested</h4>\n                            <hr/>\n                        </div>\n                        <div class=\"col-md-12\">\n                            <table class=\"card-body table table-hover table-sm table-bordered\">\n                              <thead>\n                                  <tr>\n                                      <th>\n                                          <label>Material</label>\n                                      </th>\n                                      <th>\n                                          <label>UOM</label>\n                                      </th>\n                                      <th>\n                                          <label>Quantity</label>\n                                      </th>\n                                  </tr>\n                              </thead>\n                              <tbody>\n                                  <tr *ngFor=\"let requisition_detail of purchaseRequisition.requisition_detail ; let i = index\">\n                                      <td>\n                                          <label>{{requisition_detail.material.material_code}} - {{requisition_detail.material.material_fullname}}</label>\n                                      </td>\n                                      <td>\n                                          <label>{{requisition_detail.uom.name}}</label>\n                                      </td>\n                                      <td>\n                                          <label>{{requisition_detail.quantity}}</label>\n                                      </td>\n                                  </tr>\n                              </tbody>\n                            </table>\n                        </div>\n                        \n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/layout/purchase-requisition/purchase-requisition-deatils/purchase-requisition-deatils.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/purchase-requisition/purchase-requisition-deatils/purchase-requisition-deatils.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurchaseRequisitionDeatilsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__purchase_requisition_service__ = __webpack_require__("./src/app/layout/purchase-requisition/purchase-requisition.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PurchaseRequisitionDeatilsComponent = /** @class */ (function () {
    function PurchaseRequisitionDeatilsComponent(purchaseRequisitionService, router, route) {
        this.purchaseRequisitionService = purchaseRequisitionService;
        this.router = router;
        this.route = route;
    }
    PurchaseRequisitionDeatilsComponent.prototype.ngOnInit = function () {
        this.purchaseRequisition = {
            company: { company_name: '', id: '' },
            requisition_map: [{ id: '', requisition_no: '' }],
            purchase_org: { id: '', name: '' },
            purchase_grp: { id: '', name: '' },
            created_at: '',
            status: '',
            created_by: { first_name: '', id: '' },
            requisition_detail: [{ material: { material_code: '', material_fullname: '', id: '' }, quantity: '', uom: { id: '', name: '' } }]
        };
        this.getPurchaseRequisitionDetails(this.route.snapshot.params['id']);
    };
    PurchaseRequisitionDeatilsComponent.prototype.getPurchaseRequisitionDetails = function (id) {
        var _this = this;
        this.purchaseRequisitionService.getPurchaseRequisitionDetails(id).subscribe(function (data) {
            _this.purchaseRequisition = data;
            console.log(_this.purchaseRequisition);
        });
    };
    PurchaseRequisitionDeatilsComponent.prototype.btnClickNav = function (toNav) {
        this.router.navigateByUrl('/' + toNav);
    };
    ;
    PurchaseRequisitionDeatilsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-purchase-requisition-deatils',
            template: __webpack_require__("./src/app/layout/purchase-requisition/purchase-requisition-deatils/purchase-requisition-deatils.component.html"),
            styles: [__webpack_require__("./src/app/layout/purchase-requisition/purchase-requisition-deatils/purchase-requisition-deatils.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__purchase_requisition_service__["a" /* PurchaseRequisitionService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], PurchaseRequisitionDeatilsComponent);
    return PurchaseRequisitionDeatilsComponent;
}());



/***/ }),

/***/ "./src/app/layout/purchase-requisition/purchase-requisition-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurchaseRequisitionRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__purchase_requisition_component__ = __webpack_require__("./src/app/layout/purchase-requisition/purchase-requisition.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__purchase_requisition_add_purchase_requisition_add_component__ = __webpack_require__("./src/app/layout/purchase-requisition/purchase-requisition-add/purchase-requisition-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__purchase_requisition_deatils_purchase_requisition_deatils_component__ = __webpack_require__("./src/app/layout/purchase-requisition/purchase-requisition-deatils/purchase-requisition-deatils.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__purchase_requisition_component__["a" /* PurchaseRequisitionComponent */]
    },
    {
        path: 'add',
        component: __WEBPACK_IMPORTED_MODULE_3__purchase_requisition_add_purchase_requisition_add_component__["a" /* PurchaseRequisitionAddComponent */]
    },
    {
        path: 'details/:id',
        component: __WEBPACK_IMPORTED_MODULE_4__purchase_requisition_deatils_purchase_requisition_deatils_component__["a" /* PurchaseRequisitionDeatilsComponent */]
    }
];
var PurchaseRequisitionRoutingModule = /** @class */ (function () {
    function PurchaseRequisitionRoutingModule() {
    }
    PurchaseRequisitionRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], PurchaseRequisitionRoutingModule);
    return PurchaseRequisitionRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/purchase-requisition/purchase-requisition.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <!-- <app-page-header [heading]=\"'Purchase Requisition List'\" [icon]=\"'fa fa-university'\"></app-page-header> -->\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <h4 class=\"page-header\">Purchase Requisition List</h4>\r\n    </div>\r\n    <div class=\"col-md-6 pull-right\" style=\"text-align: right\">\r\n      <button type=\"button\" class=\"btn btn-secondary\">\r\n        <i class=\"fa fa-question\" aria-hidden=\"true\"></i> Help</button>\r\n      <button type=\"button\" class=\"btn btn-secondary\">\r\n        <i class=\"fa fa-refresh\"></i> Reload</button>\r\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"btnClickNav('purchase-requisition/add')\">\r\n        <i class=\"fa fa-plus\"></i> New Purchase Organization</button>\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n  </div>\r\n\r\n  <hr/>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-9\">\r\n              <h5>Purchase Requisition</h5>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <form role=\"form\" (ngSubmit)=\"dataSearch()\">\r\n                <div class=\"input-group\">\r\n                  <input type=\"text\" class=\"form-control\" name=\"search\" placeholder=\"Search\" [(ngModel)]=\"search_key\">\r\n                  <div class=\"input-group-append\">\r\n                    <button class=\"btn btn-secondary\" type=\"submit\">\r\n                      <i class=\"fa fa-search\"></i>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <table class=\"card-body table table-hover table-sm table-bordered\">\r\n          <thead>\r\n            <tr>\r\n              <th>Sl.No.</th>\r\n              <th>PR No</th>\r\n              <th>Company</th>\r\n              <th>P. Org.</th>\r\n              <th>P. Group</th>\r\n              <th>PR Raised Date</th>\r\n              <th>PR Raised By</th>\r\n              <th>Status</th>\r\n              <th>Is approved</th>\r\n              <th>Action</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let purchaseRequisition of purchaseRequisitionList ; let i = index\">\r\n              <th scope=\"row\">{{i +1}}</th>\r\n              <td>{{purchaseRequisition.requisition_map[0].requisition_no}}</td>\r\n              <td>{{purchaseRequisition.company.company_name}}</td>\r\n              <td>{{purchaseRequisition.purchase_org.name}}</td>\r\n              <td>{{purchaseRequisition.purchase_grp.name}}</td>\r\n              <td>{{purchaseRequisition.created_at | date: 'dd-MM-yyyy'}}</td>\r\n              <td>{{purchaseRequisition.created_by.first_name}}</td>\r\n              <td>\r\n                <select class=\"form-control\" [(ngModel)]=\"purchaseRequisition.is_finalised\" name=\"is_finalised\"  (ngModelChange)=\"changeStatus(purchaseRequisition.is_finalised,purchaseRequisition.id)\">\r\n                  <option value='0'>Change Status</option>\r\n                  <option value='2'>Cancel</option>\r\n                  <option value='1'>Active</option>\r\n                </select>\r\n              </td>\r\n              <td>\r\n                <select class=\"form-control\" [(ngModel)]=\"purchaseRequisition.is_approve\" name=\"is_approve\"  (ngModelChange)=\"changeApproveStatus(purchaseRequisition.is_approve,purchaseRequisition.id)\">\r\n                  <option value='0'>Change Approve</option>\r\n                  <option value='1'>Approve</option>\r\n                  <option value='2'>Dis-Approve</option>\r\n                </select>\r\n              </td>\r\n              <td>\r\n                <a href=\"javascript:void(0);\" title=\"Edit\" name=\"Edit\" [routerLink]=\"['/purchase-requisition/details', purchaseRequisition.id]\">\r\n                  <i class=\"fa fa-eye\"></i>\r\n                </a>\r\n              </td>\r\n\r\n            </tr>\r\n            \r\n            <!-- <tr *ngIf=\"purchaseRequisitionList.length == 0\">\r\n              <td colspan=\"12\" class=\"text-center\">No record found</td>\r\n            </tr> -->\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"totalPurchaseRequisitionList > 10\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card-body pull-right\">\r\n        <ngb-pagination [collectionSize]=\"totalPurchaseRequisitionList\" [(page)]=\"defaultPagination\" (pageChange)=\"pagination()\"\r\n          size=\"sm\"></ngb-pagination>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/purchase-requisition/purchase-requisition.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/purchase-requisition/purchase-requisition.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurchaseRequisitionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__purchase_requisition_service__ = __webpack_require__("./src/app/layout/purchase-requisition/purchase-requisition.service.ts");
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




var PurchaseRequisitionComponent = /** @class */ (function () {
    function PurchaseRequisitionComponent(router, purchaseRequisitionService, toastr) {
        this.router = router;
        this.purchaseRequisitionService = purchaseRequisitionService;
        this.toastr = toastr;
        this.purchaseRequisitionList = [];
        this.search_key = '';
        this.btnClickNav = function (toNav) {
            this.router.navigateByUrl('/' + toNav);
        };
    }
    PurchaseRequisitionComponent.prototype.ngOnInit = function () {
        this.defaultPagination = 1;
        this.getPurchaseRequisitionList();
    };
    PurchaseRequisitionComponent.prototype.getPurchaseRequisitionList = function () {
        var _this = this;
        var params = new URLSearchParams();
        params.set('page', this.defaultPagination.toString());
        params.set('search', this.search_key.toString());
        this.purchaseRequisitionService.getPurchaseRequisitionList(params).subscribe(function (data) {
            _this.totalPurchaseRequisitionList = data['count'];
            _this.purchaseRequisitionList = data['results'];
            console.log(_this.purchaseRequisitionList);
        });
    };
    PurchaseRequisitionComponent.prototype.changeStatus = function (value, id) {
        var _this = this;
        var purchaseRequisition;
        purchaseRequisition = {
            id: id,
            is_finalised: value
        };
        this.purchaseRequisitionService.changeStatusPurchaseRequisition(purchaseRequisition).subscribe(function (response) {
            _this.toastr.success('Purchase Requisition status changed successfully', '', {
                timeOut: 3000,
            });
            _this.getPurchaseRequisitionList();
        }, function (error) {
            console.log('error', error);
            // this.toastr.error('everything is broken', '', {
            //   timeOut: 3000,
            // });
        });
    };
    PurchaseRequisitionComponent.prototype.changeApproveStatus = function (value, id) {
        var _this = this;
        var purchaseRequisition;
        purchaseRequisition = {
            id: id,
            is_approve: value
        };
        this.purchaseRequisitionService.changeApproveStatusPurchaseRequisition(purchaseRequisition).subscribe(function (response) {
            _this.toastr.success('Purchase Requisition approve status changed successfully', '', {
                timeOut: 3000,
            });
            _this.getPurchaseRequisitionList();
        }, function (error) {
            console.log('error', error);
            // this.toastr.error('everything is broken', '', {
            //   timeOut: 3000,
            // });
        });
    };
    PurchaseRequisitionComponent.prototype.dataSearch = function () {
        this.defaultPagination = 1;
        this.getPurchaseRequisitionList();
    };
    PurchaseRequisitionComponent.prototype.pagination = function () {
        this.getPurchaseRequisitionList();
    };
    ;
    PurchaseRequisitionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-purchase-requisition',
            template: __webpack_require__("./src/app/layout/purchase-requisition/purchase-requisition.component.html"),
            styles: [__webpack_require__("./src/app/layout/purchase-requisition/purchase-requisition.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__purchase_requisition_service__["a" /* PurchaseRequisitionService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]])
    ], PurchaseRequisitionComponent);
    return PurchaseRequisitionComponent;
}());



/***/ }),

/***/ "./src/app/layout/purchase-requisition/purchase-requisition.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseRequisitionModule", function() { return PurchaseRequisitionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__purchase_requisition_routing_module__ = __webpack_require__("./src/app/layout/purchase-requisition/purchase-requisition-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__purchase_requisition_component__ = __webpack_require__("./src/app/layout/purchase-requisition/purchase-requisition.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__purchase_requisition_add_purchase_requisition_add_component__ = __webpack_require__("./src/app/layout/purchase-requisition/purchase-requisition-add/purchase-requisition-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__bs_component_bs_component_module__ = __webpack_require__("./src/app/layout/bs-component/bs-component.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__purchase_requisition_service__ = __webpack_require__("./src/app/layout/purchase-requisition/purchase-requisition.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__purchase_requisition_deatils_purchase_requisition_deatils_component__ = __webpack_require__("./src/app/layout/purchase-requisition/purchase-requisition-deatils/purchase-requisition-deatils.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_material_service__ = __webpack_require__("./src/app/layout/material/material.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__company_company_service__ = __webpack_require__("./src/app/layout/company/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__purchase_organization_purchase_organization_service__ = __webpack_require__("./src/app/layout/purchase-organization/purchase-organization.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__purchase_group_purchase_group_service__ = __webpack_require__("./src/app/layout/purchase-group/purchase-group.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var PurchaseRequisitionModule = /** @class */ (function () {
    function PurchaseRequisitionModule() {
    }
    PurchaseRequisitionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__purchase_requisition_routing_module__["a" /* PurchaseRequisitionRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared__["b" /* PageHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__bs_component_bs_component_module__["BsComponentModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__purchase_requisition_component__["a" /* PurchaseRequisitionComponent */], __WEBPACK_IMPORTED_MODULE_8__purchase_requisition_add_purchase_requisition_add_component__["a" /* PurchaseRequisitionAddComponent */], __WEBPACK_IMPORTED_MODULE_11__purchase_requisition_deatils_purchase_requisition_deatils_component__["a" /* PurchaseRequisitionDeatilsComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_10__purchase_requisition_service__["a" /* PurchaseRequisitionService */], __WEBPACK_IMPORTED_MODULE_12__material_material_service__["a" /* MaterialService */], __WEBPACK_IMPORTED_MODULE_13__company_company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_14__purchase_organization_purchase_organization_service__["a" /* PurchaseOrganizationService */], __WEBPACK_IMPORTED_MODULE_15__purchase_group_purchase_group_service__["a" /* PurchaseGroupService */]]
        })
    ], PurchaseRequisitionModule);
    return PurchaseRequisitionModule;
}());



/***/ })

});
//# sourceMappingURL=purchase-requisition.module.chunk.js.map