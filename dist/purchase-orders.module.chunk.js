webpackJsonp(["purchase-orders.module"],{

/***/ "./node_modules/number-to-words/numberToWords.min.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(){"use strict";function e(e){return!("number"!=typeof e||e!==e||e===1/0||e===-(1/0))}function t(e){return h.test(e)||s.test(e)?e+"th":u.test(e)?e.replace(u,"ieth"):a.test(e)?e.replace(a,n):e}function n(e,t){return d[t]}function o(t){var n=parseInt(t,10);if(!e(n))throw new TypeError("Not a finite number: "+t+" ("+typeof t+")");var o=String(n),r=n%100,i=r>=11&&13>=r,f=o.charAt(o.length-1);return o+(i?"th":"1"===f?"st":"2"===f?"nd":"3"===f?"rd":"th")}function r(n,o){var r,f=parseInt(n,10);if(!e(f))throw new TypeError("Not a finite number: "+n+" ("+typeof n+")");return r=i(f),o?t(r):r}function i(e){var t,n,o=arguments[1];return 0===e?o?o.join(" ").replace(/,$/,""):"zero":(o||(o=[]),0>e&&(o.push("minus"),e=Math.abs(e)),20>e?(t=0,n=x[e]):p>e?(t=e%v,n=M[Math.floor(e/v)],t&&(n+="-"+x[t],t=0)):y>e?(t=e%p,n=i(Math.floor(e/p))+" hundred"):c>e?(t=e%y,n=i(Math.floor(e/y))+" thousand,"):b>e?(t=e%c,n=i(Math.floor(e/c))+" million,"):g>e?(t=e%b,n=i(Math.floor(e/b))+" billion,"):m>e?(t=e%g,n=i(Math.floor(e/g))+" trillion,"):w>=e&&(t=e%m,n=i(Math.floor(e/m))+" quadrillion,"),o.push(n),i(t,o))}function f(e){var n=r(e);return t(n)}var l="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||this,h=/(hundred|thousand|(m|b|tr|quadr)illion)$/,s=/teen$/,u=/y$/,a=/(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/,d={zero:"zeroth",one:"first",two:"second",three:"third",four:"fourth",five:"fifth",six:"sixth",seven:"seventh",eight:"eighth",nine:"ninth",ten:"tenth",eleven:"eleventh",twelve:"twelfth"},v=10,p=100,y=1e3,c=1e6,b=1e9,g=1e12,m=1e15,w=9007199254740992,x=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],M=["zero","ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"],z={toOrdinal:o,toWords:r,toWordsOrdinal:f}; true?("undefined"!=typeof module&&module.exports&&(exports=module.exports=z),exports.numberToWords=z):l.numberToWords=z}();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/app/layout/purchase-orders/purchase-details/purchase-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <!-- <app-page-header [heading]=\"'Company Details'\" [icon]=\"'fa fa-university'\"></app-page-header> -->\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <h4 class=\"page-header\">Purchase Order Details</h4>\r\n    </div>\r\n    <div class=\"col-md-6 pull-right\" style=\"text-align: right\">\r\n      <button type=\"button\" class=\"btn btn-secondary\">\r\n        <i class=\"fa fa-question\" aria-hidden=\"true\"></i> Help</button>\r\n      <button type=\"button\" class=\"btn btn-secondary\">\r\n        <i class=\"fa fa-refresh\"></i> Reload</button>\r\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"btnClickNav('purchase-orders')\">\r\n        <i class=\"fa fa-arrow-left\"></i> Back</button>\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n  </div>\r\n  <hr/>\r\n\r\n  <div *ngIf=\"visible_key\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"card bg-light mb-3\">\r\n          <div class=\"card-header\" style=\"background-color:#868e96; color: #fff;\">Purchase Order Number : {{purchaseOrder.purchase_order_map[0].purchase_order_no}} </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <table class=\"card-body table table-sm table-bordered\">\r\n\r\n                  <tbody>\r\n                    <tr>\r\n                      <td>\r\n                        <label>PO Number : </label>\r\n                      </td>\r\n                      <td>\r\n                        <label>{{purchaseOrder.purchase_order_map[0].purchase_order_no}}</label>\r\n                      </td>\r\n                      <td>\r\n                        <label>PR Number : </label>\r\n                      </td>\r\n                      <td>\r\n                        <label>{{purchaseOrder.requisition_no[0].requisition_no}}</label>\r\n                      </td>\r\n\r\n                    </tr>\r\n                    <tr>\r\n                      <td>\r\n                        <label>Purchase Org : </label>\r\n                      </td>\r\n                      <td>\r\n                        <label>{{purchaseOrder.pur_org.name}}</label>\r\n                      </td>\r\n                      <td>\r\n                        <label>Purchase Group : </label>\r\n                      </td>\r\n                      <td>\r\n                        <label>{{purchaseOrder.pur_grp.name}}</label>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>\r\n                        <label>Vendor Name : </label>\r\n                      </td>\r\n                      <td>\r\n                        <label>{{purchaseOrder.vendor}}</label>\r\n                      </td>\r\n                      <td>\r\n                        <label>Vendor Address : </label>\r\n                      </td>\r\n                      <td>\r\n                        <label>{{purchaseOrder.vendor_address.address}}</label>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>\r\n                        <label>PO Date : </label>\r\n                      </td>\r\n                      <td>\r\n                        <label>{{purchaseOrder.quotation_date | date:'yyy-MM-dd'}}</label>\r\n                      </td>\r\n                      <td>\r\n                        <label>PR Raised Date : </label>\r\n                      </td>\r\n                      <td>\r\n                        <label>{{getRequisitionDate(purchaseOrder.requisition_no[0].requisition_no)}}</label>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>\r\n                        <label>Indent Raised By :</label>\r\n                      </td>\r\n                      <td colspan=\"3\">\r\n                        <label>{{purchaseOrder.created_by.first_name}}</label>\r\n                      </td>\r\n\r\n                    </tr>\r\n                  </tbody>\r\n\r\n                </table>\r\n              </div>\r\n              <div class=\"col-md-12\">\r\n                <h4>Items ordered</h4>\r\n                <hr/>\r\n              </div>\r\n              <div class=\"col-md-12\">\r\n                <table class=\"card-body table table-hover table-sm table-bordered\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>\r\n                        <label>Item</label>\r\n                      </th>\r\n                      <th>\r\n                        <label>Quantity</label>\r\n                      </th>\r\n                      <th>\r\n                        <label>Rate/Unit</label>\r\n                      </th>\r\n                      <th>\r\n                        <label>Material Value</label>\r\n                      </th>\r\n                      <th>\r\n                        <label>Disc(%)</label>\r\n                      </th>\r\n                      <th>\r\n                        <label>Disc Amount</label>\r\n                      </th>\r\n                      <th>\r\n                        <label>IGST(%)</label>\r\n                      </th>\r\n                      <th>\r\n                        <label>SGST(%)</label>\r\n                      </th>\r\n                      <th>\r\n                        <label>CGST(%)</label>\r\n                      </th>\r\n                      <th>\r\n                        <label>GST Amount</label>\r\n                      </th>\r\n                      <th>\r\n                        <label>Sub Total</label>\r\n                      </th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let item of purchaseOrder.purchase_order_detail\">\r\n                      <td>\r\n                        <label>{{item.material}}</label>\r\n                      </td>\r\n                      <td>\r\n                        <label>{{item.order_quantity}}</label>\r\n                      </td>\r\n                      <td>\r\n                        <label>{{item.rate}}</label>\r\n                      </td>\r\n                      <td>\r\n                        <label>{{item.material_value}}</label>\r\n                      </td>\r\n                      <td>\r\n                        <label>{{item.discount_percent}}</label>\r\n                      </td>\r\n                      <td>\r\n                        <label>{{item.discount_value}}</label>\r\n                      </td>\r\n                      <td>\r\n                        <label>{{item.igst}}</label>\r\n                      </td>\r\n                      <td>\r\n                        <label>{{item.sgst}}</label>\r\n                      </td>\r\n                      <td>\r\n                        <label>{{item.cgst}}</label>\r\n                      </td>\r\n                      <td>\r\n                        <label>{{item.gst_amount}}</label>\r\n                      </td>\r\n                      <td>\r\n                        <label>{{item.sub_total}}</label>\r\n                      </td>\r\n                    </tr>\r\n                    <tr><td colspan=\"9\"></td><td>Grand Total</td><td>{{purchaseOrder.grand_total}}</td></tr>\r\n                    <tr><td colspan=\"11\">Amount in words : <strong>{{purchaseOrder.grand_total_words}}</strong></td></tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <div class=\"col-md-12\">\r\n                <h4>Terms and Conditions</h4>\r\n                <hr/>\r\n              </div>\r\n              <div class=\"col-md-12\">\r\n                <table class=\"card-body table table-hover table-sm table-bordered\">                 \r\n                  <thead>\r\n                    <tr>\r\n                      <th>\r\n                        <label>Sl.No.</label>\r\n                      </th>\r\n                      <th>\r\n                        <label>Description</label>\r\n                      </th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let term of purchaseOrder.purchase_order_terms; let i= index\">\r\n                      <td>\r\n                        <label>{{i + 1}}</label>\r\n                      </td>\r\n                      <td>\r\n                        <label>{{term.po_terms.term_text}}</label>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/layout/purchase-orders/purchase-details/purchase-details.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/purchase-orders/purchase-details/purchase-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurchaseDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__purchase_orders_service__ = __webpack_require__("./src/app/layout/purchase-orders/purchase-orders.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PurchaseDetailsComponent = /** @class */ (function () {
    function PurchaseDetailsComponent(purchaseOrdersService, router, route) {
        this.purchaseOrdersService = purchaseOrdersService;
        this.router = router;
        this.route = route;
    }
    PurchaseDetailsComponent.prototype.ngOnInit = function () {
        this.getPurchaseOrderDetails(this.route.snapshot.params['id']);
    };
    PurchaseDetailsComponent.prototype.getPurchaseOrderDetails = function (id) {
        var _this = this;
        this.purchaseOrdersService.getPurchaseOrderDetails(id).subscribe(function (data) {
            _this.purchaseOrder = data;
            _this.visible_key = true;
            // console.log(this.purchaseOrder);
        });
    };
    PurchaseDetailsComponent.prototype.btnClickNav = function (toNav) {
        this.router.navigateByUrl('/' + toNav);
    };
    ;
    PurchaseDetailsComponent.prototype.getRequisitionDate = function (date) {
        var PrDate = date.split('/');
        return PrDate[0];
    };
    PurchaseDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-purchase-details',
            template: __webpack_require__("./src/app/layout/purchase-orders/purchase-details/purchase-details.component.html"),
            styles: [__webpack_require__("./src/app/layout/purchase-orders/purchase-details/purchase-details.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__purchase_orders_service__["a" /* PurchaseOrdersService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], PurchaseDetailsComponent);
    return PurchaseDetailsComponent;
}());



/***/ }),

/***/ "./src/app/layout/purchase-orders/purchase-orders-add/purchase-orders-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <!-- <app-page-header [heading]=\"'Purchase Order Add'\" [icon]=\"'fa fa-university'\"></app-page-header> -->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <h4 class=\"page-header\">Purchase Order Add</h4>\r\n        </div>\r\n        <div class=\"col-md-6 pull-right\" style=\"text-align: right\">\r\n            <button type=\"button\" class=\"btn btn-secondary\">\r\n                <i class=\"fa fa-question\" aria-hidden=\"true\"></i> Help</button>\r\n            <button type=\"button\" class=\"btn btn-secondary\">\r\n                <i class=\"fa fa-refresh\"></i> Reload</button>\r\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"btnClickNav('purchase-orders')\">\r\n                <i class=\"fa fa-arrow-left\"></i> Back</button>\r\n        </div>\r\n        <div class=\"clearfix\"></div>\r\n    </div>\r\n    <hr/>\r\n    <div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <form role=\"form\" [formGroup]=\"form\" novalidate>\r\n                    <div class=\"card bg-light mb-3\">\r\n                        <div class=\"card-header\" style=\"background-color:#868e96; color: #fff;\">Pruchase Order Add</div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-3\">\r\n                                    <label>Requisition No.</label>\r\n                                    <select class=\"form-control\" (change)=\"requisitionChange($event.target.value)\" name=\"requisition\" formControlName=\"requisition\"\r\n                                        [ngClass]=\"displayFieldCss('requisition')\">\r\n                                        <option value=\"\">Select Requisition</option>\r\n                                        <option value=\"{{requisition.id}}\" *ngFor=\"let requisition of requisition_list\">{{requisition.requisition_map[0].requisition_no}}</option>\r\n                                    </select>\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['requisition'].hasError('required')\">\r\n                                        Please select requisition\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-3\">\r\n                                    <label>Vendor</label>\r\n                                    <select class=\"form-control\" (change)=\"vendorChange($event.target.value)\" name=\"vendor\" formControlName=\"vendor\" [ngClass]=\"displayFieldCss('vendor')\">\r\n                                        <option value=\"\">Select vendor</option>\r\n                                        <option value=\"{{vendor.id}}\" *ngFor=\"let vendor of vendor_list\">{{vendor.vendor_fullname}}</option>\r\n                                    </select>\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['vendor'].hasError('required')\">\r\n                                        Please select vendor\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-2\">\r\n                                    <label>Vendor Address</label>\r\n                                    <select class=\"form-control\" name=\"vendor_address\" formControlName=\"vendor_address\" [ngClass]=\"displayFieldCss('vendor_address')\">\r\n                                        <option value=\"\">Select address</option>\r\n                                        <option value=\"{{address.id}}\" *ngFor=\"let address of vendor_address_list\">{{address.address}}</option>\r\n                                    </select>\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['vendor_address'].hasError('required')\">\r\n                                        Please select vendor address\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-2\">\r\n                                    <label>Quotation No.</label>\r\n                                    <input class=\"form-control\" placeholder=\"Quotation No.\" name=\"quotation_no\" formControlName=\"quotation_no\" [ngClass]=\"displayFieldCss('quotation_no')\">\r\n                                    <div class=\"invalid-feedback\" *ngIf=\"form.controls['quotation_no'].hasError('required')\">\r\n                                        Please enter quotation no\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-md-2\">\r\n                                    <label>Quotation Date</label>\r\n                                    <div class=\"input-group\">\r\n                                        <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"quotation_date\" ngbDatepicker #d=\"ngbDatepicker\" name=\"quotation_date\"\r\n                                            formControlName=\"quotation_date\" [ngClass]=\"displayFieldCss('quotation_date')\">\r\n                                        <div class=\"input-group-append\">\r\n                                            <button class=\"btn btn-outline-secondary\" (click)=\"d.toggle()\" type=\"button\">\r\n                                                <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                                            </button>\r\n                                        </div>\r\n                                        <div class=\"invalid-feedback\" *ngIf=\"form.controls['quotation_date'].hasError('required')\">\r\n                                            Please enter quotation date\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"card bg-light mb-3\" *ngIf=\"visible_key\">\r\n                                <div class=\"card-header\">Material Details</div>\r\n                                <div class=\"card-body\">\r\n                                    <table class=\"card-body table table-sm table-bordered\">\r\n                                        <thead>\r\n                                            <tr>\r\n                                                <th></th>\r\n                                                <th>Material</th>\r\n                                                <th>PR. Quantity</th>\r\n                                                <th>UOM</th>\r\n                                                <th>Plant</th>\r\n                                                <th>Storage</th>\r\n                                                <th>Bin</th>\r\n                                                <th>HSN/SAC</th>\r\n                                                <th>IGST(%)</th>\r\n                                                <th>CGST(%)</th>\r\n                                                <th>SGST(%)</th>\r\n                                                <th>GST Amount</th>\r\n                                                <th>PO Quantity</th>\r\n                                                <th>Rate</th>\r\n                                                <th>Discount(%)</th>\r\n                                                <th>Delivery Date</th>\r\n                                                <th>Sub Total</th>\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                            <tr *ngFor=\"let mat of requisition_details.requisition_detail; let k = index\">\r\n                                                <th scope=\"row\" width=\"20px\">\r\n                                                    <input type=\"checkbox\" (change)=\"matCheck($event, mat)\">\r\n                                                </th>\r\n                                                <td>{{mat.material.material_code}}({{mat.material.material_fullname}})</td>\r\n                                                <td>{{mat.quantity}}</td>\r\n                                                <td>{{mat.uom.name}}</td>\r\n                                                <td>{{mat.branch.branch_name}}</td>\r\n                                                <td>{{mat.storage_location.storage_address}}</td>\r\n                                                <td>{{mat.storage_bin.bin_no}}</td>\r\n                                                <td>{{mat.material.material_tax[0].hsn}}</td>\r\n                                                <td>{{mat.material.material_tax[0].igst}}</td>\r\n                                                <td>{{mat.material.material_tax[0].cgst}}</td>\r\n                                                <td>{{mat.material.material_tax[0].sgst}}</td>\r\n                                                <td width=\"80px\">\r\n                                                    <input type=\"number\" class=\"form-control\" name=\"gst_amount\" [(ngModel)]=\"material_details_list[k].gst_amount\" [ngModelOptions]=\"{standalone: true}\">\r\n                                                </td>\r\n                                                <td width=\"80px\">\r\n                                                    <input type=\"number\" class=\"form-control\" name=\"order_quantity\" [(ngModel)]=\"material_details_list[k].order_quantity\" (keyup)=\"getSubTotal(material_details_list[k].order_quantity,material_details_list[k].rate,material_details_list[k].discount_percent, k)\" [ngModelOptions]=\"{standalone: true}\">\r\n                                                </td>\r\n                                                <td width=\"80px\">\r\n                                                    <input type=\"number\" class=\"form-control\" name=\"rate\" [(ngModel)]=\"material_details_list[k].rate\" (keyup)=\"getSubTotal(material_details_list[k].order_quantity,material_details_list[k].rate,material_details_list[k].discount_percent, k)\" [ngModelOptions]=\"{standalone: true}\">\r\n                                                </td>\r\n                                                <td width=\"80px\">\r\n                                                    <input type=\"number\" class=\"form-control\" name=\"discount_percent\" [(ngModel)]=\"material_details_list[k].discount_percent\" (keyup)=\"getSubTotal(material_details_list[k].order_quantity,material_details_list[k].rate,material_details_list[k].discount_percent, k)\" [ngModelOptions]=\"{standalone: true}\">\r\n                                                </td>\r\n                                                <td width=\"150px\">\r\n                                                    <div class=\"input-group\">\r\n                                                        <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"delivery_date\" ngbDatepicker #i=\"ngbDatepicker\" [(ngModel)]=\"material_details_list[k].delivery_date\"  [ngModelOptions]=\"{standalone: true}\">\r\n                                                        <div class=\"input-group-append\">\r\n                                                            <button class=\"btn btn-outline-secondary\" (click)=\"i.toggle()\" type=\"button\">\r\n                                                                <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                                                            </button>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </td>\r\n                                                <td width=\"80px\">\r\n                                                    <input type=\"number\" class=\"form-control\" name=\"sub_total\" [(ngModel)]=\"material_details_list[k].sub_total\" [ngModelOptions]=\"{standalone: true}\" readonly>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"card bg-light mb-3\" *ngIf=\"visible_key\">\r\n                                <div class=\"card-header\">Freight Details</div>\r\n                                <div class=\"card-body\">\r\n                                    <div class=\"row\" formArrayName=\"purchase_order_freight\" *ngFor=\"let freight of form.get('purchase_order_freight').controls; let i = index;\">\r\n                                        <div [formGroupName]=\"i\" class=\"col-md-12\">\r\n                                            <div class=\"row\">\r\n                                                <!-- <div class=\"form-group col-md-2\">\r\n                                                    <label>Freight Option</label>\r\n                                                    <div class=\"input-group\">\r\n                                                        <label class=\"radio-inline\">\r\n                                                            <input type=\"radio\" name=\"freight\" value=\"vendor\"> Vendor</label>\r\n                                                        <label class=\"radio-inline\">\r\n                                                            <input type=\"radio\" name=\"freight\" value=\"own\"> Own</label>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"form-group col-md-3\">\r\n                                                    <label>Freight Vendor</label>\r\n                                                    <select class=\"form-control\">\r\n                                                        <option value=\"\">Select Transporter</option>\r\n                                                        <option>ATC</option>\r\n                                                        <option>Test Transporter name</option>\r\n                                                        <option>ATC</option>\r\n                                                        <option>Test Transporter name</option>\r\n                                                    </select>\r\n                                                </div> -->\r\n                                                <!-- <div class=\"form-group col-md-2\">\r\n                                                    <label>Rate </label>\r\n                                                    <input type=\"number\" class=\"form-control\" name=\"freight_rate\" formControlName=\"freight_rate\" [ngClass]=\"{\r\n                                                        'is-invalid': freight.get('freight_rate').invalid && (freight.get('freight_rate').dirty || freight.get('freight_rate').touched),\r\n                                                        'is-valid': freight.get('freight_rate').valid && (freight.get('freight_rate').dirty || freight.get('freight_rate').touched)\r\n                                                      }\" (keyup)=\"getFreightTotal(freight.get('freight_rate').value, freight.get('freight_amount').value, freight.get('freight_gst_rate').value, i)\">\r\n                                                    <div class=\"invalid-feedback\" *ngIf=\"freight.get('freight_rate').touched && freight.get('freight_rate').hasError('required')\">\r\n                                                        Please enter rate\r\n                                                    </div>\r\n                                                </div> -->\r\n                                                <div class=\"form-group col-md-2\">\r\n                                                    <label>Freight Amount </label>\r\n                                                    <input type=\"number\" class=\"form-control\" name=\"freight_amount\" formControlName=\"freight_amount\" [ngClass]=\"{\r\n                                                        'is-invalid': freight.get('freight_amount').invalid && (freight.get('freight_amount').dirty || freight.get('freight_amount').touched),\r\n                                                        'is-valid': freight.get('freight_amount').valid && (freight.get('freight_amount').dirty || freight.get('freight_amount').touched)\r\n                                                      }\" (keyup)=\"getFreightTotal(freight.get('freight_rate').value, freight.get('freight_amount').value, freight.get('freight_gst_rate').value, i)\">\r\n                                                    <div class=\"invalid-feedback\" *ngIf=\"freight.get('freight_amount').touched && freight.get('freight_amount').hasError('required')\">\r\n                                                        Please enter freight amount\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"form-group col-md-2\">\r\n                                                    <label>GST </label>\r\n                                                    <select class=\"form-control\" name=\"freight_gst_rate\" formControlName=\"freight_gst_rate\" [ngClass]=\"{\r\n                                                        'is-invalid': freight.get('freight_gst_rate').invalid && (freight.get('freight_gst_rate').dirty || freight.get('freight_gst_rate').touched),\r\n                                                        'is-valid': freight.get('freight_gst_rate').valid && (freight.get('freight_gst_rate').dirty || freight.get('freight_gst_rate').touched)\r\n                                                      }\" (change)=\"getFreightTotal(freight.get('freight_rate').value, freight.get('freight_amount').value, freight.get('freight_gst_rate').value, i)\">\r\n                                                        <option value=\"\">Select GST</option>\r\n                                                        <option value=\"{{gst.id}}\" *ngFor=\"let gst of gst_rates_list\">{{gst.gst_pattern}}</option>\r\n                                                    </select>\r\n                                                    <div class=\"invalid-feedback\" *ngIf=\"freight.get('freight_gst_rate').touched && freight.get('freight_gst_rate').hasError('required')\">\r\n                                                        Please enter GST\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"form-group col-md-2\">\r\n                                                    <label>Freight Total</label>\r\n                                                    <input type=\"number\" class=\"form-control\" name=\"freight_total\" [(ngModel)]=\"form.value.purchase_order_freight[i].freight_total\"\r\n                                                        formControlName=\"freight_total\" readonly>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"card bg-light mb-3\" *ngIf=\"visible_key\">\r\n                                <div class=\"card-header\">Terms & Conditions</div>\r\n                                <div class=\"card-body\">\r\n                                    <div class=\"row\">\r\n                                        <div *ngFor=\"let term of terms_condition_list;let i = index\" class=\"col-md-2\">\r\n                                            <div class=\"form-control\">\r\n                                                <input type=\"checkbox\" (change)=\"termsCheck($event, term.id)\">\r\n                                                <label>{{term.term_text}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"card bg-light mb-3\" *ngIf=\"visible_key\">\r\n                                <div class=\"card-header\">PO Amount</div>\r\n                                <div class=\"card-body\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"form-group col-md-2\">\r\n                                            <label>Total Amount(GST included)</label>\r\n                                            <input class=\"form-control\" placeholder=\"Quotation No.\" name=\"grand_total\" formControlName=\"grand_total\"  [(ngModel)]=\"form.value.grand_total\" readonly>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-12\" style=\"text-align: right\">\r\n                                    <button type=\"submit\" class=\"btn btn-success\" (click)=\"addPurchaseOrder()\">Submit</button>\r\n                                    <button type=\"reset\" class=\"btn btn-secondary\" (click)=\"reSet()\">Reset</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/purchase-orders/purchase-orders-add/purchase-orders-add.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/purchase-orders/purchase-orders-add/purchase-orders-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurchaseOrdersAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__company_company_service__ = __webpack_require__("./src/app/layout/company/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__purchase_requisition_purchase_requisition_service__ = __webpack_require__("./src/app/layout/purchase-requisition/purchase-requisition.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_material_service__ = __webpack_require__("./src/app/layout/material/material.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__purchase_orders_service__ = __webpack_require__("./src/app/layout/purchase-orders/purchase-orders.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__vendor_vendor_service__ = __webpack_require__("./src/app/layout/vendor/vendor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__terms_condition_terms_condition_service__ = __webpack_require__("./src/app/layout/terms-condition/terms-condition.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__gst_rates_gst_rates_service__ = __webpack_require__("./src/app/layout/gst-rates/gst-rates.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var converter = __webpack_require__("./node_modules/number-to-words/numberToWords.min.js");
var PurchaseOrdersAddComponent = /** @class */ (function () {
    function PurchaseOrdersAddComponent(router, formBuilder, toastr, purchaseOrdersService, purchaseRequisitionService, materialService, companyService, vendorService, termsConditionService, gstRatesService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.purchaseOrdersService = purchaseOrdersService;
        this.purchaseRequisitionService = purchaseRequisitionService;
        this.materialService = materialService;
        this.companyService = companyService;
        this.vendorService = vendorService;
        this.termsConditionService = termsConditionService;
        this.gstRatesService = gstRatesService;
        this.purchase_order_detail = [];
        this.purchase_order_freight = [];
        this.purchase_order_terms = [];
        this.requisition_list = [];
        this.vendor_list = [];
        this.vendor_address_list = [];
        this.terms_condition_list = [];
        this.gst_rates_list = [];
        this.material_details_list = [];
        this.sum = 0;
        this.btnClickNav = function (toNav) {
            this.router.navigateByUrl('/' + toNav);
        };
        this.clearFormArray = function (formArray) {
            while (formArray.length !== 0) {
                formArray.removeAt(0);
            }
        };
    }
    PurchaseOrdersAddComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            requisition: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            quotation_no: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            quotation_date: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            pur_org: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            pur_grp: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            company: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            vendor: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            vendor_address: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            grand_total: [0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            grand_total_words: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            purchase_order_detail: this.formBuilder.array([]),
            purchase_order_freight: this.formBuilder.array([]),
            purchase_order_terms: this.formBuilder.array([]),
        });
        this.getRequisitionList();
        this.getVendorList();
        this.getTermsConditionList();
        this.getGstRatesList();
    };
    PurchaseOrdersAddComponent.prototype.getGstRatesList = function () {
        var _this = this;
        this.gstRatesService.getGSTListWithoutPagination().subscribe(function (res) {
            _this.gst_rates_list = res;
            // console.log(res)
        });
    };
    PurchaseOrdersAddComponent.prototype.getTermsConditionList = function () {
        var _this = this;
        this.termsConditionService.getTermsListWithoutPagination().subscribe(function (res) {
            _this.terms_condition_list = res;
            // console.log(this.terms_condition_list)
        });
    };
    PurchaseOrdersAddComponent.prototype.getVendorList = function () {
        var _this = this;
        this.vendorService.getVendorListWithoutPagination().subscribe(function (res) {
            _this.vendor_list = res;
        });
    };
    PurchaseOrdersAddComponent.prototype.getRequisitionList = function () {
        var _this = this;
        this.purchaseRequisitionService.getPurchaseRequisitionListWithoutPagination().subscribe(function (res) {
            _this.requisition_list = res;
        });
    };
    PurchaseOrdersAddComponent.prototype.vendorChange = function (id) {
        var _this = this;
        this.vendorService.getVendorDetails(id).subscribe(function (res) {
            _this.vendor_address_list = res.vendor_address;
        });
    };
    PurchaseOrdersAddComponent.prototype.requisitionChange = function (id) {
        var _this = this;
        var order_freight_control = this.form.controls['purchase_order_freight'];
        var order_detail_control = this.form.controls['purchase_order_detail'];
        var order_terms_control = this.form.controls['purchase_order_terms'];
        if (id) {
            this.clearFormArray(order_freight_control);
            this.requisition_details = '';
            this.material_details_list = [];
            this.sum = 0;
            this.form.patchValue({
                grand_total: this.sum
            });
            this.purchaseRequisitionService.getPurchaseRequisitionDetails(id).subscribe(function (res) {
                _this.requisition_details = res;
                _this.requisition_details.requisition_detail.forEach(function (x) {
                    var Mdtl = {
                        material: x.material.id,
                        gst_amount: '',
                        order_quantity: '',
                        rate: '',
                        discount_percent: '',
                        delivery_date: '',
                        sub_total: ''
                    };
                    _this.material_details_list.push(Mdtl);
                });
                _this.form.patchValue({
                    company: _this.requisition_details.company.id,
                    pur_org: _this.requisition_details.purchase_grp.id,
                    pur_grp: _this.requisition_details.purchase_org.id
                });
                if (_this.requisition_details.requisition_detail.length > 0) {
                    order_freight_control.push(_this.create_purchase_order_freight());
                    _this.visible_key = true;
                }
            });
        }
        else {
            this.clearFormArray(order_freight_control);
            this.clearFormArray(order_detail_control);
            this.clearFormArray(order_terms_control);
            this.material_details_list = [];
            this.visible_key = false;
        }
    };
    // order deatils
    PurchaseOrdersAddComponent.prototype.create_purchase_order_detail = function (mat) {
        return this.formBuilder.group({
            company_branch: [mat.branch.id, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            storage_location: [mat.storage_location.id, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            storage_bin: [mat.storage_bin.id, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            material: [mat.material.id, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            uom: [mat.uom.id, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            requisition_quantity: [mat.quantity, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            order_quantity: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            rate: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            material_value: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            discount_percent: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            discount_value: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            igst: [mat.material.material_tax[0].igst, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            cgst: [mat.material.material_tax[0].cgst, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            sgst: [mat.material.material_tax[0].sgst, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            gst_amount: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            sub_total: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            delivery_date: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
        });
    };
    PurchaseOrdersAddComponent.prototype.add_purchase_order_detail = function (mat) {
        var control = this.form.controls['purchase_order_detail'];
        control.push(this.create_purchase_order_detail(mat));
    };
    PurchaseOrdersAddComponent.prototype.delete_purchase_order_detail = function (index) {
        var control = this.form.controls['purchase_order_detail'];
        control.removeAt(index);
    };
    PurchaseOrdersAddComponent.prototype.matCheck = function (val, mat) {
        var _this = this;
        if (val.currentTarget.checked) {
            this.add_purchase_order_detail(mat);
        }
        else {
            var index = this.form.value.purchase_order_detail.findIndex(function (p) { return p.material == mat.material.id; });
            this.delete_purchase_order_detail(index);
        }
        this.sum = 0;
        this.material_details_list.forEach(function (x) {
            var Mindex = _this.form.value.purchase_order_detail.findIndex(function (p) { return p.material == x.material; });
            if (Mindex > -1) {
                _this.sum += Math.round(x.sub_total);
            }
        });
        this.form.patchValue({
            grand_total: this.sum,
            grand_total_words: converter.toWords(this.sum)
        });
    };
    PurchaseOrdersAddComponent.prototype.getSubTotal = function (quantity, rate, discount, i) {
        var _this = this;
        if (Math.round(quantity) > Math.round(this.requisition_details.requisition_detail[i].quantity)) {
            this.material_details_list[i].order_quantity = Math.round(this.requisition_details.requisition_detail[i].quantity);
            this.toastr.error('Please enter less then PR quantity', '', {
                timeOut: 3000,
            });
        }
        if (quantity != "" && rate != "" && discount != "") {
            this.material_details_list[i].sub_total = Math.round((rate * quantity) - (((rate * quantity) * discount) / 100));
        }
        else if (quantity != "" && rate != "") {
            this.material_details_list[i].sub_total = Math.round((rate * quantity));
        }
        this.sum = 0;
        this.material_details_list.forEach(function (x) {
            var Mindex = _this.form.value.purchase_order_detail.findIndex(function (p) { return p.material == x.material; });
            if (Mindex > -1) {
                _this.sum += Math.round(x.sub_total);
            }
        });
        this.form.patchValue({
            grand_total: this.sum,
            grand_total_words: converter.toWords(this.sum)
        });
    };
    // freight list
    PurchaseOrdersAddComponent.prototype.create_purchase_order_freight = function () {
        return this.formBuilder.group({
            freight_option: 1,
            vendor: null,
            freight_rate: 1,
            freight_amount: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            freight_gst_rate: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            freight_total: [0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
        });
    };
    PurchaseOrdersAddComponent.prototype.add_purchase_order_freight = function () {
        var control = this.form.controls['purchase_order_freight'];
        control.push(this.create_purchase_order_freight());
    };
    PurchaseOrdersAddComponent.prototype.delete_purchase_order_freight = function (index) {
        var control = this.form.controls['purchase_order_freight'];
        control.removeAt(index);
    };
    // terms and conditions
    PurchaseOrdersAddComponent.prototype.create_purchase_order_terms = function (id) {
        return this.formBuilder.group({
            po_terms: [id, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
        });
    };
    PurchaseOrdersAddComponent.prototype.add_purchase_order_terms = function (id) {
        var control = this.form.controls['purchase_order_terms'];
        control.push(this.create_purchase_order_terms(id));
    };
    PurchaseOrdersAddComponent.prototype.delete_purchase_order_terms = function (index) {
        var control = this.form.controls['purchase_order_terms'];
        control.removeAt(index);
    };
    PurchaseOrdersAddComponent.prototype.termsCheck = function (val, id) {
        if (val.currentTarget.checked) {
            this.add_purchase_order_terms(id);
        }
        else {
            var index = this.form.value.purchase_order_terms.findIndex(function (p) { return p.po_terms == id; });
            this.delete_purchase_order_terms(index);
        }
    };
    PurchaseOrdersAddComponent.prototype.getFreightTotal = function (rate, amount, gst, i) {
        var _this = this;
        if (rate != "" && amount != "" && gst != "") {
            if (gst > 0) {
                this.gstRatesService.getGSTDetails(gst).subscribe(function (res) {
                    _this.get_gst_deatils = res;
                    _this.form.value.purchase_order_freight[i].freight_total = Math.round(amount + Math.round(_this.get_gst_deatils.igst));
                });
            }
        }
    };
    PurchaseOrdersAddComponent.prototype.goToList = function (toNav) {
        this.router.navigateByUrl('/' + toNav);
    };
    ;
    PurchaseOrdersAddComponent.prototype.addPurchaseOrder = function () {
        var _this = this;
        if (this.form.value.purchase_order_detail.length == 0) {
            this.toastr.error('Check atleast one item from list of item/s', '', {
                timeOut: 3000,
            });
            return;
        }
        var order_detail_control = this.form.controls['purchase_order_detail'];
        this.material_details_list.forEach(function (x) {
            if (x.gst_amount == "" || x.rate == "" || x.discount_percent == "" || x.delivery_date == "") {
                _this.toastr.error('All fields are required in every row ', '', {
                    timeOut: 3000,
                });
                return;
            }
            var myDate = new Date(x.delivery_date.year, x.delivery_date.month - 1, x.delivery_date.day);
            var Mindex = _this.form.value.purchase_order_detail.findIndex(function (p) { return p.material == x.material; });
            if (Mindex > -1) {
                order_detail_control.at(Mindex).patchValue({
                    gst_amount: x.gst_amount,
                    rate: x.rate,
                    order_quantity: x.order_quantity,
                    discount_percent: x.discount_percent,
                    discount_value: Math.round((x.rate * x.order_quantity) - x.sub_total),
                    sub_total: x.sub_total,
                    material_value: Math.round((x.rate * x.order_quantity)),
                    delivery_date: myDate.toISOString()
                });
            }
        });
        if (this.form.valid) {
            var QtnDate = new Date(this.form.value.quotation_date.year, this.form.value.quotation_date.month - 1, this.form.value.quotation_date.day);
            this.form.patchValue({
                quotation_date: QtnDate.toISOString()
            });
            this.purchaseOrdersService.addNewPurchaseOrder(this.form.value).subscribe(function (response) {
                // console.log(response)
                _this.toastr.success('Purchase order added successfully', '', {
                    timeOut: 3000,
                });
                _this.goToList('purchase-orders');
            }, function (error) {
                console.log('error', error);
                // this.toastr.error('everything is broken', '', {
                //   timeOut: 3000,
                // });
            });
        }
        else {
            this.markFormGroupTouched(this.form);
        }
    };
    PurchaseOrdersAddComponent.prototype.markFormGroupTouched = function (formGroup) {
        var _this = this;
        Object.values(formGroup.controls).forEach(function (control) {
            control.markAsTouched();
            if (control.controls) {
                control.controls.forEach(function (c) { return _this.markFormGroupTouched(c); });
            }
        });
    };
    PurchaseOrdersAddComponent.prototype.reSet = function () {
        this.form.reset();
    };
    PurchaseOrdersAddComponent.prototype.displayFieldCss = function (field) {
        return {
            'is-invalid': this.form.get(field).invalid && (this.form.get(field).dirty || this.form.get(field).touched),
            'is-valid': this.form.get(field).valid && (this.form.get(field).dirty || this.form.get(field).touched)
        };
    };
    PurchaseOrdersAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-purchase-orders-add',
            template: __webpack_require__("./src/app/layout/purchase-orders/purchase-orders-add/purchase-orders-add.component.html"),
            styles: [__webpack_require__("./src/app/layout/purchase-orders/purchase-orders-add/purchase-orders-add.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_7__purchase_orders_service__["a" /* PurchaseOrdersService */],
            __WEBPACK_IMPORTED_MODULE_5__purchase_requisition_purchase_requisition_service__["a" /* PurchaseRequisitionService */],
            __WEBPACK_IMPORTED_MODULE_6__material_material_service__["a" /* MaterialService */],
            __WEBPACK_IMPORTED_MODULE_4__company_company_service__["a" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_8__vendor_vendor_service__["a" /* VendorService */],
            __WEBPACK_IMPORTED_MODULE_9__terms_condition_terms_condition_service__["a" /* TermsConditionService */],
            __WEBPACK_IMPORTED_MODULE_10__gst_rates_gst_rates_service__["a" /* GstRatesService */]])
    ], PurchaseOrdersAddComponent);
    return PurchaseOrdersAddComponent;
}());



/***/ }),

/***/ "./src/app/layout/purchase-orders/purchase-orders-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurchaseOrdersRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__purchase_orders_component__ = __webpack_require__("./src/app/layout/purchase-orders/purchase-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__purchase_orders_add_purchase_orders_add_component__ = __webpack_require__("./src/app/layout/purchase-orders/purchase-orders-add/purchase-orders-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__purchase_details_purchase_details_component__ = __webpack_require__("./src/app/layout/purchase-orders/purchase-details/purchase-details.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__purchase_orders_component__["a" /* PurchaseOrdersComponent */]
    },
    {
        path: 'add',
        component: __WEBPACK_IMPORTED_MODULE_3__purchase_orders_add_purchase_orders_add_component__["a" /* PurchaseOrdersAddComponent */]
    },
    {
        path: 'details/:id',
        component: __WEBPACK_IMPORTED_MODULE_4__purchase_details_purchase_details_component__["a" /* PurchaseDetailsComponent */]
    }
];
var PurchaseOrdersRoutingModule = /** @class */ (function () {
    function PurchaseOrdersRoutingModule() {
    }
    PurchaseOrdersRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], PurchaseOrdersRoutingModule);
    return PurchaseOrdersRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/purchase-orders/purchase-orders.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <!-- <app-page-header [heading]=\"'Purchase Order List'\" [icon]=\"'fa fa-university'\"></app-page-header> -->\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <h4 class=\"page-header\">Purchase Order List</h4>\r\n    </div>\r\n    <div class=\"col-md-6 pull-right\" style=\"text-align: right\">\r\n      <button type=\"button\" class=\"btn btn-secondary\">\r\n        <i class=\"fa fa-question\" aria-hidden=\"true\"></i> Help</button>\r\n      <button type=\"button\" class=\"btn btn-secondary\">\r\n        <i class=\"fa fa-refresh\"></i> Reload</button>\r\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"btnClickNav('purchase-orders/add')\">\r\n        <i class=\"fa fa-plus\"></i> New Purchase Order</button>\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n  </div>\r\n\r\n  <hr/>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-9\">\r\n              <h5>Purchase Orders</h5>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <form role=\"form\" (ngSubmit)=\"dataSearch()\">\r\n                <div class=\"input-group\">\r\n                  <input type=\"text\" class=\"form-control\" name=\"search\" placeholder=\"Search\" [(ngModel)]=\"search_key\">\r\n                  <div class=\"input-group-append\">\r\n                    <button class=\"btn btn-secondary\" type=\"submit\">\r\n                      <i class=\"fa fa-search\"></i>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <table class=\"card-body table table-hover table-sm table-bordered\">\r\n          <thead>\r\n            <tr>\r\n              <th>Sl.No.</th>\r\n              <th>Po No</th>\r\n              <th>Indent No</th>\r\n              <th>Po Amount</th>\r\n              <th>Company</th>\r\n              <th>Plant</th>\r\n              <th>Storage</th>\r\n              <th>Bin</th>\r\n              <th>Po Raised Date</th>\r\n              <th>Status</th>\r\n              <th>Is approved</th>\r\n              <th>Action</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let purchaseOrder of purchaseOrderList ; let i = index\">\r\n              <th scope=\"row\">{{i +1}}</th>\r\n              <td>{{purchaseOrder.purchase_order_map[0].purchase_order_no}}</td>\r\n              <td>{{purchaseOrder.requisition_no[0].requisition_no}}</td>\r\n              <td>{{purchaseOrder.grand_total}}</td>\r\n              <td>{{purchaseOrder.company.company_name}}</td>\r\n              <td>{{purchaseOrder.purchase_order_detail[0].company_branch.branch_address}}</td>\r\n              <td>{{purchaseOrder.purchase_order_detail[0].storage_location.storage_address}}</td>\r\n              <td>{{purchaseOrder.purchase_order_detail[0].storage_bin.bin_no}}</td>\r\n              <td>{{purchaseOrder.quotation_date | date:'dd-MM-yyyy'}}</td>\r\n              <td>\r\n                <a href=\"javascript:void(0);\" title=\"Active\" name=\"Active\" (click)=\"inactiveState(purchaseOrder.id)\" *ngIf=\"purchaseOrder.status==true\">\r\n                    <i class=\"fa fa-thumbs-up\"></i> Active</a>\r\n                  <a href=\"javascript:void(0);\" title=\"Inactive\" name=\"Inactive\" (click)=\"activeState(purchaseOrder.id)\" *ngIf=\"purchaseOrder.status==false\">\r\n                    <i class=\"fa fa-thumbs-down\"></i> Inactive</a>\r\n              </td>\r\n              <td>\r\n                <a href=\"javascript:void(0);\" title=\"Active\" name=\"Active\" (click)=\"disApprovePurchaseOrder(purchaseOrder.id)\" *ngIf=\"purchaseOrder.is_approve==1\">\r\n                    <i class=\"fa fa-thumbs-up\"></i> Approve</a>\r\n                  <a href=\"javascript:void(0);\" title=\"Inactive\" name=\"Inactive\" (click)=\"approvePurchaseOrder(purchaseOrder.id)\" *ngIf=\"purchaseOrder.is_approve==0\">\r\n                    <i class=\"fa fa-thumbs-down\"></i> Dis-approve</a>\r\n              </td>\r\n              <td>\r\n                <a href=\"javascript:void(0);\" title=\"Details\" name=\"Details\" [routerLink]=\"['/purchase-orders/details', purchaseOrder.id]\">\r\n                  <i class=\"fa fa-eye\"></i>\r\n                </a>\r\n              </td>\r\n\r\n            </tr>\r\n            <tr *ngIf=\"purchaseOrderList.length == 0\">\r\n              <td colspan=\"12\" class=\"text-center\">No record found</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"totalpurchaseOrderList > 10\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card-body pull-right\">\r\n        <ngb-pagination [collectionSize]=\"totalpurchaseOrderList\" [(page)]=\"defaultPagination\" (pageChange)=\"pagination()\" size=\"sm\"></ngb-pagination>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/purchase-orders/purchase-orders.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/purchase-orders/purchase-orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurchaseOrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__purchase_orders_service__ = __webpack_require__("./src/app/layout/purchase-orders/purchase-orders.service.ts");
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





var PurchaseOrdersComponent = /** @class */ (function () {
    function PurchaseOrdersComponent(router, toastr, purchaseOrdersService, companyService) {
        this.router = router;
        this.toastr = toastr;
        this.purchaseOrdersService = purchaseOrdersService;
        this.companyService = companyService;
        this.purchaseOrderList = [];
        this.search_key = '';
        this.companyList = [];
        this.btnClickNav = function (toNav) {
            this.router.navigateByUrl('/' + toNav);
        };
    }
    PurchaseOrdersComponent.prototype.ngOnInit = function () {
        this.defaultPagination = 1;
        this.getPurchaseOrderList();
        this.getCompanyList();
    };
    PurchaseOrdersComponent.prototype.dataSearch = function () {
        this.defaultPagination = 1;
        this.getPurchaseOrderList();
    };
    PurchaseOrdersComponent.prototype.getCompanyList = function () {
        var _this = this;
        this.companyService.getCompanyDropdownList().subscribe(function (data) {
            _this.companyList = data;
            // console.log(this.companyList);
        });
    };
    ;
    // getCompanyName(id) {
    //   var data = { id: 0, company_name: '' }
    //   data = this.companyList.filter(x => x.id === id)[0];
    //   if (data != undefined) {
    //     return data.company_name
    //   }
    // }
    PurchaseOrdersComponent.prototype.getPurchaseOrderList = function () {
        var _this = this;
        var params = new URLSearchParams();
        params.set('page', this.defaultPagination.toString());
        params.set('search', this.search_key.toString());
        this.purchaseOrdersService.getPurchaseOrderList(params).subscribe(function (data) {
            _this.totalpurchaseOrderList = data['count'];
            _this.purchaseOrderList = data['results'];
            // console.log(this.purchaseOrderList)
        });
    };
    PurchaseOrdersComponent.prototype.activeState = function (id) {
        var _this = this;
        var PurchaseOrder;
        PurchaseOrder = {
            id: id,
            status: true
        };
        this.purchaseOrdersService.activeInactivePurchaseOrder(PurchaseOrder).subscribe(function (response) {
            _this.toastr.success('Status changed successfully', '', {
                timeOut: 3000,
            });
            _this.getPurchaseOrderList();
        }, function (error) {
            console.log('error', error);
            // this.toastr.error('everything is broken', '', {
            //   timeOut: 3000,
            // });
        });
    };
    ;
    PurchaseOrdersComponent.prototype.inactiveState = function (id) {
        var _this = this;
        var PurchaseOrder;
        PurchaseOrder = {
            id: id,
            status: false
        };
        this.purchaseOrdersService.activeInactivePurchaseOrder(PurchaseOrder).subscribe(function (response) {
            _this.toastr.success('Status changed successfully', '', {
                timeOut: 3000,
            });
            _this.getPurchaseOrderList();
        }, function (error) {
            console.log('error', error);
            // this.toastr.error('everything is broken', '', {
            //   timeOut: 3000,
            // });
        });
    };
    ;
    PurchaseOrdersComponent.prototype.approvePurchaseOrder = function (id) {
        var _this = this;
        var PurchaseOrder;
        PurchaseOrder = {
            id: id,
            is_approve: 1
        };
        this.purchaseOrdersService.activeInactivePurchaseOrder(PurchaseOrder).subscribe(function (response) {
            _this.toastr.success('Purchase order approved successfully', '', {
                timeOut: 3000,
            });
            _this.getPurchaseOrderList();
        }, function (error) {
            console.log('error', error);
            // this.toastr.error('everything is broken', '', {
            //   timeOut: 3000,
            // });
        });
    };
    ;
    PurchaseOrdersComponent.prototype.disApprovePurchaseOrder = function (id) {
        var _this = this;
        var PurchaseOrder;
        PurchaseOrder = {
            id: id,
            is_approve: 0
        };
        this.purchaseOrdersService.activeInactivePurchaseOrder(PurchaseOrder).subscribe(function (response) {
            _this.toastr.success('Purchase order disapproved successfully', '', {
                timeOut: 3000,
            });
            _this.getPurchaseOrderList();
        }, function (error) {
            console.log('error', error);
            // this.toastr.error('everything is broken', '', {
            //   timeOut: 3000,
            // });
        });
    };
    ;
    PurchaseOrdersComponent.prototype.pagination = function () {
        this.getPurchaseOrderList();
    };
    ;
    PurchaseOrdersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-purchase-orders',
            template: __webpack_require__("./src/app/layout/purchase-orders/purchase-orders.component.html"),
            styles: [__webpack_require__("./src/app/layout/purchase-orders/purchase-orders.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_2__purchase_orders_service__["a" /* PurchaseOrdersService */],
            __WEBPACK_IMPORTED_MODULE_4__company_company_service__["a" /* CompanyService */]])
    ], PurchaseOrdersComponent);
    return PurchaseOrdersComponent;
}());



/***/ }),

/***/ "./src/app/layout/purchase-orders/purchase-orders.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseOrdersModule", function() { return PurchaseOrdersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__purchase_orders_routing_module__ = __webpack_require__("./src/app/layout/purchase-orders/purchase-orders-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__purchase_orders_component__ = __webpack_require__("./src/app/layout/purchase-orders/purchase-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__purchase_orders_add_purchase_orders_add_component__ = __webpack_require__("./src/app/layout/purchase-orders/purchase-orders-add/purchase-orders-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__bs_component_bs_component_module__ = __webpack_require__("./src/app/layout/bs-component/bs-component.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__purchase_orders_service__ = __webpack_require__("./src/app/layout/purchase-orders/purchase-orders.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__company_company_service__ = __webpack_require__("./src/app/layout/company/company.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_material_service__ = __webpack_require__("./src/app/layout/material/material.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__purchase_requisition_purchase_requisition_service__ = __webpack_require__("./src/app/layout/purchase-requisition/purchase-requisition.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__vendor_vendor_service__ = __webpack_require__("./src/app/layout/vendor/vendor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__terms_condition_terms_condition_service__ = __webpack_require__("./src/app/layout/terms-condition/terms-condition.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__gst_rates_gst_rates_service__ = __webpack_require__("./src/app/layout/gst-rates/gst-rates.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__purchase_details_purchase_details_component__ = __webpack_require__("./src/app/layout/purchase-orders/purchase-details/purchase-details.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var PurchaseOrdersModule = /** @class */ (function () {
    function PurchaseOrdersModule() {
    }
    PurchaseOrdersModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__purchase_orders_routing_module__["a" /* PurchaseOrdersRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared__["b" /* PageHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["f" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__bs_component_bs_component_module__["BsComponentModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__purchase_orders_component__["a" /* PurchaseOrdersComponent */], __WEBPACK_IMPORTED_MODULE_7__purchase_orders_add_purchase_orders_add_component__["a" /* PurchaseOrdersAddComponent */], __WEBPACK_IMPORTED_MODULE_17__purchase_details_purchase_details_component__["a" /* PurchaseDetailsComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_10__purchase_orders_service__["a" /* PurchaseOrdersService */], __WEBPACK_IMPORTED_MODULE_11__company_company_service__["a" /* CompanyService */], __WEBPACK_IMPORTED_MODULE_12__material_material_service__["a" /* MaterialService */], __WEBPACK_IMPORTED_MODULE_13__purchase_requisition_purchase_requisition_service__["a" /* PurchaseRequisitionService */], __WEBPACK_IMPORTED_MODULE_14__vendor_vendor_service__["a" /* VendorService */], __WEBPACK_IMPORTED_MODULE_15__terms_condition_terms_condition_service__["a" /* TermsConditionService */], __WEBPACK_IMPORTED_MODULE_16__gst_rates_gst_rates_service__["a" /* GstRatesService */]]
        })
    ], PurchaseOrdersModule);
    return PurchaseOrdersModule;
}());



/***/ }),

/***/ "./src/app/layout/purchase-orders/purchase-orders.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurchaseOrdersService; });
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



var PurchaseOrdersService = /** @class */ (function () {
    function PurchaseOrdersService(http) {
        this.http = http;
    }
    PurchaseOrdersService.prototype.addNewPurchaseOrder = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + 'purchase_order/', data, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Token ' + localStorage.getItem('logedUserToken'))
        });
    };
    PurchaseOrdersService.prototype.getPurchaseOrderList = function (params) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + 'all_purchase_order/?' + params, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Token ' + localStorage.getItem('logedUserToken'))
        });
    };
    PurchaseOrdersService.prototype.getPurchaseOrderDetails = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + 'all_purchase_order/' + id + '/', {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Token ' + localStorage.getItem('logedUserToken'))
        });
    };
    PurchaseOrdersService.prototype.updatePurchaseOrder = function (data) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + 'purchase_order/' + data.id + '/', data, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Token ' + localStorage.getItem('logedUserToken'))
        });
    };
    PurchaseOrdersService.prototype.activeInactivePurchaseOrder = function (data) {
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + 'purchase_order/' + data.id + '/', data, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Token ' + localStorage.getItem('logedUserToken'))
        });
    };
    PurchaseOrdersService.prototype.approveDisapprovePurchaseOrder = function (data) {
        return this.http.patch(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + 'purchase_order/' + data.id + '/', data, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', 'Token ' + localStorage.getItem('logedUserToken'))
        });
    };
    PurchaseOrdersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PurchaseOrdersService);
    return PurchaseOrdersService;
}());



/***/ })

});
//# sourceMappingURL=purchase-orders.module.chunk.js.map