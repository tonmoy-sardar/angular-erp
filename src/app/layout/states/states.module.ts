import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StatesRoutingModule } from './states-routing.module';
import { StatesComponent } from './states.component';
import { StatesAddComponent } from './states-add/states-add.component';
import { StatesEditComponent } from './states-edit/states-edit.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    StatesRoutingModule,
    PageHeaderModule
  ],
  declarations: [StatesComponent, StatesAddComponent, StatesEditComponent]
})
export class StatesModule { }
