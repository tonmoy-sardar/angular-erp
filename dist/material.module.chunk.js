webpackJsonp(["material.module"],{

/***/ "./src/app/layout/material/material-add/material-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <h4 class=\"page-header\">Material Add</h4>\n        </div>\n        <div class=\"col-md-6 pull-right\" style=\"text-align: right\">\n            <button type=\"button\" class=\"btn btn-secondary\">\n                <i class=\"fa fa-question\" aria-hidden=\"true\"></i> Help</button>\n            <button type=\"button\" class=\"btn btn-secondary\">\n                <i class=\"fa fa-refresh\"></i> Reload</button>\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"btnClickNav('material')\">\n                <i class=\"fa fa-arrow-left\"></i> Back</button>\n        </div>\n        <div class=\"clearfix\"></div>\n    </div>\n    <hr/>\n    <div>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <form role=\"form\" [formGroup]=\"form\" novalidate>\n                    <div class=\"card bg-light mb-3\">\n                        <div class=\"card-header\" style=\"background-color:#868e96; color: #fff;\">Material Add</div>\n                        <div class=\"card-body\">\n                            <div class=\"row\">\n                                <div class=\"form-group col-md-4\">\n                                    <label>Material Type</label>\n                                    <select class=\"form-control\" formControlName=\"material_type\" [ngClass]=\"displayFieldCss('material_type')\">\n                                        <option value=\"\">Select Material Type</option>\n                                        <option *ngFor=\"let materialType of materialTypeList;\" value=\"{{materialType.id}}\">{{materialType.material_type}}</option>\n                                    </select>\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['material_type'].hasError('required')\">\n                                        Please select material Type\n                                    </div>\n                                </div>\n                                <div class=\"form-group col-md-4\">\n                                    <label>Material Name</label>\n                                    <input class=\"form-control\" formControlName=\"material_fullname\" [ngClass]=\"displayFieldCss('material_fullname')\" placeholder=\"Material Name\">\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['material_fullname'].hasError('required')\">\n                                        Please enter material name\n                                    </div>\n                                </div>\n                                <div class=\"form-group col-md-4\">\n                                    <label>Material Code</label>\n                                    <input class=\"form-control\" formControlName=\"material_code\" [ngClass]=\"displayFieldCss('material_code')\" placeholder=\"Material Name\">\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['material_code'].hasError('required')\">\n                                        Please enter material cose\n                                    </div>\n                                </div>\n\n                                <div class=\"form-group col-md-12\" formArrayName=\"material_uom\">\n                                    <div *ngFor=\"let material_uoms of form.controls['material_uom'].controls; let i = index;\">\n                                        <div class=\"row\" [formGroupName]=\"i\">\n                                            <div class=\"form-group col-md-4\">\n                                                <label>Unit of Measurement</label>\n                                                <select class=\"form-control\" formControlName=\"base_uom\" [ngClass]=\"{\n                                                    'is-invalid': form.controls['material_uom'].controls[i].controls['base_uom'].invalid && (form.controls['material_uom'].controls[i].controls['base_uom'].dirty || form.controls['material_uom'].controls[i].controls['base_uom'].touched),\n                                                    'is-valid': form.controls['material_uom'].controls[i].controls['base_uom'].valid && (form.controls['material_uom'].controls[i].controls['base_uom'].dirty || form.controls['material_uom'].controls[i].controls['base_uom'].touched)\n                                                  }\">\n                                                    <option value=\"0\">Select UOM</option>\n                                                    <option *ngFor=\"let uom of UOMList;\" value=\"{{uom.id}}\">{{uom.name}}</option>\n                                                </select>\n                                                <div class=\"invalid-feedback\" *ngIf=\"form.controls['material_uom'].controls[i].controls['base_uom'].hasError('required')\">\n                                                    Please enter unit of Measurement\n                                                </div>\n                                            </div>\n                                            <div class=\"form-group col-md-4\">\n                                                <label>Unit Per UOM</label>\n                                                <input class=\"form-control\" type=\"number\" formControlName=\"unit_per_uom\" placeholder=\"Material Name\" [ngClass]=\"{\n                                                    'is-invalid': form.controls['material_uom'].controls[i].controls['unit_per_uom'].invalid && (form.controls['material_uom'].controls[i].controls['unit_per_uom'].dirty || form.controls['material_uom'].controls[i].controls['unit_per_uom'].touched),\n                                                    'is-valid': form.controls['material_uom'].controls[i].controls['unit_per_uom'].valid && (form.controls['material_uom'].controls[i].controls['unit_per_uom'].dirty || form.controls['material_uom'].controls[i].controls['unit_per_uom'].touched)\n                                                  }\">\n                                                <div class=\"invalid-feedback\" *ngIf=\"form.controls['material_uom'].controls[i].controls['unit_per_uom'].hasError('required')\">\n                                                    Please enter unit per UOM\n                                                </div>\n                                            </div>\n                                            <div class=\"form-group col-md-4\">\n                                                <label>UOM</label>\n                                                <select class=\"form-control\" formControlName=\"unit_uom\" [ngClass]=\"{\n                                                    'is-invalid': form.controls['material_uom'].controls[i].controls['unit_uom'].invalid && (form.controls['material_uom'].controls[i].controls['unit_uom'].dirty || form.controls['material_uom'].controls[i].controls['unit_uom'].touched),\n                                                    'is-valid': form.controls['material_uom'].controls[i].controls['unit_uom'].valid && (form.controls['material_uom'].controls[i].controls['unit_uom'].dirty || form.controls['material_uom'].controls[i].controls['unit_uom'].touched)\n                                                  }\">\n                                                    <option value=\"0\">Select UOM</option>\n                                                    <option *ngFor=\"let uom of UOMList;\" value=\"{{uom.id}}\">{{uom.name}}</option>\n                                                </select>\n                                                <div class=\"invalid-feedback\" *ngIf=\"form.controls['material_uom'].controls[i].controls['unit_uom'].hasError('required')\">\n                                                    Please enter select UOM\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-group col-md-12\">\n                                    <div class=\"checkbox\">\n                                        <label>\n                                            <input type=\"checkbox\" formControlName=\"is_sales\" (click)=\"showHideMaterialUOM()\"> For Sale Material\n                                        </label>\n                                    </div>\n                                </div>\n\n                                <div class=\"form-group col-md-12\">\n\n                                    <label>\n                                        <input type=\"checkbox\" formControlName=\"is_taxable\" (click)=\"showHideMaterialTax()\"> Is Taxable?\n                                    </label>\n\n                                </div>\n                                <div class=\"form-group col-md-12\" *ngIf=\"is_taxable_value==true\">\n                                    <div class=\"row\">\n                                        <div class=\"form-group col-md-12\" formArrayName=\"material_tax\" *ngFor=\"let material_taxs of form.controls['material_tax'].controls; let i = index;\">\n                                            <div class=\"row\" [formGroupName]=\"i\">\n                                                <div class=\"form-group col-md-3\">\n                                                    <label>IGST</label>\n                                                    <input class=\"form-control\" type=\"number\" formControlName=\"igst\" placeholder=\"IGST\" [ngClass]=\"{\n                                                'is-invalid': form.controls['material_tax'].controls[i].controls['igst'].invalid && (form.controls['material_tax'].controls[i].controls['igst'].dirty || form.controls['material_tax'].controls[i].controls['igst'].touched),\n                                                'is-valid': form.controls['material_tax'].controls[i].controls['igst'].valid && (form.controls['material_tax'].controls[i].controls['igst'].dirty || form.controls['material_tax'].controls[i].controls['igst'].touched)\n                                              }\">\n                                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['material_tax'].controls[i].controls['igst'].hasError('required')\">\n                                                        Please enter IGST\n                                                    </div>\n                                                </div>\n                                                <div class=\"form-group col-md-3\">\n                                                    <label>CGST</label>\n                                                    <input class=\"form-control\" type=\"number\" formControlName=\"cgst\" placeholder=\"CGST\" [ngClass]=\"{\n                                                'is-invalid': form.controls['material_tax'].controls[i].controls['cgst'].invalid && (form.controls['material_tax'].controls[i].controls['cgst'].dirty || form.controls['material_tax'].controls[i].controls['cgst'].touched),\n                                                'is-valid': form.controls['material_tax'].controls[i].controls['cgst'].valid && (form.controls['material_tax'].controls[i].controls['cgst'].dirty || form.controls['material_tax'].controls[i].controls['cgst'].touched)\n                                              }\">\n                                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['material_tax'].controls[i].controls['cgst'].hasError('required')\">\n                                                        Please enter CGST\n                                                    </div>\n                                                </div>\n                                                <div class=\"form-group col-md-3\">\n                                                    <label>SGST</label>\n                                                    <input class=\"form-control\" type=\"number\" formControlName=\"sgst\" placeholder=\"SGST\" [ngClass]=\"{\n                                                'is-invalid': form.controls['material_tax'].controls[i].controls['sgst'].invalid && (form.controls['material_tax'].controls[i].controls['sgst'].dirty || form.controls['material_tax'].controls[i].controls['sgst'].touched),\n                                                'is-valid': form.controls['material_tax'].controls[i].controls['sgst'].valid && (form.controls['material_tax'].controls[i].controls['sgst'].dirty || form.controls['material_tax'].controls[i].controls['sgst'].touched)\n                                              }\">\n                                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['material_tax'].controls[i].controls['sgst'].hasError('required')\">\n                                                        Please enter SGST\n                                                    </div>\n                                                </div>\n                                                <div class=\"form-group col-md-3\">\n                                                    <label>HSN</label>\n                                                    <input class=\"form-control\" type=\"number\" formControlName=\"hsn\" placeholder=\"HSN\" [ngClass]=\"{\n                                                'is-invalid': form.controls['material_tax'].controls[i].controls['hsn'].invalid && (form.controls['material_tax'].controls[i].controls['hsn'].dirty || form.controls['material_tax'].controls[i].controls['hsn'].touched),\n                                                'is-valid': form.controls['material_tax'].controls[i].controls['hsn'].valid && (form.controls['material_tax'].controls[i].controls['hsn'].dirty || form.controls['material_tax'].controls[i].controls['hsn'].touched)\n                                              }\">\n                                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['material_tax'].controls[i].controls['hsn'].hasError('required')\">\n                                                        Please enter HSN\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"form-group col-md-6\">\n                                    <label>Purchase Org: </label>\n                                    <select multiple=\"\" class=\"form-control\" formControlName=\"material_purchase_org\" [ngClass]=\"displayFieldCss('material_purchase_org')\">\n                                        <option *ngFor=\"let purchaseOrganization of purchaseOrganizationList\" value={{purchaseOrganization.id}}>{{purchaseOrganization.name}} </option>\n                                    </select>\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['material_purchase_org'].hasError('required')\">\n                                        Please select purchase org\n                                    </div>\n                                </div>\n\n                                <div class=\"form-group col-md-6\">\n                                    <label>Purchase Group: </label>\n                                    <select multiple=\"\" class=\"form-control\" formControlName=\"material_purchase_grp\" [ngClass]=\"displayFieldCss('material_purchase_grp')\">\n                                        <option *ngFor=\"let purchaseGroup of purchaseGroupList;\" value={{purchaseGroup.id}}>{{purchaseGroup.name}} </option>\n                                    </select>\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['material_purchase_grp'].hasError('required')\">\n                                        Please select purchase group\n                                    </div>\n                                </div>\n\n                                <div class=\"form-group col-md-12\">\n                                    <label>Description</label>\n                                    <textarea class=\"form-control\" rows=\"2\" placeholder=\"Description\" formControlName=\"description\" [ngClass]=\"displayFieldCss('description')\"></textarea>\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['description'].hasError('required')\">\n                                        Please enter description\n                                    </div>\n                                </div>\n                                <div class=\"form-group col-md-12\" style=\"text-align: right\">\n                                    <button type=\"submit\" class=\"btn btn-success\" (click)=\"addMaterial()\">Submit</button>\n                                    <button type=\"reset\" class=\"btn btn-secondary\">Reset</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/material/material-add/material-add.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/material/material-add/material-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__company_company_service__ = __webpack_require__("./src/app/layout/company/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__purchase_organization_purchase_organization_service__ = __webpack_require__("./src/app/layout/purchase-organization/purchase-organization.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__purchase_group_purchase_group_service__ = __webpack_require__("./src/app/layout/purchase-group/purchase-group.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_service__ = __webpack_require__("./src/app/layout/material/material.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MaterialAddComponent = /** @class */ (function () {
    function MaterialAddComponent(materialService, purchaseOrganizationService, purchaseGroupService, companyService, router, toastr, formBuilder) {
        this.materialService = materialService;
        this.purchaseOrganizationService = purchaseOrganizationService;
        this.purchaseGroupService = purchaseGroupService;
        this.companyService = companyService;
        this.router = router;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.materialTypeList = [];
        this.UOMList = [];
        this.purchaseGroupList = [];
        this.purchaseOrganizationList = [];
        this.is_taxable_value = false;
        this.addMaterial = function () {
            var _this = this;
            if (this.form.valid) {
                var material_purchase_org_arr = [];
                for (var i = 0; i < this.form.value.material_purchase_org.length; i++) {
                    material_purchase_org_arr.push({ pur_org: this.form.value.material_purchase_org[i] });
                }
                var material_purchase_grp_arr = [];
                for (var i = 0; i < this.form.value.material_purchase_grp.length; i++) {
                    material_purchase_grp_arr.push({ pur_group: this.form.value.material_purchase_grp[i] });
                }
                this.form.value.material_purchase_org = material_purchase_org_arr;
                this.form.value.material_purchase_grp = material_purchase_grp_arr;
                if (this.is_taxable_value == false) {
                    this.form.value.material_tax = [];
                }
                this.materialService.addNewMaterial(this.form.value).subscribe(function (response) {
                    _this.toastr.success('Material added successfully', '', {
                        timeOut: 3000,
                    });
                    _this.goToList('material');
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
    }
    MaterialAddComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            material_type: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            material_code: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            material_fullname: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            material_purchase_org: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            material_purchase_grp: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            description: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            material_uom: this.formBuilder.array([this.createmMaterialUom(1)]),
            is_sales: [false],
            is_taxable: [false],
            material_tax: this.formBuilder.array([this.createmMaterialTax(1)])
        });
        this.getUOMList();
        this.getMaterialTypeList();
        this.getPurchaseGroupActiveList();
        this.getPurchaseOrganizationActiveList();
    };
    MaterialAddComponent.prototype.createmMaterialUom = function (for_id) {
        return this.formBuilder.group({
            material_for: for_id,
            base_uom: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            unit_per_uom: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            unit_uom: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
        });
    };
    MaterialAddComponent.prototype.addMaterialUom = function () {
        var control = this.form.controls['material_uom'];
        control.push(this.createmMaterialUom(2));
        // this.material_uom_arr = this.form.get('material_uom') as FormArray;
        // this.material_uom_arr.push(this.createmMaterialUom(2));
    };
    MaterialAddComponent.prototype.deleteMaterialUom = function (index) {
        var control = this.form.controls['material_uom'];
        control.removeAt(index);
        // this.material_uom_arr.controls.splice(index);
        // this.form.value.material_uom.splice(index);
    };
    MaterialAddComponent.prototype.showHideMaterialUOM = function () {
        if (this.form.value.is_sales != true) {
            this.addMaterialUom();
            if (this.form.value.is_taxable == true) {
                this.addMateriaTax();
            }
        }
        else {
            this.deleteMaterialUom(1);
            if (this.form.value.is_taxable == true) {
                this.deleteMaterialTax(1);
            }
        }
    };
    MaterialAddComponent.prototype.createmMaterialTax = function (for_id) {
        return this.formBuilder.group({
            tax_for: for_id,
            igst: [''],
            cgst: [''],
            sgst: [''],
            hsn: ['']
        });
    };
    MaterialAddComponent.prototype.addMateriaTax = function () {
        var control = this.form.controls['material_tax'];
        control.push(this.createmMaterialTax(2));
        // this.material_tax_arr = this.form.get('material_tax') as FormArray;
        // this.material_tax_arr.push(this.createmMaterialTax(2));
    };
    MaterialAddComponent.prototype.deleteMaterialTax = function (index) {
        var control = this.form.controls['material_tax'];
        control.removeAt(index);
        // this.material_tax_arr.controls.splice(index);
        // this.form.value.material_tax.splice(index);
    };
    MaterialAddComponent.prototype.showHideMaterialTax = function () {
        if (this.form.value.is_taxable != true) {
            this.is_taxable_value = true;
            if (this.form.value.is_sales == true) {
                this.addMateriaTax();
            }
        }
        else {
            this.is_taxable_value = false;
            if (this.form.value.is_sales == true) {
                this.deleteMaterialTax(1);
            }
        }
    };
    MaterialAddComponent.prototype.getMaterialTypeList = function () {
        var _this = this;
        this.materialService.getMaterialTypeList().subscribe(function (data) {
            _this.materialTypeList = data['results'];
        });
    };
    MaterialAddComponent.prototype.btnClickNav = function (toNav) {
        this.router.navigateByUrl('/' + toNav);
    };
    ;
    MaterialAddComponent.prototype.getUOMList = function () {
        var _this = this;
        this.companyService.getUOMList().subscribe(function (data) {
            _this.UOMList = data['results'];
        });
    };
    ;
    MaterialAddComponent.prototype.getPurchaseGroupActiveList = function () {
        var _this = this;
        this.purchaseGroupService.getPurchaseGroupActiveList().subscribe(function (data) {
            _this.purchaseGroupList = data;
        });
    };
    MaterialAddComponent.prototype.getPurchaseOrganizationActiveList = function () {
        var _this = this;
        this.purchaseOrganizationService.getPurchaseOrganizationActiveList().subscribe(function (data) {
            _this.purchaseOrganizationList = data;
        });
    };
    MaterialAddComponent.prototype.goToList = function (toNav) {
        this.router.navigateByUrl('/' + toNav);
    };
    ;
    MaterialAddComponent.prototype.displayFieldCss = function (field) {
        return {
            'is-invalid': this.form.controls[field].invalid && (this.form.controls[field].dirty || this.form.controls[field].touched),
            'is-valid': this.form.controls[field].valid && (this.form.controls[field].dirty || this.form.controls[field].touched)
        };
    };
    MaterialAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-material-add',
            template: __webpack_require__("./src/app/layout/material/material-add/material-add.component.html"),
            styles: [__webpack_require__("./src/app/layout/material/material-add/material-add.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__material_service__["a" /* MaterialService */],
            __WEBPACK_IMPORTED_MODULE_4__purchase_organization_purchase_organization_service__["a" /* PurchaseOrganizationService */],
            __WEBPACK_IMPORTED_MODULE_5__purchase_group_purchase_group_service__["a" /* PurchaseGroupService */],
            __WEBPACK_IMPORTED_MODULE_3__company_company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], MaterialAddComponent);
    return MaterialAddComponent;
}());



/***/ }),

/***/ "./src/app/layout/material/material-edit/material-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <h4 class=\"page-header\">Material Edit</h4>\n            </div>\n            <div class=\"col-md-6 pull-right\" style=\"text-align: right\">\n                <button type=\"button\" class=\"btn btn-secondary\">\n                    <i class=\"fa fa-question\" aria-hidden=\"true\"></i> Help</button>\n                <button type=\"button\" class=\"btn btn-secondary\">\n                    <i class=\"fa fa-refresh\"></i> Reload</button>\n                <button type=\"button\" class=\"btn btn-success\" (click)=\"btnClickNav('material')\">\n                    <i class=\"fa fa-arrow-left\"></i> Back</button>\n            </div>\n            <div class=\"clearfix\"></div>\n        </div>\n        <hr/>\n        <div>\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <form role=\"form\" [formGroup]=\"form\" novalidate>\n                        <div class=\"card bg-light mb-3\">\n                            <div class=\"card-header\" style=\"background-color:#868e96; color: #fff;\">Material Edit</div>\n                            <div class=\"card-body\">\n                                <div class=\"row\">\n                                    <div class=\"form-group col-md-4\">\n                                        <label>Material Type</label>\n                                        <select class=\"form-control\" formControlName=\"material_type\" [ngClass]=\"displayFieldCss('material_type')\" [(ngModel)]=\"material.material_type\" name=\"material_type\">\n                                            <option value=\"\">Select Material Type</option>\n                                            <option *ngFor=\"let materialType of materialTypeList;\" value=\"{{materialType.id}}\">{{materialType.material_type}}</option>\n                                        </select>\n                                        <div class=\"invalid-feedback\" *ngIf=\"form.controls['material_type'].hasError('required')\">\n                                            Please select material Type\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group col-md-4\">\n                                        <label>Material Name</label>\n                                        <input class=\"form-control\" formControlName=\"material_fullname\" [ngClass]=\"displayFieldCss('material_fullname')\" placeholder=\"Material Name\" [(ngModel)]=\"material.material_fullname\" name=\"material_fullname\">\n                                        <div class=\"invalid-feedback\" *ngIf=\"form.controls['material_fullname'].hasError('required')\">\n                                            Please enter material name\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group col-md-4\">\n                                        <label>Material Code</label>\n                                        <input class=\"form-control\" formControlName=\"material_code\" [ngClass]=\"displayFieldCss('material_code')\" placeholder=\"Material Code\" [(ngModel)]=\"material.material_code\" name=\"material_code\">\n                                        <div class=\"invalid-feedback\" *ngIf=\"form.controls['material_code'].hasError('required')\">\n                                            Please enter material cose\n                                        </div>\n                                    </div>\n    \n                                    <div class=\"form-group col-md-12\" formArrayName=\"material_uom\">\n                                        <div *ngFor=\"let material_uoms of form.controls['material_uom'].controls; let i = index;\">\n                                            <div class=\"row\" [formGroupName]=\"i\">\n                                                <div class=\"form-group col-md-4\">\n                                                    <label>Unit of Measurement</label>\n                                                    <select class=\"form-control\" formControlName=\"base_uom\" [ngClass]=\"{\n                                                        'is-invalid': form.controls['material_uom'].controls[i].controls['base_uom'].invalid && (form.controls['material_uom'].controls[i].controls['base_uom'].dirty || form.controls['material_uom'].controls[i].controls['base_uom'].touched),\n                                                        'is-valid': form.controls['material_uom'].controls[i].controls['base_uom'].valid && (form.controls['material_uom'].controls[i].controls['base_uom'].dirty || form.controls['material_uom'].controls[i].controls['base_uom'].touched)\n                                                      }\"  [(ngModel)]=\"material.material_uom[i].base_uom\" name=\"base_uom\">\n                                                        <option value=\"0\">Select UOM</option>\n                                                        <option *ngFor=\"let uom of UOMList;\" value=\"{{uom.id}}\">{{uom.name}}</option>\n                                                    </select>\n                                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['material_uom'].controls[i].controls['base_uom'].hasError('required')\">\n                                                        Please enter unit of Measurement\n                                                    </div>\n                                                </div>\n                                                <div class=\"form-group col-md-4\">\n                                                    <label>Unit Per UOM</label>\n                                                    <input class=\"form-control\" type=\"number\" formControlName=\"unit_per_uom\" placeholder=\"Material Name\" [ngClass]=\"{\n                                                        'is-invalid': form.controls['material_uom'].controls[i].controls['unit_per_uom'].invalid && (form.controls['material_uom'].controls[i].controls['unit_per_uom'].dirty || form.controls['material_uom'].controls[i].controls['unit_per_uom'].touched),\n                                                        'is-valid': form.controls['material_uom'].controls[i].controls['unit_per_uom'].valid && (form.controls['material_uom'].controls[i].controls['unit_per_uom'].dirty || form.controls['material_uom'].controls[i].controls['unit_per_uom'].touched)\n                                                      }\"  [(ngModel)]=\"material.material_uom[i].unit_per_uom\" name=\"unit_per_uom\">\n                                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['material_uom'].controls[i].controls['unit_per_uom'].hasError('required')\">\n                                                        Please enter unit per UOM\n                                                    </div>\n                                                </div>\n                                                <div class=\"form-group col-md-4\">\n                                                    <label>UOM</label>\n                                                    <select class=\"form-control\" formControlName=\"unit_uom\" [ngClass]=\"{\n                                                        'is-invalid': form.controls['material_uom'].controls[i].controls['unit_uom'].invalid && (form.controls['material_uom'].controls[i].controls['unit_uom'].dirty || form.controls['material_uom'].controls[i].controls['unit_uom'].touched),\n                                                        'is-valid': form.controls['material_uom'].controls[i].controls['unit_uom'].valid && (form.controls['material_uom'].controls[i].controls['unit_uom'].dirty || form.controls['material_uom'].controls[i].controls['unit_uom'].touched)\n                                                      }\" [(ngModel)]=\"material.material_uom[i].unit_uom\" name=\"unit_uom\">\n                                                        <option value=\"0\">Select UOM</option>\n                                                        <option *ngFor=\"let uom of UOMList;\" value=\"{{uom.id}}\">{{uom.name}}</option>\n                                                    </select>\n                                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['material_uom'].controls[i].controls['unit_uom'].hasError('required')\">\n                                                        Please enter select UOM\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group col-md-12\">\n                                        <div class=\"checkbox\">\n                                            <label>\n                                                <input type=\"checkbox\" formControlName=\"is_sales\" (click)=\"showHideMaterialUOM()\" [(ngModel)]=\"material.is_sales\" name=\"is_sales\"> For Sale Material\n                                            </label>\n                                        </div>\n                                    </div>\n    \n                                    <div class=\"form-group col-md-12\">\n    \n                                        <label>\n                                            <input type=\"checkbox\" formControlName=\"is_taxable\" (click)=\"showHideMaterialTax()\" [(ngModel)]=\"material.is_taxable\" name=\"is_taxable\"> Is Taxable?\n                                        </label>\n    \n                                    </div>\n                                    <div class=\"form-group col-md-12\" *ngIf=\"is_taxable_value==true\">\n                                        <div class=\"row\">\n                                            <div class=\"form-group col-md-12\" formArrayName=\"material_tax\" *ngFor=\"let material_taxs of form.controls['material_tax'].controls; let i = index;\">\n                                                <div class=\"row\" [formGroupName]=\"i\">\n                                                    <div class=\"form-group col-md-3\">\n                                                        <label>IGST</label>\n                                                        <input class=\"form-control\" type=\"number\" formControlName=\"igst\" placeholder=\"IGST\" [ngClass]=\"{\n                                                    'is-invalid': form.controls['material_tax'].controls[i].controls['igst'].invalid && (form.controls['material_tax'].controls[i].controls['igst'].dirty || form.controls['material_tax'].controls[i].controls['igst'].touched),\n                                                    'is-valid': form.controls['material_tax'].controls[i].controls['igst'].valid && (form.controls['material_tax'].controls[i].controls['igst'].dirty || form.controls['material_tax'].controls[i].controls['igst'].touched)\n                                                  }\" [(ngModel)]=\"material.material_tax[i].igst\" name=\"igst\">\n                                                        <div class=\"invalid-feedback\" *ngIf=\"form.controls['material_tax'].controls[i].controls['igst'].hasError('required')\">\n                                                            Please enter IGST\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"form-group col-md-3\">\n                                                        <label>CGST</label>\n                                                        <input class=\"form-control\" type=\"number\" formControlName=\"cgst\" placeholder=\"CGST\" [ngClass]=\"{\n                                                    'is-invalid': form.controls['material_tax'].controls[i].controls['cgst'].invalid && (form.controls['material_tax'].controls[i].controls['cgst'].dirty || form.controls['material_tax'].controls[i].controls['cgst'].touched),\n                                                    'is-valid': form.controls['material_tax'].controls[i].controls['cgst'].valid && (form.controls['material_tax'].controls[i].controls['cgst'].dirty || form.controls['material_tax'].controls[i].controls['cgst'].touched)\n                                                  }\" [(ngModel)]=\"material.material_tax[i].cgst\" name=\"cgst\">\n                                                        <div class=\"invalid-feedback\" *ngIf=\"form.controls['material_tax'].controls[i].controls['cgst'].hasError('required')\">\n                                                            Please enter CGST\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"form-group col-md-3\">\n                                                        <label>SGST</label>\n                                                        <input class=\"form-control\" type=\"number\" formControlName=\"sgst\" placeholder=\"SGST\" [ngClass]=\"{\n                                                    'is-invalid': form.controls['material_tax'].controls[i].controls['sgst'].invalid && (form.controls['material_tax'].controls[i].controls['sgst'].dirty || form.controls['material_tax'].controls[i].controls['sgst'].touched),\n                                                    'is-valid': form.controls['material_tax'].controls[i].controls['sgst'].valid && (form.controls['material_tax'].controls[i].controls['sgst'].dirty || form.controls['material_tax'].controls[i].controls['sgst'].touched)\n                                                  }\" [(ngModel)]=\"material.material_tax[i].sgst\" name=\"sgst\">\n                                                        <div class=\"invalid-feedback\" *ngIf=\"form.controls['material_tax'].controls[i].controls['sgst'].hasError('required')\">\n                                                            Please enter SGST\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"form-group col-md-3\">\n                                                        <label>HSN</label>\n                                                        <input class=\"form-control\" type=\"text\" formControlName=\"hsn\" placeholder=\"HSN\" [ngClass]=\"{\n                                                    'is-invalid': form.controls['material_tax'].controls[i].controls['hsn'].invalid && (form.controls['material_tax'].controls[i].controls['hsn'].dirty || form.controls['material_tax'].controls[i].controls['hsn'].touched),\n                                                    'is-valid': form.controls['material_tax'].controls[i].controls['hsn'].valid && (form.controls['material_tax'].controls[i].controls['hsn'].dirty || form.controls['material_tax'].controls[i].controls['hsn'].touched)\n                                                  }\" [(ngModel)]=\"material.material_tax[i].hsn\" name=\"hsn\">\n                                                        <div class=\"invalid-feedback\" *ngIf=\"form.controls['material_tax'].controls[i].controls['hsn'].hasError('required')\">\n                                                            Please enter HSN\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n    \n                                    <div class=\"form-group col-md-6\">\n                                        <label>Purchase Org: </label>\n                                        <select multiple=\"\" class=\"form-control\" formControlName=\"material_purchase_org\" [ngClass]=\"displayFieldCss('material_purchase_org')\" [(ngModel)]=\"material.material_purchase_org\" name=\"material_purchase_org\">\n                                            <option *ngFor=\"let purchaseOrganization of purchaseOrganizationList\" value={{purchaseOrganization.id}}>{{purchaseOrganization.name}} </option>\n                                        </select>\n                                        <div class=\"invalid-feedback\" *ngIf=\"form.controls['material_purchase_org'].hasError('required')\">\n                                            Please select purchase org\n                                        </div>\n                                    </div>\n    \n                                    <div class=\"form-group col-md-6\">\n                                        <label>Purchase Group: </label>\n                                        \n                                        <select multiple=\"\" class=\"form-control\" formControlName=\"material_purchase_grp\" [ngClass]=\"displayFieldCss('material_purchase_grp')\" [(ngModel)]=\"material.material_purchase_grp\" name=\"material_purchase_grp\">\n                                            <option *ngFor=\"let purchaseGroup of purchaseGroupList;\" value={{purchaseGroup.id}}>{{purchaseGroup.name}} </option>\n                                        </select>\n                                        <div class=\"invalid-feedback\" *ngIf=\"form.controls['material_purchase_grp'].hasError('required')\">\n                                            Please select purchase group\n                                        </div>\n                                    </div>\n    \n                                    <div class=\"form-group col-md-12\">\n                                        <label>Description</label>\n                                        <textarea class=\"form-control\" rows=\"2\" placeholder=\"Description\" formControlName=\"description\" [ngClass]=\"displayFieldCss('description')\" [(ngModel)]=\"material.description\" name=\"description\">{{material.description}}></textarea>\n                                        <div class=\"invalid-feedback\" *ngIf=\"form.controls['description'].hasError('required')\">\n                                            Please enter description\n                                        </div>\n                                    </div>\n                                    \n                                    <div class=\"form-group col-md-12\" style=\"text-align: right\">\n                                        <button type=\"submit\" class=\"btn btn-success\" (click)=\"updateMaterial()\">Submit</button>\n                                        <button type=\"reset\" class=\"btn btn-secondary\">Reset</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/layout/material/material-edit/material-edit.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/material/material-edit/material-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__company_company_service__ = __webpack_require__("./src/app/layout/company/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__purchase_organization_purchase_organization_service__ = __webpack_require__("./src/app/layout/purchase-organization/purchase-organization.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__purchase_group_purchase_group_service__ = __webpack_require__("./src/app/layout/purchase-group/purchase-group.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_service__ = __webpack_require__("./src/app/layout/material/material.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MaterialEditComponent = /** @class */ (function () {
    function MaterialEditComponent(materialService, purchaseOrganizationService, purchaseGroupService, companyService, router, route, toastr, formBuilder) {
        this.materialService = materialService;
        this.purchaseOrganizationService = purchaseOrganizationService;
        this.purchaseGroupService = purchaseGroupService;
        this.companyService = companyService;
        this.router = router;
        this.route = route;
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.materialTypeList = [];
        this.UOMList = [];
        this.purchaseGroupList = [];
        this.purchaseOrganizationList = [];
        this.is_taxable_value = false;
        this.getMaterialDetails = function (id) {
            var _this = this;
            this.materialService.getMaterialDetails(id).subscribe(function (data) {
                _this.material = data;
                console.log(_this.material);
                if (_this.material.is_sales == true) {
                    _this.addMaterialUom();
                }
                if (_this.material.is_taxable == true) {
                    _this.is_taxable_value = true;
                    _this.addMateriaTax();
                }
                var material_purchase_org_arr = [];
                for (var i = 0; i < _this.material.material_purchase_org.length; i++) {
                    material_purchase_org_arr.push(_this.material.material_purchase_org[i].id);
                }
                _this.material.material_purchase_org = material_purchase_org_arr;
                var material_purchase_grp_arr = [];
                for (var i = 0; i < _this.material.material_purchase_grp.length; i++) {
                    material_purchase_grp_arr.push(_this.material.material_purchase_grp[i].id);
                }
                _this.material.material_purchase_grp = material_purchase_grp_arr;
                console.log(_this.material);
            });
        };
        this.updateMaterial = function () {
            var _this = this;
            if (this.form.valid) {
                var material_purchase_org_arr = [];
                for (var i = 0; i < this.form.value.material_purchase_org.length; i++) {
                    material_purchase_org_arr.push({ pur_org: this.form.value.material_purchase_org[i] });
                }
                var material_purchase_grp_arr = [];
                for (var i = 0; i < this.form.value.material_purchase_grp.length; i++) {
                    material_purchase_grp_arr.push({ pur_group: this.form.value.material_purchase_grp[i] });
                }
                this.form.value.material_purchase_org = material_purchase_org_arr;
                this.form.value.material_purchase_grp = material_purchase_grp_arr;
                if (this.is_taxable_value == false) {
                    this.form.value.material_tax = [];
                }
                this.materialService.updateMaterial(this.form.value, this.material).subscribe(function (response) {
                    _this.toastr.success('Material updated successfully', '', {
                        timeOut: 3000,
                    });
                    _this.goToList('material');
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
    }
    MaterialEditComponent.prototype.ngOnInit = function () {
        this.material = {
            id: '',
            material_type: '',
            material_fullname: '',
            material_code: '',
            description: '',
            is_sales: false,
            is_taxable: false,
            material_uom: [
                {
                    "material_for": '',
                    "base_uom": '',
                    "unit_per_uom": '',
                    "unit_uom": ''
                },
                {
                    "material_for": '',
                    "base_uom": '',
                    "unit_per_uom": '',
                    "unit_uom": ''
                }
            ],
            material_tax: [
                {
                    "tax_for": '',
                    "igst": '',
                    "cgst": '',
                    "sgst": '',
                    "hsn": ''
                },
                {
                    "tax_for": '',
                    "igst": '',
                    "cgst": '',
                    "sgst": '',
                    "hsn": ''
                }
            ],
        };
        this.form = this.formBuilder.group({
            material_type: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            material_code: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            material_fullname: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            material_purchase_org: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            material_purchase_grp: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            description: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            material_uom: this.formBuilder.array([this.createmMaterialUom(1)]),
            is_sales: [false],
            is_taxable: [false],
            material_tax: this.formBuilder.array([this.createmMaterialTax(1)])
        });
        this.getMaterialDetails(this.route.snapshot.params['id']);
        this.getUOMList();
        this.getMaterialTypeList();
        this.getPurchaseGroupActiveList();
        this.getPurchaseOrganizationActiveList();
    };
    MaterialEditComponent.prototype.createmMaterialUom = function (for_id) {
        return this.formBuilder.group({
            material_for: for_id,
            base_uom: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            unit_per_uom: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            unit_uom: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
        });
    };
    MaterialEditComponent.prototype.addMaterialUom = function () {
        var control = this.form.controls['material_uom'];
        control.push(this.createmMaterialUom(2));
        // this.material_uom_arr = this.form.get('material_uom') as FormArray;
        // this.material_uom_arr.push(this.createmMaterialUom(2));
    };
    MaterialEditComponent.prototype.deleteMaterialUom = function (index) {
        var control = this.form.controls['material_uom'];
        control.removeAt(index);
        // this.material_uom_arr.controls.splice(index);
        // this.form.value.material_uom.splice(index);
    };
    MaterialEditComponent.prototype.showHideMaterialUOM = function () {
        if (this.form.value.is_sales != true) {
            this.addMaterialUom();
            if (this.form.value.is_taxable == true) {
                this.addMateriaTax();
            }
        }
        else {
            this.deleteMaterialUom(1);
            if (this.form.value.is_taxable == true) {
                this.deleteMaterialTax(1);
            }
        }
    };
    MaterialEditComponent.prototype.createmMaterialTax = function (for_id) {
        return this.formBuilder.group({
            tax_for: for_id,
            igst: [''],
            cgst: [''],
            sgst: [''],
            hsn: ['']
        });
    };
    MaterialEditComponent.prototype.addMateriaTax = function () {
        var control = this.form.controls['material_tax'];
        control.push(this.createmMaterialTax(2));
        // this.material_tax_arr = this.form.get('material_tax') as FormArray;
        // this.material_tax_arr.push(this.createmMaterialTax(2));
    };
    MaterialEditComponent.prototype.deleteMaterialTax = function (index) {
        var control = this.form.controls['material_tax'];
        control.removeAt(index);
        // this.material_tax_arr.controls.splice(index);
        // this.form.value.material_tax.splice(index);
    };
    MaterialEditComponent.prototype.showHideMaterialTax = function () {
        if (this.form.value.is_taxable != true) {
            this.is_taxable_value = true;
            if (this.form.value.is_sales == true) {
                this.addMateriaTax();
            }
        }
        else {
            this.is_taxable_value = false;
            if (this.form.value.is_sales == true) {
                this.deleteMaterialTax(1);
            }
        }
    };
    MaterialEditComponent.prototype.getMaterialTypeList = function () {
        var _this = this;
        this.materialService.getMaterialTypeList().subscribe(function (data) {
            _this.materialTypeList = data['results'];
        });
    };
    MaterialEditComponent.prototype.btnClickNav = function (toNav) {
        this.router.navigateByUrl('/' + toNav);
    };
    ;
    MaterialEditComponent.prototype.getUOMList = function () {
        var _this = this;
        this.companyService.getUOMList().subscribe(function (data) {
            _this.UOMList = data['results'];
        });
    };
    ;
    MaterialEditComponent.prototype.getPurchaseGroupActiveList = function () {
        var _this = this;
        this.purchaseGroupService.getPurchaseGroupActiveList().subscribe(function (data) {
            _this.purchaseGroupList = data;
        });
    };
    MaterialEditComponent.prototype.getPurchaseOrganizationActiveList = function () {
        var _this = this;
        this.purchaseOrganizationService.getPurchaseOrganizationActiveList().subscribe(function (data) {
            _this.purchaseOrganizationList = data;
        });
    };
    MaterialEditComponent.prototype.goToList = function (toNav) {
        this.router.navigateByUrl('/' + toNav);
    };
    ;
    MaterialEditComponent.prototype.displayFieldCss = function (field) {
        return {
            'is-invalid': this.form.controls[field].invalid && (this.form.controls[field].dirty || this.form.controls[field].touched),
            'is-valid': this.form.controls[field].valid && (this.form.controls[field].dirty || this.form.controls[field].touched)
        };
    };
    MaterialEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-material-edit',
            template: __webpack_require__("./src/app/layout/material/material-edit/material-edit.component.html"),
            styles: [__webpack_require__("./src/app/layout/material/material-edit/material-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__material_service__["a" /* MaterialService */],
            __WEBPACK_IMPORTED_MODULE_4__purchase_organization_purchase_organization_service__["a" /* PurchaseOrganizationService */],
            __WEBPACK_IMPORTED_MODULE_5__purchase_group_purchase_group_service__["a" /* PurchaseGroupService */],
            __WEBPACK_IMPORTED_MODULE_3__company_company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], MaterialEditComponent);
    return MaterialEditComponent;
}());



/***/ }),

/***/ "./src/app/layout/material/material-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_add_material_add_component__ = __webpack_require__("./src/app/layout/material/material-add/material-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_edit_material_edit_component__ = __webpack_require__("./src/app/layout/material/material-edit/material-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_component__ = __webpack_require__("./src/app/layout/material/material.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__material_component__["a" /* MaterialComponent */]
    },
    {
        path: 'add',
        component: __WEBPACK_IMPORTED_MODULE_2__material_add_material_add_component__["a" /* MaterialAddComponent */]
    },
    {
        path: 'edit/:id',
        component: __WEBPACK_IMPORTED_MODULE_3__material_edit_material_edit_component__["a" /* MaterialEditComponent */]
    }
];
var MaterialRoutingModule = /** @class */ (function () {
    function MaterialRoutingModule() {
    }
    MaterialRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], MaterialRoutingModule);
    return MaterialRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/material/material.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h4 class=\"page-header\">Material List</h4>\n    </div>\n    <div class=\"col-md-6 pull-right\" style=\"text-align: right\">\n        <button type=\"button\" class=\"btn btn-secondary\"><i class=\"fa fa-question\" aria-hidden=\"true\"></i> Help</button>\n        <button type=\"button\" class=\"btn btn-secondary\"><i class=\"fa fa-refresh\"></i> Reload</button>\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"btnClickNav('material/add')\"><i class=\"fa fa-plus\"></i> New Material</button>\n    </div>\n    <div class=\"clearfix\"></div>\n  </div>\n    \n  <hr/>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <div class=\"row\">\n            <div class=\"col-md-9\">\n              <h5>Material</h5>\n            </div>\n            <div class=\"col-md-3\">\n              <form role=\"form\" (ngSubmit)=\"dataSearch()\">\n                <div class=\"input-group\">\n                  <input type=\"text\" class=\"form-control\" name=\"search\" placeholder=\"Search\" [(ngModel)]=\"search_key\">\n                  <div class=\"input-group-append\">\n                    <button class=\"btn btn-secondary\" type=\"submit\">\n                      <i class=\"fa fa-search\"></i>\n                    </button>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n\n      </div>\n      <table class=\"card-body table table-hover table-sm table-bordered\">\n          <thead>\n              <tr>\n                  <th>Sl.No.</th>\n                  <th>Type</th>\n                  <th>Name</th>\n                  <th>UOM<small> (Purchase)</small> </th>\n                  <th>UOM<small> (Sale)</small></th>\n                  <th>Tax<small> (Purchase % IGST,CGST,SGST,HSN)</small></th>\n                  <th>Tax<small> (Sale % IGST,CGST,SGST,HSN)</small></th>\n                  <th>Action</th>\n              </tr> \n              </thead>\n              <tbody>\n              <tr *ngFor=\"let  material of materialList ; let i = index\">\n                  <th scope=\"row\">{{i+1}}</th>\n                  <td>{{material.material_type.material_type}}</td>\n                  <td>{{material.material_fullname}}</td>\n                  <td>{{material.material_uom[0].base_uom.name}} - {{material.material_uom[0]['unit_per_uom']}} {{material.material_uom[0].unit_uom.name}}</td>\n                  <td><span *ngIf=\"material.is_sales==true\">{{material.material_uom[1].base_uom.name}} - {{material.material_uom[1]['unit_per_uom']}} {{material.material_uom[1].unit_uom.name}}</span></td>\n                  <td><span *ngIf=\"material.is_taxable==true\">{{material.material_tax[0]['igst']}} - {{material.material_tax[0]['cgst']}} - {{material.material_tax[0]['sgst']}} - {{material.material_tax[0]['hsn']}}</span></td>\n                  <td><span *ngIf=\"material.is_sales==true && material.is_taxable==true\">{{material.material_tax[1]['igst']}} - {{material.material_tax[1]['cgst']}} - {{material.material_tax[1]['sgst']}} - {{material.material_tax[1]['hsn']}}</span></td>\n                  <td>\n                    <a href=\"javascript:void(0);\" title=\"Edit\" name=\"Edit\" [routerLink]=\"['/material/edit', material.id]\"><i class=\"fa fa-eye\"></i></a>&nbsp;&nbsp;&nbsp;\n                    <a href=\"javascript:void(0);\" title=\"Map\" name=\"Map\" (click)=\"deleteMaterial(material.id)\">\n                        <i class=\"fa fa-trash-o\"></i>\n                      </a>\n                  </td>\n              </tr>\n          </tbody>\n      </table>\n    </div>\n  </div>\n  </div>\n  <div class=\"row\" *ngIf=\"totalMaterialList > 10\">\n    <div class=\"col-md-12\">\n      <div class=\"card-body pull-right\">\n        <ngb-pagination [collectionSize]=\"totalMaterialList\" [(page)]=\"defaultPagination\" (pageChange)=\"pagination()\" size=\"sm\"></ngb-pagination>\n      </div>\n    </div>\n  </div>\n  \n</div>\n"

/***/ }),

