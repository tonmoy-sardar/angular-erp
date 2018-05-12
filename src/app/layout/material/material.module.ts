import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialRoutingModule } from './material-routing.module';

import { MaterialAddComponent } from './material-add/material-add.component';
import { MaterialEditComponent } from './material-edit/material-edit.component';
import { MaterialComponent } from './material.component';
import { PageHeaderModule } from '../../shared';

import { MaterialService } from './material.service';
import { CompanyService} from '../company/company.service';
import { PurchaseOrganizationService} from '../purchase-organization/purchase-organization.service';
import { PurchaseGroupService} from '../purchase-group/purchase-group.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    MaterialRoutingModule,
    PageHeaderModule
  ],
  declarations: [MaterialAddComponent, MaterialEditComponent, MaterialComponent],
  providers: [MaterialService,CompanyService,PurchaseOrganizationService,PurchaseGroupService]
})
export class MaterialModule { }
