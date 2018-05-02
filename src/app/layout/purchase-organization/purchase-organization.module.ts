import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseOrganizationRoutingModule } from './purchase-organization-routing.module';
import { PurchaseOrganizationComponent } from './purchase-organization.component';
import { PageHeaderModule } from '../../shared';
import { PurchaseOrganizationAddComponent } from './purchase-organization-add/purchase-organization-add.component';

@NgModule({
  imports: [
    CommonModule,
    PurchaseOrganizationRoutingModule,
    PageHeaderModule
  ],
  declarations: [PurchaseOrganizationComponent, PurchaseOrganizationAddComponent]
})
export class PurchaseOrganizationModule { }
