import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SaleOrganizationRoutingModule } from './sale-organization-routing.module';
import { SaleOrganizationComponent } from './sale-organization.component';
import { SaleOrganizationAddComponent } from './sale-organization-add/sale-organization-add.component';
import { PageHeaderModule } from '../../shared';
import { SaleOrganizationEditComponent } from './sale-organization-edit/sale-organization-edit.component';
import { SaleOrganizationService } from './sale-organization.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SaleOrganizationRoutingModule,
    PageHeaderModule
  ],
  declarations: [SaleOrganizationComponent, SaleOrganizationAddComponent, SaleOrganizationEditComponent],
  providers: [SaleOrganizationService]
})
export class SaleOrganizationModule { }
