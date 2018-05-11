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
  providers: [MaterialService]
})
export class MaterialModule { }
