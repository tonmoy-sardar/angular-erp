import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleOrganizationRoutingModule } from './sale-organization-routing.module';
import { SaleOrganizationComponent } from './sale-organization.component';
import { SaleOrganizationAddComponent } from './sale-organization-add/sale-organization-add.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    SaleOrganizationRoutingModule,
    PageHeaderModule
  ],
  declarations: [SaleOrganizationComponent, SaleOrganizationAddComponent]
})
export class SaleOrganizationModule { }
