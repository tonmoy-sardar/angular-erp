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
  declarations: [PurchaseOrdersComponent, PurchaseOrdersAddComponent],
  providers: [PurchaseOrdersService,CompanyService,MaterialService,PurchaseRequisitionService]
})
export class PurchaseOrdersModule { }
