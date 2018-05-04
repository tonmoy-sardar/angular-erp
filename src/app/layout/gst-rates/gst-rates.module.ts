import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { GstRatesRoutingModule } from './gst-rates-routing.module';
import { GstRatesComponent } from './gst-rates.component';
import { GstRatesAddComponent } from './gst-rates-add/gst-rates-add.component';
import { GstRatesEditComponent } from './gst-rates-edit/gst-rates-edit.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    GstRatesRoutingModule,
    PageHeaderModule
  ],
  declarations: [GstRatesComponent, GstRatesAddComponent, GstRatesEditComponent]
})
export class GstRatesModule { }
