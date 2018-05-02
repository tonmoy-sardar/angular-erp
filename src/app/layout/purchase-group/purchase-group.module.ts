import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseGroupRoutingModule } from './purchase-group-routing.module';
import { PurchaseGroupComponent } from './purchase-group.component';
import { PurchaseGroupAddComponent } from './purchase-group-add/purchase-group-add.component';
import { PageHeaderModule } from '../../shared';
@NgModule({
  imports: [
    CommonModule,
    PurchaseGroupRoutingModule,
    PageHeaderModule
  ],
  declarations: [PurchaseGroupComponent, PurchaseGroupAddComponent]
})
export class PurchaseGroupModule { }
