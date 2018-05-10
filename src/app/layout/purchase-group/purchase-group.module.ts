import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PurchaseGroupRoutingModule } from './purchase-group-routing.module';
import { PurchaseGroupComponent } from './purchase-group.component';
import { PurchaseGroupAddComponent } from './purchase-group-add/purchase-group-add.component';
import { PageHeaderModule } from '../../shared';
import { PurchaseGroupEditComponent } from './purchase-group-edit/purchase-group-edit.component';
import { PurchaseGroupService } from './purchase-group.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    PurchaseGroupRoutingModule,
    PageHeaderModule
  ],
  declarations: [PurchaseGroupComponent, PurchaseGroupAddComponent, PurchaseGroupEditComponent],
  providers: [PurchaseGroupService]
})
export class PurchaseGroupModule { }
