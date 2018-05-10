import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { PageHeaderModule } from '../../shared';
import { CompanyTreeComponent } from './company-tree/company-tree.component';
import { CompanyAddComponent } from './company-add/company-add.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { BranchListComponent } from './branch-list/branch-list.component';
import { BranchAddComponent } from './branch-add/branch-add.component';
import { BranchEditComponent } from './branch-edit/branch-edit.component';
import { StorageLocationListComponent } from './storage-location-list/storage-location-list.component';
import { StorageLocationAddComponent } from './storage-location-add/storage-location-add.component';
import { StorageLocationEditComponent } from './storage-location-edit/storage-location-edit.component';
import { StorageBinListComponent } from './storage-bin-list/storage-bin-list.component';
import { StorageBinAddComponent } from './storage-bin-add/storage-bin-add.component';
import { StorageBinEditComponent } from './storage-bin-edit/storage-bin-edit.component';


import { BsComponentModule } from '../bs-component/bs-component.module';

import { CompanyService } from './company.service';
import { StatesService} from '../states/states.service';

@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule,
    PageHeaderModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    BsComponentModule
  ],
  declarations: [
    CompanyComponent,
    CompanyTreeComponent, 
    CompanyAddComponent, 
    CompanyDetailsComponent, 
    CompanyEditComponent, 
    BranchListComponent, 
    BranchAddComponent, 
    BranchEditComponent, 
    StorageLocationListComponent, 
    StorageLocationAddComponent, 
    StorageLocationEditComponent, 
    StorageBinListComponent, 
    StorageBinAddComponent, 
    StorageBinEditComponent
  ],
  providers: [CompanyService,StatesService]
})
export class CompanyModule { }
