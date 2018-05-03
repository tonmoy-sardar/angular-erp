import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRequisitionRoutingModule } from './purchase-requisition-routing.module';
import { PurchaseRequisitionComponent } from './purchase-requisition.component';
import { PageHeaderModule } from '../../shared';
import { PurchaseRequisitionAddComponent } from './purchase-requisition-add/purchase-requisition-add.component';


@NgModule({
  imports: [
    CommonModule,
    PurchaseRequisitionRoutingModule,
    PageHeaderModule
  ],
  declarations: [PurchaseRequisitionComponent, PurchaseRequisitionAddComponent]
})
export class PurchaseRequisitionModule { }
