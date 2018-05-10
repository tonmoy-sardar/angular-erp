import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PurchaseInvoiceRoutingModule } from './purchase-invoice-routing.module';
import { PurchaseInvoiceComponent } from './purchase-invoice.component';
import { PurchaseInvoiceAddComponent } from './purchase-invoice-add/purchase-invoice-add.component';
import { PageHeaderModule } from '../../shared';
import { PurchaseInvoiceService } from './purchase-invoice.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    PurchaseInvoiceRoutingModule,
    PageHeaderModule
  ],
  declarations: [PurchaseInvoiceComponent, PurchaseInvoiceAddComponent],
  providers: [PurchaseInvoiceService]
})
export class PurchaseInvoiceModule { }
