import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';
import { PaymentAddComponent } from './payment-add/payment-add.component';
import { PageHeaderModule } from '../../shared';

import { BsComponentModule } from '../bs-component/bs-component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    PaymentRoutingModule,
    PageHeaderModule,
    BsComponentModule
  ],
  declarations: [PaymentComponent, PaymentAddComponent]
})
export class PaymentModule { }
