import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsComponentModule } from '../bs-component/bs-component.module';
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
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    PurchaseOrganizationRoutingModule,
    PageHeaderModule,
    BsComponentModule
  ],
  declarations: [PurchaseOrganizationComponent, PurchaseOrganizationAddComponent, PurchaseOrganizationEditComponent, PurchaseOrganizationMappingComponent],
  providers: [PurchaseOrganizationService]
})
export class PurchaseOrganizationModule { }
