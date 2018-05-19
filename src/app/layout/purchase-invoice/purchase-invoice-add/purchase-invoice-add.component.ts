import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GrnService } from '../../grn/grn.service';
import { PurchaseInvoiceService } from '../purchase-invoice.service';
@Component({
  selector: 'app-purchase-invoice-add',
  templateUrl: './purchase-invoice-add.component.html',
  styleUrls: ['./purchase-invoice-add.component.scss']
})
export class PurchaseInvoiceAddComponent implements OnInit {
  form: FormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private purchaseInvoiceService: PurchaseInvoiceService,
    private grnService: GrnService
  ) { }

  ngOnInit() {
  }
  
  btnClickNav= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };

}
