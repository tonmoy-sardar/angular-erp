import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentComponent } from './department.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { DepartmentEditComponent } from './department-edit/department-edit.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    DepartmentRoutingModule,
    PageHeaderModule
  ],
  declarations: [DepartmentComponent, DepartmentAddComponent, DepartmentEditComponent]
})
export class DepartmentModule { }
