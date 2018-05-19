import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PurchaseInvoiceRoutingModule } from './purchase-invoice-routing.module';
import { PurchaseInvoiceComponent } from './purchase-invoice.component';
import { PurchaseInvoiceAddComponent } from './purchase-invoice-add/purchase-invoice-add.component';
import { PageHeaderModule } from '../../shared';
import { PurchaseInvoiceService } from './purchase-invoice.service';
import { BsComponentModule } from '../bs-component/bs-component.module';
import { GrnService } from '../grn/grn.service';
import { NgxSpinnerModule } from 'ngx-spinner';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PurchaseInvoiceRoutingModule,
    PageHeaderModule,
    NgbModule.forRoot(),
    BsComponentModule,
    NgxSpinnerModule
  ],
  declarations: [PurchaseInvoiceComponent, PurchaseInvoiceAddComponent],
  providers: [PurchaseInvoiceService,GrnService]
})
export class PurchaseInvoiceModule { }