/***/ "./src/app/layout/material/material.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/material/material.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_service__ = __webpack_require__("./src/app/layout/material/material.service.ts");
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




var MaterialComponent = /** @class */ (function () {
    function MaterialComponent(materialService, router, toastr) {
        this.materialService = materialService;
        this.router = router;
        this.toastr = toastr;
        this.materialList = [];
        this.search_key = '';
        this.deleteMaterial = function (id) {
            var _this = this;
            var material;
            material = {
                id: id
            };
            this.materialService.deleteMaterial(material).subscribe(function (response) {
                _this.toastr.success('Material deleted successfully', '', {
                    timeOut: 3000,
                });
                _this.getMaterialList();
            }, function (error) {
                console.log('error', error);
                // this.toastr.error('everything is broken', '', {
                //   timeOut: 3000,
                // });
            });
        };
    }
    MaterialComponent.prototype.ngOnInit = function () {
        this.defaultPagination = 1;
        this.defaultPagination = 1;
        this.getMaterialList();
    };
    MaterialComponent.prototype.dataSearch = function () {
        this.defaultPagination = 1;
        this.getMaterialList();
    };
    MaterialComponent.prototype.getMaterialList = function () {
        var _this = this;
        var params = new URLSearchParams();
        params.set('page', this.defaultPagination.toString());
        params.set('search', this.search_key.toString());
        this.materialService.getMaterialList(params).subscribe(function (data) {
            _this.totalMaterialList = data['count'];
            _this.materialList = data['results'];
            console.log(_this.materialList);
        });
    };
    ;
    MaterialComponent.prototype.btnClickNav = function (toNav) {
        this.router.navigateByUrl('/' + toNav);
    };
    ;
    MaterialComponent.prototype.pagination = function () {
        this.getMaterialList();
    };
    ;
    MaterialComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-material',
            template: __webpack_require__("./src/app/layout/material/material.component.html"),
            styles: [__webpack_require__("./src/app/layout/material/material.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__material_service__["a" /* MaterialService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]])
    ], MaterialComponent);
    return MaterialComponent;
}());



