webpackJsonp(["layout.module"],{

/***/ "./src/app/layout/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top\">\r\n    <a class=\"navbar-brand\" href=\"#\">ERP System</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleSidebar()\">\r\n        <!-- <span class=\"navbar-toggler-icon\"></span> -->\r\n        <i class=\"fa fa-bars text-muted\" aria-hidden=\"true\"></i>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\">       \r\n        <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item dropdown\" ngbDropdown>\r\n            <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\r\n                <i class=\"fa fa-shopping-cart\"></i> Purchase<b class=\"caret\"></b>\r\n            </a>\r\n            <div class=\"dropdown-menu-right\" ngbDropdownMenu>\r\n                <a class=\"dropdown-item\" href=\"javascript:void(0)\" [routerLink]=\"['/purchase-requisition']\">\r\n                    <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Purchase Requisition\r\n                </a>\r\n                <a class=\"dropdown-item\" href=\"javascript:void(0)\" [routerLink]=\"['/purchase-orders']\">\r\n                    <i class=\"fa fa-shopping-basket\" aria-hidden=\"true\"></i> Purchase Orders\r\n                </a>\r\n                <a class=\"dropdown-item\" href=\"javascript:void(0)\" [routerLink]=\"['/grn']\">\r\n                    <i class=\"fa fa-truck\" aria-hidden=\"true\"></i> GRN\r\n                </a>\r\n                <a class=\"dropdown-item\" href=\"javascript:void(0)\" [routerLink]=\"['/grn-reverse']\">\r\n                    <i class=\"fa fa-truck\" aria-hidden=\"true\"></i> GRN Reverse\r\n                </a>\r\n                <a class=\"dropdown-item\" href=\"javascript:void(0)\" [routerLink]=\"['/purchase-invoice']\">\r\n                    <i class=\"fa fa-money\" aria-hidden=\"true\"></i> Purchase Invoice\r\n                </a>\r\n                <a class=\"dropdown-item\" href=\"javascript:void(0)\" [routerLink]=\"['/payment']\">\r\n                    <i class=\"fa fa-money\" aria-hidden=\"true\"></i> Payments\r\n                </a>\r\n            </div>\r\n        </li>\r\n        <li class=\"nav-item\">         \r\n            <a routerLink=\"/company\" [routerLinkActive]=\"['router-link-active']\"  class=\"nav-link\" >\r\n                <i class=\"fa fa-rupee\"></i>&nbsp;Customer Invoice\r\n            </a>\r\n        </li>\r\n        <li class=\"nav-item dropdown\" ngbDropdown>\r\n            <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\r\n                <i class=\"fa fa-briefcase\"></i> Stocks<b class=\"caret\"></b>\r\n            </a>\r\n            <div class=\"dropdown-menu-right\" ngbDropdownMenu>\r\n                <a class=\"dropdown-item\" href=\"javascript:void(0)\" >\r\n                    <i class=\"fa fa-list\" aria-hidden=\"true\"></i> Stock List\r\n                </a>\r\n                <a class=\"dropdown-item\" href=\"javascript:void(0)\" >\r\n                    <i class=\"fa fa-list\" aria-hidden=\"true\"></i> Stock Transfer\r\n                </a>   \r\n            </div>\r\n        </li>\r\n        <li class=\"nav-item dropdown\" ngbDropdown>\r\n            <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\r\n                <i class=\"fa fa-list-alt\"></i> Reports<b class=\"caret\"></b>\r\n            </a>\r\n            <div class=\"dropdown-menu-right\" ngbDropdownMenu>\r\n                <a class=\"dropdown-item\" href=\"javascript:void(0)\" >\r\n                    <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Purchase Requisition\r\n                </a>\r\n                <a class=\"dropdown-item\" href=\"javascript:void(0)\" >\r\n                    <i class=\"fa fa-shopping-basket\" aria-hidden=\"true\"></i> Purchase Orders\r\n                </a>\r\n                <a class=\"dropdown-item\" href=\"javascript:void(0)\" >\r\n                    <i class=\"fa fa-truck\" aria-hidden=\"true\"></i> GRN\r\n                </a>\r\n                <a class=\"dropdown-item\" href=\"javascript:void(0)\" >\r\n                    <i class=\"fa fa-money\" aria-hidden=\"true\"></i> Transfer Material\r\n                </a>\r\n            </div>\r\n        </li>\r\n        <li class=\"nav-item dropdown\" ngbDropdown>\r\n            <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\r\n                <i class=\"fa fa-list-alt\"></i> Expenses<b class=\"caret\"></b>\r\n            </a>\r\n            <div class=\"dropdown-menu-right\" ngbDropdownMenu>\r\n                <a class=\"dropdown-item\" href=\"javascript:void(0)\" >\r\n                    <i class=\"fa fa-list-alt\" aria-hidden=\"true\"></i> Employee Expense\r\n                </a>\r\n                <a class=\"dropdown-item\" href=\"javascript:void(0)\" >\r\n                    <i class=\"fa fa-list-alt\" aria-hidden=\"true\"></i> My Expense\r\n                </a>   \r\n            </div>\r\n        </li>\r\n        <li class=\"nav-item\">         \r\n            <a routerLink=\"/company\" [routerLinkActive]=\"['router-link-active']\"  class=\"nav-link\" >\r\n                <i class=\"fa fa-list-alt\"></i>&nbsp;Transactions\r\n            </a>\r\n        </li>\r\n        <li class=\"nav-item\">         \r\n            <a routerLink=\"/company\" [routerLinkActive]=\"['router-link-active']\"  class=\"nav-link\" >\r\n                <i class=\"fa fa-list-alt\"></i>&nbsp;Accounting\r\n            </a>\r\n        </li>\r\n        <li class=\"nav-item dropdown\" ngbDropdown>\r\n                <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\r\n                    <i class=\"fa fa-cog\"></i> Setting<b class=\"caret\"></b>\r\n                </a>\r\n                <div class=\"dropdown-menu-right\" ngbDropdownMenu>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" [routerLink]=\"['/states']\">\r\n                        <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> States\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" [routerLink]=\"['/gst-rates']\">\r\n                        <i class=\"fa fa-line-chart\" aria-hidden=\"true\"></i> GST Rates\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" [routerLink]=\"['/vendor']\">\r\n                        <i class=\"fa fa-user-circle-o\" aria-hidden=\"true\"></i> Vendors\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" [routerLink]=\"['/terms-condition']\">\r\n                        <i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i> Terms & Conditions\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" [routerLink]=\"['/transport']\">\r\n                        <i class=\"fa fa-truck\" aria-hidden=\"true\"></i> Transporters\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" [routerLink]=\"['/banks']\">\r\n                        <i class=\"fa fa-university\" aria-hidden=\"true\"></i> Banks\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" [routerLink]=\"['/department']\">\r\n                        <i class=\"fa fa-sitemap\" aria-hidden=\"true\"></i> Department\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" [routerLink]=\"['/designation']\">\r\n                        <i class=\"fa fa-address-card\" aria-hidden=\"true\"></i> Designation\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" [routerLink]=\"['/employees']\">\r\n                        <i class=\"fa fa-users\" aria-hidden=\"true\"></i> Employees\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" [routerLink]=\"['/material']\">\r\n                        <i class=\"fa fa-list\" aria-hidden=\"true\"></i> Material\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                        <i class=\"fa fa-list\" aria-hidden=\"true\"></i> Party Types\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                        <i class=\"fa fa-list\" aria-hidden=\"true\"></i> Other Party\r\n                    </a>\r\n                </div>\r\n            </li>         \r\n            <li class=\"nav-item dropdown\" ngbDropdown>\r\n                <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\r\n                    <i class=\"fa fa-building-o\"></i> Company<b class=\"caret\"></b>\r\n                </a>\r\n                <div class=\"dropdown-menu-right\" ngbDropdownMenu>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" [routerLink]=\"['/company']\">\r\n                        <i class=\"fa fa-university\" aria-hidden=\"true\"></i> Company\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" [routerLink]=\"['/purchase-organization']\">\r\n                        <i class=\"fa fa-university\" aria-hidden=\"true\"></i> Purchase Org\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" [routerLink]=\"['/purchase-group']\">\r\n                        <i class=\"fa fa-university\" aria-hidden=\"true\"></i> Purchase Group\r\n                    </a>\r\n                    <!-- <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                        <i class=\"fa fa-university\" aria-hidden=\"true\"></i> Purchase Org Group Mapping\r\n                    </a> -->\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" [routerLink]=\"['/sale-organization']\">\r\n                        <i class=\"fa fa-university\" aria-hidden=\"true\"></i> Sale Org\r\n                    </a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\" [routerLink]=\"['/sale-group']\">\r\n                        <i class=\"fa fa-university\" aria-hidden=\"true\"></i> Sale Group\r\n                    </a>\r\n                    \r\n                </div>\r\n            </li>\r\n            <li class=\"nav-item dropdown\" ngbDropdown>\r\n                <a href=\"javascript:void(0)\" class=\"nav-link\" ngbDropdownToggle>\r\n                    <i class=\"fa fa-user\"></i> Admin <b class=\"caret\"></b>\r\n                </a>\r\n                <div class=\"dropdown-menu-right\" ngbDropdownMenu>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">\r\n                        <i class=\"fa fa-fw fa-user\"></i> {{ 'Profile' | translate }}\r\n                    </a>\r\n                    \r\n                    <a class=\"dropdown-item\" [routerLink]=\"['/login']\" (click)=\"onLoggedout()\">\r\n                        <i class=\"fa fa-fw fa-power-off\"></i> {{ 'Log Out' | translate }}\r\n                    </a>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div style=\"width: 110px;\"></div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/layout/components/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = ":host .navbar {\n  background-color: #222; }\n  :host .navbar .navbar-brand {\n    color: #fff; }\n  :host .navbar .nav-item > a {\n    color: #999; }\n  :host .navbar .nav-item > a:hover {\n      color: #fff; }\n  :host .messages {\n  width: 300px; }\n  :host .messages .media {\n    border-bottom: 1px solid #ddd;\n    padding: 5px 10px; }\n  :host .messages .media:last-child {\n      border-bottom: none; }\n  :host .messages .media-body h5 {\n    font-size: 13px;\n    font-weight: 600; }\n  :host .messages .media-body .small {\n    margin: 0; }\n  :host .messages .media-body .last {\n    font-size: 12px;\n    margin: 0; }\n"

/***/ }),

/***/ "./src/app/layout/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(translate, router) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        this.pushRightClass = 'push-right';
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
        this.router.events.subscribe(function (val) {
            if (val instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */] &&
                window.innerWidth <= 992 &&
                _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    HeaderComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    HeaderComponent.prototype.rltAndLtr = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    };
    HeaderComponent.prototype.onLoggedout = function () {
        localStorage.removeItem('isLoggedin');
    };
    HeaderComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/layout/components/header/header.component.html"),
            styles: [__webpack_require__("./src/app/layout/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"sidebar\" [ngClass]=\"{sidebarPushRight: isActive}\">\r\n    <div class=\"list-group\">\r\n        <a routerLink=\"/dashboard\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa-dashboard\"></i>&nbsp;{{ 'Dashboard' | translate }}\r\n        </a>\r\n        <a [routerLink]=\"['/charts']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa-bar-chart-o\"></i>&nbsp;{{ 'Charts' | translate }}\r\n        </a>\r\n        <a [routerLink]=\"['/tables']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa-table\"></i>&nbsp;{{ 'Tables' | translate }}\r\n        </a>\r\n        <a [routerLink]=\"['/forms']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa-edit\"></i>&nbsp;{{ 'Forms' | translate }}\r\n        </a>\r\n        <a [routerLink]=\"['/bs-element']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa-desktop\"></i>&nbsp;{{ 'Bootstrap Element' | translate }}\r\n        </a>\r\n        <a [routerLink]=\"['/grid']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa-wrench\"></i>&nbsp;{{ 'Bootstrap Grid' | translate }}\r\n        </a>\r\n        <a [routerLink]=\"['/components']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-th-list\"></i>&nbsp;{{ 'Component' | translate }}\r\n        </a>\r\n        <div class=\"nested-menu\">\r\n            <a class=\"list-group-item\" (click)=\"addExpandClass('pages')\">\r\n                <span><i class=\"fa fa-plus\"></i>&nbsp; {{ 'Menu' | translate }}</span>\r\n            </a>\r\n            <li class=\"nested\" [class.expand]=\"showMenu === 'pages'\">\r\n                <ul class=\"submenu\">\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\"><span>{{ 'Submenu' | translate }}</span></a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\"><span>{{ 'Submenu' | translate }}</span></a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\"><span>{{ 'Submenu' | translate }}</span></a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n        </div>\r\n        <a [routerLink]=\"['/blank-page']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-file-o\"></i>&nbsp;{{ 'Blank Page' | translate }}\r\n        </a>\r\n        \r\n        <div class=\"header-fields\">\r\n            <a (click)=\"rltAndLtr()\" class=\"list-group-item\">\r\n                <span><i class=\"fa fa-arrows-h\"></i>&nbsp; RTL/LTR</span>\r\n            </a>\r\n            <div class=\"nested-menu\">\r\n                <a class=\"list-group-item\" (click)=\"addExpandClass('languages')\">\r\n                    <span><i class=\"fa fa-language\"></i>&nbsp; {{ 'Language' | translate }} <b class=\"caret\"></b></span>\r\n                </a>\r\n                <li class=\"nested\" [class.expand]=\"showMenu === 'languages'\">\r\n                    <ul class=\"submenu\">\r\n                        <li>\r\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('en')\">\r\n                                {{ 'English' | translate }}\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('fr')\">\r\n                                {{ 'French' | translate }}\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('ur')\">\r\n                                {{ 'Urdu' | translate }}\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('es')\">\r\n                                {{ 'Spanish' | translate }}\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('it')\">\r\n                                {{ 'Italian' | translate }}\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('fa')\">\r\n                                {{ 'Farsi' | translate }}\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:void(0)\" (click)=\"changeLang('de')\">\r\n                                {{ 'German' | translate }}\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n            </div>\r\n            <div class=\"nested-menu\">\r\n                <a class=\"list-group-item\" (click)=\"addExpandClass('profile')\">\r\n                    <span><i class=\"fa fa-user\"></i>&nbsp; John Smith</span>\r\n                </a>\r\n                <li class=\"nested\" [class.expand]=\"showMenu === 'profile'\">\r\n                    <ul class=\"submenu\">\r\n                        <li>\r\n                            <a href=\"javascript:void(0)\">\r\n                                <span><i class=\"fa fa-fw fa-user\"></i> {{ 'Profile' | translate }}</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:void(0)\">\r\n                                <span><i class=\"fa fa-fw fa-envelope\"></i> {{ 'Inbox' | translate }}</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:void(0)\">\r\n                                <span><i class=\"fa fa-fw fa-gear\"></i> {{ 'Settings' | translate }}</span>\r\n                            </a>\r\n                        </li>\r\n                        <li>\r\n                            <a [routerLink]=\"['/login']\" (click)=\"onLoggedout()\">\r\n                                <span><i class=\"fa fa-fw fa-power-off\"></i> {{ 'Log Out' | translate }}</span>\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</nav> -->\r\n\r\n<nav class=\"sidebar\" [ngClass]=\"{sidebarPushRight: isActive}\">\r\n    <div class=\"list-group\">\r\n        <a routerLink=\"/company\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-university\"></i>&nbsp;Company\r\n        </a>\r\n        <div class=\"nested-menu\">\r\n            <a class=\"list-group-item\" (click)=\"addExpandClass('Purchase')\">\r\n                <span><i class=\"fa fa-shopping-cart\"></i>&nbsp;Purchase </span>\r\n            </a>\r\n            <li class=\"nested\" [class.expand]=\"showMenu === 'Purchase'\">\r\n                <ul class=\"submenu\">\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\"><span><i class=\"fa fa-pencil\"></i>&nbsp;Purchase Requisition</span></a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\"><span><i class=\"fa fa-shopping-basket\"></i>&nbsp;Purchase Orders</span></a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\"><span><i class=\"fa fa-truck\"></i>&nbsp;GRN</span></a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\"><span><i class=\"fa fa-money\"></i>&nbsp;Purchase Invoice</span></a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\"><span><i class=\"fa fa-money\"></i>&nbsp;Payments</span></a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n        </div>\r\n        <a href=\"javascript:void(0)\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-rupee\"></i>&nbsp;Customer Invoice\r\n        </a>\r\n        <div class=\"nested-menu\">\r\n            <a class=\"list-group-item\" (click)=\"addExpandClass('Stocks')\">\r\n                <span><i class=\"fa fa-briefcase\"></i>&nbsp;Stocks</span>\r\n            </a>\r\n            <li class=\"nested\" [class.expand]=\"showMenu === 'Stocks'\">\r\n                <ul class=\"submenu\">\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\"><span><i class=\"fa fa-list\"></i>&nbsp;Stock List</span></a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\"><span><i class=\"fa fa-list\"></i>&nbsp;Stock Transfer</span></a>\r\n                    </li>       \r\n                </ul>\r\n            </li>\r\n        </div>\r\n        <div class=\"nested-menu\">\r\n            <a class=\"list-group-item\" (click)=\"addExpandClass('Reports')\">\r\n                <span><i class=\"fa fa-list-alt\"></i>&nbsp;Reports </span>\r\n            </a>\r\n            <li class=\"nested\" [class.expand]=\"showMenu === 'Reports'\">\r\n                <ul class=\"submenu\">\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\"><span><i class=\"fa fa-pencil\"></i>&nbsp;Purchase Requisition</span></a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\"><span><i class=\"fa fa-pencil\"></i>&nbsp;Purchase order</span></a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\"><span><i class=\"fa fa-pencil\"></i>&nbsp;GRN</span></a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\"><span><i class=\"fa fa-pencil\"></i>&nbsp;Transfer Material</span></a>\r\n                    </li>       \r\n                </ul>\r\n            </li>\r\n        </div>\r\n        <div class=\"nested-menu\">\r\n            <a class=\"list-group-item\" (click)=\"addExpandClass('Expenses')\">\r\n                <span><i class=\"fa fa-list-alt\"></i>&nbsp;Expenses</span>\r\n            </a>\r\n            <li class=\"nested\" [class.expand]=\"showMenu === 'Expenses'\">\r\n                <ul class=\"submenu\">\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\"><span><i class=\"fa fa-list-alt\"></i>&nbsp;Employee Expense</span></a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\"><span><i class=\"fa fa-list-alt\"></i>&nbsp;My Expense</span></a>\r\n                    </li> \r\n                </ul>\r\n            </li>\r\n        </div>\r\n        <a href=\"javascript:void(0)\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-list-alt\"></i>&nbsp;Transactions \r\n        </a>\r\n        <a href=\"javascript:void(0)\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-list-alt\"></i>&nbsp;Accounting\r\n        </a>\r\n    </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.scss":
/***/ (function(module, exports) {

module.exports = ".sidebar {\n  border-radius: 0;\n  position: fixed;\n  z-index: 1000;\n  top: 50px;\n  left: 0px;\n  width: 200px;\n  margin-left: -200px;\n  border: none;\n  border-radius: 0;\n  overflow-y: auto;\n  background-color: #222;\n  bottom: 0;\n  overflow-x: hidden;\n  padding-bottom: 40px;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out; }\n  .sidebar .list-group a.list-group-item {\n    background: #222;\n    border: 0;\n    border-radius: 0;\n    color: #999;\n    text-decoration: none; }\n  .sidebar .list-group a.list-group-item .fa {\n      margin-right: 10px; }\n  .sidebar .list-group a:hover {\n    background: #151515;\n    color: #fff; }\n  .sidebar .list-group a.router-link-active {\n    background: #151515;\n    color: #fff; }\n  .sidebar .list-group .header-fields {\n    padding-top: 10px; }\n  .sidebar .list-group .header-fields > .list-group-item:first-child {\n      border-top: 1px solid rgba(255, 255, 255, 0.2); }\n  .sidebar .sidebar-dropdown *:focus {\n    border-radius: none;\n    border: none; }\n  .sidebar .sidebar-dropdown .panel-title {\n    font-size: 1rem;\n    height: 50px;\n    margin-bottom: 0; }\n  .sidebar .sidebar-dropdown .panel-title a {\n      color: #999;\n      text-decoration: none;\n      font-weight: 400;\n      background: #222; }\n  .sidebar .sidebar-dropdown .panel-title a span {\n        position: relative;\n        display: block;\n        padding: 0.75rem 1.5rem;\n        padding-top: 1rem; }\n  .sidebar .sidebar-dropdown .panel-title a:hover,\n    .sidebar .sidebar-dropdown .panel-title a:focus {\n      color: #fff;\n      outline: none;\n      outline-offset: -2px; }\n  .sidebar .sidebar-dropdown .panel-title:hover {\n    background: #151515; }\n  .sidebar .sidebar-dropdown .panel-collapse {\n    border-radious: 0;\n    border: none; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item {\n      border-radius: 0;\n      background-color: #222;\n      border: 0 solid transparent; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a {\n        color: #999; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a:hover {\n        color: #fff; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item:hover {\n      background: #151515; }\n  .nested-menu .list-group-item {\n  cursor: pointer; }\n  .nested-menu .nested {\n  list-style-type: none; }\n  .nested-menu ul.submenu {\n  display: none;\n  height: 0; }\n  .nested-menu .expand ul.submenu {\n  display: block;\n  list-style-type: none;\n  height: auto; }\n  .nested-menu .expand ul.submenu li a {\n    color: #fff;\n    padding: 10px;\n    display: block; }\n  @media screen and (max-width: 992px) {\n  .sidebar {\n    top: 54px;\n    left: 0px; } }\n  @media (min-width: 992px) {\n  .header-fields {\n    display: none; } }\n  ::-webkit-scrollbar {\n  width: 8px; }\n  ::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 0px white;\n  border-radius: 3px; }\n  ::-webkit-scrollbar-thumb {\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 0 3px white; }\n"

/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(translate, router) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        this.isActive = false;
        this.showMenu = '';
        this.pushRightClass = 'push-right';
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de']);
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de/) ? browserLang : 'en');
        this.router.events.subscribe(function (val) {
            if (val instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */] &&
                window.innerWidth <= 992 &&
                _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
    }
    SidebarComponent.prototype.eventCalled = function () {
        this.isActive = !this.isActive;
    };
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    SidebarComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    SidebarComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    SidebarComponent.prototype.rltAndLtr = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    };
    SidebarComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
    };
    SidebarComponent.prototype.onLoggedout = function () {
        localStorage.removeItem('isLoggedin');
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/layout/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("./src/app/layout/components/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_component__ = __webpack_require__("./src/app/layout/layout.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__layout_component__["a" /* LayoutComponent */],
        children: [
            { path: '', redirectTo: 'company' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'company', loadChildren: './company/company.module#CompanyModule' },
            { path: 'purchase-organization', loadChildren: './purchase-organization/purchase-organization.module#PurchaseOrganizationModule' },
            { path: 'purchase-group', loadChildren: './purchase-group/purchase-group.module#PurchaseGroupModule' },
            { path: 'sale-organization', loadChildren: './sale-organization/sale-organization.module#SaleOrganizationModule' },
            { path: 'sale-group', loadChildren: './sale-group/sale-group.module#SaleGroupModule' },
            { path: 'purchase-requisition', loadChildren: './purchase-requisition/purchase-requisition.module#PurchaseRequisitionModule' },
            { path: 'purchase-orders', loadChildren: './purchase-orders/purchase-orders.module#PurchaseOrdersModule' },
            { path: 'states', loadChildren: './states/states.module#StatesModule' },
            { path: 'gst-rates', loadChildren: './gst-rates/gst-rates.module#GstRatesModule' },
            { path: 'terms-condition', loadChildren: './terms-condition/terms-condition.module#TermsConditionModule' },
            { path: 'transport', loadChildren: './transport/transport.module#TransportModule' },
            { path: 'banks', loadChildren: './banks/banks.module#BanksModule' },
            { path: 'department', loadChildren: './department/department.module#DepartmentModule' },
            { path: 'designation', loadChildren: './designation/designation.module#DesignationModule' },
            { path: 'employees', loadChildren: './employees/employees.module#EmployeesModule' },
            { path: 'grn', loadChildren: './grn/grn.module#GrnModule' },
            { path: 'grn-reverse', loadChildren: './grn-reverse/grn-reverse.module#GrnReverseModule' },
            { path: 'payment', loadChildren: './payment/payment.module#PaymentModule' },
            { path: 'purchase-invoice', loadChildren: './purchase-invoice/purchase-invoice.module#PurchaseInvoiceModule' },
            { path: 'material', loadChildren: './material/material.module#MaterialModule' },
            { path: 'vendor', loadChildren: './vendor/vendor.module#VendorModule' }
        ]
    }
];
var LayoutRoutingModule = /** @class */ (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<app-sidebar></app-sidebar>\r\n<section class=\"main-container\">\r\n    <router-outlet></router-outlet>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/***/ (function(module, exports) {

module.exports = ".main-container {\n  margin-top: 56px;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden; }\n\n@media screen and (max-width: 992px) {\n  .main-container {\n    margin-left: 0px !important; } }\n"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
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

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () { };
    LayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__("./src/app/layout/layout.component.html"),
            styles: [__webpack_require__("./src/app/layout/layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_routing_module__ = __webpack_require__("./src/app/layout/layout-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layout_component__ = __webpack_require__("./src/app/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_sidebar_sidebar_component__ = __webpack_require__("./src/app/layout/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_header_header_component__ = __webpack_require__("./src/app/layout/components/header/header.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__layout_routing_module__["a" /* LayoutRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["d" /* NgbDropdownModule */].forRoot()
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__layout_component__["a" /* LayoutComponent */], __WEBPACK_IMPORTED_MODULE_6__components_sidebar_sidebar_component__["a" /* SidebarComponent */], __WEBPACK_IMPORTED_MODULE_7__components_header_header_component__["a" /* HeaderComponent */]]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ })

});
//# sourceMappingURL=layout.module.chunk.js.map