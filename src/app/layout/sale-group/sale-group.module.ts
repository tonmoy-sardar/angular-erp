import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleGroupRoutingModule } from './sale-group-routing.module';
import { SaleGroupComponent } from './sale-group.component';
import { SaleGroupAddComponent } from './sale-group-add/sale-group-add.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    SaleGroupRoutingModule,
    PageHeaderModule
  ],
  declarations: [SaleGroupComponent, SaleGroupAddComponent]
})
export class SaleGroupModule { }
