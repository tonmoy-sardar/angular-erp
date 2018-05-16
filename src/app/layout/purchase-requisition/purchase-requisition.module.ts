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
import { PurchaseRequisitionDeatilsComponent } from './purchase-requisition-deatils/purchase-requisition-deatils.component';

import { MaterialService } from '../material/material.service';
import { CompanyService} from '../company/company.service';
import { PurchaseOrganizationService} from '../purchase-organization/purchase-organization.service';
import { PurchaseGroupService} from '../purchase-group/purchase-group.service';


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
  declarations: [PurchaseRequisitionComponent, PurchaseRequisitionAddComponent, PurchaseRequisitionDeatilsComponent],
  providers: [PurchaseRequisitionService,MaterialService,CompanyService,PurchaseOrganizationService,PurchaseGroupService]
})
export class PurchaseRequisitionModule { }
