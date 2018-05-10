import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SaleGroupRoutingModule } from './sale-group-routing.module';
import { SaleGroupComponent } from './sale-group.component';
import { SaleGroupAddComponent } from './sale-group-add/sale-group-add.component';
import { PageHeaderModule } from '../../shared';
import { SaleGroupEditComponent } from './sale-group-edit/sale-group-edit.component';
import { SaleGroupService } from './sale-group.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SaleGroupRoutingModule,
    PageHeaderModule
  ],
  declarations: [SaleGroupComponent, SaleGroupAddComponent, SaleGroupEditComponent],
  providers: [SaleGroupService]
})
export class SaleGroupModule { }
