import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DesignationRoutingModule } from './designation-routing.module';
import { DesignationComponent } from './designation.component';
import { DesignationAddComponent } from './designation-add/designation-add.component';
import { DesignationEditComponent } from './designation-edit/designation-edit.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    DesignationRoutingModule,
    PageHeaderModule
  ],
  declarations: [DesignationComponent, DesignationAddComponent, DesignationEditComponent]
})
export class DesignationModule { }