/***/ }),

/***/ "./src/app/layout/material/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_routing_module__ = __webpack_require__("./src/app/layout/material/material-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_add_material_add_component__ = __webpack_require__("./src/app/layout/material/material-add/material-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_edit_material_edit_component__ = __webpack_require__("./src/app/layout/material/material-edit/material-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_component__ = __webpack_require__("./src/app/layout/material/material.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__material_service__ = __webpack_require__("./src/app/layout/material/material.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__company_company_service__ = __webpack_require__("./src/app/layout/company/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__purchase_organization_purchase_organization_service__ = __webpack_require__("./src/app/layout/purchase-organization/purchase-organization.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__purchase_group_purchase_group_service__ = __webpack_require__("./src/app/layout/purchase-group/purchase-group.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__material_routing_module__["a" /* MaterialRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared__["b" /* PageHeaderModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__material_add_material_add_component__["a" /* MaterialAddComponent */], __WEBPACK_IMPORTED_MODULE_7__material_edit_material_edit_component__["a" /* MaterialEditComponent */], __WEBPACK_IMPORTED_MODULE_8__material_component__["a" /* MaterialComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_10__material_service__["a" /* MaterialService */], __WEBPACK_IMPORTED_MODULE_11__company_company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_12__purchase_organization_purchase_organization_service__["a" /* PurchaseOrganizationService */], __WEBPACK_IMPORTED_MODULE_13__purchase_group_purchase_group_service__["a" /* PurchaseGroupService */]]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ })

});
//# sourceMappingURL=material.module.chunk.js.map