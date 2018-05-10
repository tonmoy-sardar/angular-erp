import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PurchaseOrganizationRoutingModule } from './purchase-organization-routing.module';
import { PurchaseOrganizationComponent } from './purchase-organization.component';
import { PageHeaderModule } from '../../shared';
import { PurchaseOrganizationAddComponent } from './purchase-organization-add/purchase-organization-add.component';
import { PurchaseOrganizationEditComponent } from './purchase-organization-edit/purchase-organization-edit.component';
import { PurchaseOrganizationMappingComponent } from './purchase-organization-mapping/purchase-organization-mapping.component';
import { PurchaseOrganizationService } from './purchase-organization.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    PurchaseOrganizationRoutingModule,
    PageHeaderModule
  ],
  declarations: [PurchaseOrganizationComponent, PurchaseOrganizationAddComponent, PurchaseOrganizationEditComponent, PurchaseOrganizationMappingComponent],
  providers: [PurchaseOrganizationService]
})
export class PurchaseOrganizationModule { }
