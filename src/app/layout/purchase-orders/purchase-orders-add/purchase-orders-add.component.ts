import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from '../../company/company.service';
import { PurchaseRequisitionService } from '../../purchase-requisition/purchase-requisition.service';
import { MaterialService } from '../../material/material.service';
import { PurchaseOrdersService } from '../purchase-orders.service';
import { VendorService } from '../../vendor/vendor.service';
import { TermsConditionService } from '../../terms-condition/terms-condition.service';
import { GstRatesService } from '../../gst-rates/gst-rates.service';
@Component({
  selector: 'app-purchase-orders-add',
  templateUrl: './purchase-orders-add.component.html',
  styleUrls: ['./purchase-orders-add.component.scss']
})
export class PurchaseOrdersAddComponent implements OnInit {
  model: any;
  form: FormGroup;
  purchase_order_detail: any[] = [];
  purchase_order_freight: any[] = [];
  purchase_order_terms: any[] = [];
  requisition_list: any[] = [];
  vendor_list: any[] = [];
  requisition_details: any;
  vendor_address_list: any[] = [];
  visible_key: boolean;
  terms_condition_list: any[] = [];
  gst_rates_list: any[] = []
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private purchaseOrdersService: PurchaseOrdersService,
    private purchaseRequisitionService: PurchaseRequisitionService,
    private materialService: MaterialService,
    private companyService: CompanyService,
    private vendorService: VendorService,
    private termsConditionService: TermsConditionService,
    private gstRatesService: GstRatesService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      requisition: ['', Validators.required],
      quotation_no: ['', Validators.required],
      quotation_date: ['', Validators.required],
      pur_org: ['', Validators.required],
      pur_grp: ['', Validators.required],
      company: ['', Validators.required],
      vendor: ['', Validators.required],
      vendor_address: ['', Validators.required],
      grand_total: ['', Validators.required],
      grand_total_words: ['', Validators.required],
      purchase_order_detail: this.formBuilder.array([]),
      purchase_order_freight: this.formBuilder.array([]),
      purchase_order_terms: this.formBuilder.array([]),
    });
    this.getRequisitionList();
    this.getVendorList();
    this.getTermsConditionList();
    this.getGstRatesList();
  }
  getGstRatesList(){
    this.gstRatesService.getGSTListWithoutPagination().subscribe(res => {
      this.gst_rates_list = res;
      console.log(res)
    })
  }
  getTermsConditionList(){
    this.termsConditionService.getTermsListWithoutPagination().subscribe(res => {
      this.terms_condition_list = res;
      console.log(this.terms_condition_list)
    })
  }
  getVendorList() {
    this.vendorService.getVendorListWithoutPagination().subscribe(res => {
      this.vendor_list = res;
    })
  }
  getRequisitionList() {
    this.purchaseRequisitionService.getPurchaseRequisitionListWithoutPagination().subscribe(res => {
      this.requisition_list = res;
    })
  }
  btnClickNav = function (toNav) {
    this.router.navigateByUrl('/' + toNav);
  };
  vendorChange(id) {
    this.vendorService.getVendorDetails(id).subscribe(res => {
      this.vendor_address_list = res.vendor_address;
    })
  }
  requisitionChange(id) {
    if (id) {
      this.requisition_details = '';
      this.purchaseRequisitionService.getPurchaseRequisitionDetails(id).subscribe(res => {
        this.requisition_details = res;
        this.form.value.company = this.requisition_details.company.id;
        this.form.value.pur_org = this.requisition_details.purchase_grp.id
        this.form.value.pur_grp = this.requisition_details.purchase_org.id
        const order_detail_control = <FormArray>this.form.controls['purchase_order_detail'];
        const order_freight_control = <FormArray>this.form.controls['purchase_order_freight'];
        const order_terms_control = <FormArray>this.form.controls['purchase_order_terms'];
        this.requisition_details.requisition_detail.forEach(x => {
          order_detail_control.push(this.create_purchase_order_detail());
        })
        if (this.requisition_details.requisition_detail.length > 0) {
          order_freight_control.push(this.create_purchase_order_freight());
          order_terms_control.push(this.create_purchase_order_terms());
          this.visible_key = true;
        }
        console.log(this.requisition_details)
      })
    }
    else {
      this.visible_key = false
    }
  }
  // order deatils
  create_purchase_order_detail() {
    return this.formBuilder.group({
      company_branch: ['', Validators.required],
      storage_location: ['', Validators.required],
      storage_bin: ['', Validators.required],
      material: ['', Validators.required],
      uom: ['', Validators.required],
      requisition_quantity: ['', Validators.required],
      order_quantity: ['', Validators.required],
      rate: ['', Validators.required],
      material_value: ['', Validators.required],
      discount_percent: ['', Validators.required],
      discount_value: ['', Validators.required],
      igst: ['', Validators.required],
      cgst: ['', Validators.required],
      sgst: ['', Validators.required],
      gst_amount: ['', Validators.required],
      sub_total: ['', Validators.required],
      delivery_date: ['', Validators.required]
    });
  }

  add_purchase_order_detail() {
    const control = <FormArray>this.form.controls['purchase_order_detail'];
    control.push(this.create_purchase_order_detail());
  }

  delete_purchase_order_detail(index: number) {
    const control = <FormArray>this.form.controls['purchase_order_detail'];
    control.removeAt(index);
  }
  // freight list
  create_purchase_order_freight() {
    return this.formBuilder.group({
      freight_option: ['', Validators.required],
      vendor: ['', Validators.required],
      freight_rate: ['', Validators.required],
      freight_amount: ['', Validators.required],
      freight_gst_rate: ['', Validators.required],
      freight_total: ['', Validators.required]
    });
  }

  add_purchase_order_freight() {
    const control = <FormArray>this.form.controls['purchase_order_freight'];
    control.push(this.create_purchase_order_freight());
  }

  delete_purchase_order_freight(index: number) {
    const control = <FormArray>this.form.controls['purchase_order_freight'];
    control.removeAt(index);
  }
  // terms and conditions
  create_purchase_order_terms() {
    return this.formBuilder.group({
      po_terms: ['', Validators.required]
    });
  }

  add_purchase_order_terms() {
    const control = <FormArray>this.form.controls['purchase_order_terms'];
    control.push(this.create_purchase_order_terms());
  }

  delete_purchase_order_terms(index: number) {
    const control = <FormArray>this.form.controls['purchase_order_terms'];
    control.removeAt(index);
  }
  goToList(toNav) {
    this.router.navigateByUrl('/' + toNav);
  };
  addPurchaseOrder() {
    if (this.form.valid) {
      // this.purchaseOrdersService.addNewPurchaseOrder(this.form.value).subscribe(
      //   response => {
      //     // console.log(response)
      //     this.toastr.success('Purchase order added successfully', '', {
      //       timeOut: 3000,
      //     });
      //     this.goToList('vendor');
      //   },
      //   error => {
      //     console.log('error', error)
      //     // this.toastr.error('everything is broken', '', {
      //     //   timeOut: 3000,
      //     // });
      //   }
      // );
    } else {
      this.markFormGroupTouched(this.form)
    }

  }

  markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control.controls) {
        control.controls.forEach(c => this.markFormGroupTouched(c));
      }
    });
  }

  reSet() {
    this.form.reset();
  }

  displayFieldCss(field: string) {
    return {
      'is-invalid': this.form.get(field).invalid && (this.form.get(field).dirty || this.form.get(field).touched),
      'is-valid': this.form.get(field).valid && (this.form.get(field).dirty || this.form.get(field).touched)
    };
  }
}
