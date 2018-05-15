import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsComponentModule } from '../bs-component/bs-component.module';
import { GstRatesRoutingModule } from './gst-rates-routing.module';
import { GstRatesComponent } from './gst-rates.component';
import { GstRatesAddComponent } from './gst-rates-add/gst-rates-add.component';
import { GstRatesEditComponent } from './gst-rates-edit/gst-rates-edit.component';
import { PageHeaderModule } from '../../shared';
import { GstRatesService } from './gst-rates.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GstRatesRoutingModule,
    PageHeaderModule,
    BsComponentModule,
    NgbModule.forRoot()
  ],
  declarations: [GstRatesComponent, GstRatesAddComponent, GstRatesEditComponent],
  providers: [GstRatesService]
})
export class GstRatesModule { }
