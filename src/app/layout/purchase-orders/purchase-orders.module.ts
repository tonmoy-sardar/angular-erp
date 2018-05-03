import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PurchaseOrdersRoutingModule } from './purchase-orders-routing.module';
import { PurchaseOrdersComponent } from './purchase-orders.component';
import { PurchaseOrdersAddComponent } from './purchase-orders-add/purchase-orders-add.component';
import { PageHeaderModule } from '../../shared';

import { BsComponentModule } from '../bs-component/bs-component.module';


@NgModule({
  imports: [
    CommonModule,
    PurchaseOrdersRoutingModule,
    PageHeaderModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    BsComponentModule
  ],
  declarations: [PurchaseOrdersComponent, PurchaseOrdersAddComponent]
})
export class PurchaseOrdersModule { }
