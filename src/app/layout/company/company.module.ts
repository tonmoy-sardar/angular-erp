import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { PageHeaderModule } from '../../shared';
import { CompanyTreeComponent } from './company-tree/company-tree.component';
import { CompanyAddComponent } from './company-add/company-add.component';



@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule,
    PageHeaderModule
  ],
  declarations: [CompanyComponent, CompanyTreeComponent, CompanyAddComponent]
})
export class CompanyModule { }
