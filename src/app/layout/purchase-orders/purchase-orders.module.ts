import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PurchaseOrdersRoutingModule } from './purchase-orders-routing.module';
import { PurchaseOrdersComponent } from './purchase-orders.component';
import { PurchaseOrdersAddComponent } from './purchase-orders-add/purchase-orders-add.component';
import { PageHeaderModule } from '../../shared';

import { BsComponentModule } from '../bs-component/bs-component.module';
import { PurchaseOrdersService } from './purchase-orders.service';
import { CompanyService } from '../company/company.service';
import { MaterialService } from '../material/material.service';
import { PurchaseRequisitionService } from '../purchase-requisition/purchase-requisition.service';
import { VendorService } from '../vendor/vendor.service';
import { TermsConditionService } from '../terms-condition/terms-condition.service';
import { GstRatesService } from '../gst-rates/gst-rates.service';
import { PurchaseDetailsComponent } from './purchase-details/purchase-details.component';
@NgModule({
  imports: [
    CommonModule,
    PurchaseOrdersRoutingModule,
    PageHeaderModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    BsComponentModule
  ],
  declarations: [PurchaseOrdersComponent, PurchaseOrdersAddComponent, PurchaseDetailsComponent],
  providers: [PurchaseOrdersService,CompanyService,MaterialService,PurchaseRequisitionService,VendorService,TermsConditionService,GstRatesService]
})
export class PurchaseOrdersModule { }
