import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PurchaseRequisitionRoutingModule } from './purchase-requisition-routing.module';
import { PurchaseRequisitionComponent } from './purchase-requisition.component';
import { PageHeaderModule } from '../../shared';
import { PurchaseRequisitionAddComponent } from './purchase-requisition-add/purchase-requisition-add.component';

import { BsComponentModule } from '../bs-component/bs-component.module';
import { PurchaseRequisitionService } from './purchase-requisition.service';

@NgModule({
  imports: [
    CommonModule,
    PurchaseRequisitionRoutingModule,
    PageHeaderModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    BsComponentModule
  ],
  declarations: [PurchaseRequisitionComponent, PurchaseRequisitionAddComponent],
  providers: [PurchaseRequisitionService]
})
export class PurchaseRequisitionModule { }
