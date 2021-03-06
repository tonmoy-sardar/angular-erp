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
declare var require: any;
var converter = require('number-to-words');
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
  gst_rates_list: any[] = [];
  get_gst_deatils: any;
  material_details_list: any[] = [];
  sum: number = 0;
 
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
      grand_total: [0, Validators.required],
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
  getGstRatesList() {
    this.gstRatesService.getGSTListWithoutPagination().subscribe(res => {
      this.gst_rates_list = res;
      // console.log(res)
    })
  }
  getTermsConditionList() {
    this.termsConditionService.getTermsListWithoutPagination().subscribe(res => {
      this.terms_condition_list = res;
      // console.log(this.terms_condition_list)
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
    const order_freight_control = <FormArray>this.form.controls['purchase_order_freight'];
    const order_detail_control = <FormArray>this.form.controls['purchase_order_detail'];
    const order_terms_control = <FormArray>this.form.controls['purchase_order_terms'];
    if (id) {
      this.clearFormArray(order_freight_control)
      this.requisition_details = '';
      this.material_details_list = [];
      this.sum = 0;
      this.form.patchValue({
        grand_total: this.sum
      })
      this.purchaseRequisitionService.getPurchaseRequisitionDetails(id).subscribe(res => {
        this.requisition_details = res;
        this.requisition_details.requisition_detail.forEach(x => {
          var Mdtl = {
            material: x.material.id,
            gst_amount: '',
            order_quantity: '',
            rate: '',
            discount_percent: '',
            delivery_date: '',
            sub_total: ''
          }
          this.material_details_list.push(Mdtl)
        })
        this.form.patchValue({
          company: this.requisition_details.company.id,
          pur_org: this.requisition_details.purchase_grp.id,
          pur_grp: this.requisition_details.purchase_org.id
        })
        if (this.requisition_details.requisition_detail.length > 0) {
          order_freight_control.push(this.create_purchase_order_freight());
          this.visible_key = true;
        }
      })
    }
    else {
      this.clearFormArray(order_freight_control);
      this.clearFormArray(order_detail_control);
      this.clearFormArray(order_terms_control);
      this.material_details_list = [];
      this.visible_key = false;
    }
  }

  clearFormArray = (formArray: FormArray) => {
    while (formArray.length !== 0) {
      formArray.removeAt(0)
    }
  }

  // order deatils
  create_purchase_order_detail(mat) {
    return this.formBuilder.group({
      company_branch: [mat.branch.id, Validators.required],
      storage_location: [mat.storage_location.id, Validators.required],
      storage_bin: [mat.storage_bin.id, Validators.required],
      material: [mat.material.id, Validators.required],
      uom: [mat.uom.id, Validators.required],
      requisition_quantity: [mat.quantity, Validators.required],
      order_quantity: ['', Validators.required],
      rate: ['', Validators.required],
      material_value: ['', Validators.required],
      discount_percent: ['', Validators.required],
      discount_value: ['', Validators.required],
      igst: [mat.material.material_tax[0].igst, Validators.required],
      cgst: [mat.material.material_tax[0].cgst, Validators.required],
      sgst: [mat.material.material_tax[0].sgst, Validators.required],
      gst_amount: ['', Validators.required],
      sub_total: ['', Validators.required],
      delivery_date: ['', Validators.required]
    });
  }

  add_purchase_order_detail(mat) {
    const control = <FormArray>this.form.controls['purchase_order_detail'];
    control.push(this.create_purchase_order_detail(mat));
  }

  delete_purchase_order_detail(index: number) {
    const control = <FormArray>this.form.controls['purchase_order_detail'];
    control.removeAt(index);
  }

  matCheck(val, mat) {
    if (val.currentTarget.checked) {
      this.add_purchase_order_detail(mat)
    } else {
      var index = this.form.value.purchase_order_detail.findIndex(p => p.material == mat.material.id)
      this.delete_purchase_order_detail(index)
    }
    this.sum = 0;
    this.material_details_list.forEach(x => {
      var Mindex = this.form.value.purchase_order_detail.findIndex(p => p.material == x.material)
      if (Mindex > -1) {
        this.sum += Math.round(x.sub_total)
      }
    })
    this.form.patchValue({
      grand_total: this.sum,
      grand_total_words: converter.toWords(this.sum)
    })
  }
  getSubTotal(quantity, rate, discount, i) {
    if (Math.round(quantity) > Math.round(this.requisition_details.requisition_detail[i].quantity)) {
      this.material_details_list[i].order_quantity = Math.round(this.requisition_details.requisition_detail[i].quantity)
      this.toastr.error('Please enter less then PR quantity', '', {
        timeOut: 3000,
      });
    }
    var igst = Math.round(this.requisition_details.requisition_detail[i].material.material_tax[0].igst)
    if (quantity != "" && rate != "" && discount != "") {
      var val = Math.round((rate * quantity) - ((rate * quantity * discount) / 100))
      var gst_amount = Math.round((val * igst)/100)
      this.material_details_list[i].gst_amount = gst_amount
      this.material_details_list[i].sub_total = Math.round(val + gst_amount)
    }
    else if (quantity != "" && rate != "") {
      var val = Math.round((rate * quantity))
      var gst_amount = Math.round((val * igst)/100)
      this.material_details_list[i].gst_amount = gst_amount
      this.material_details_list[i].sub_total = Math.round(val + gst_amount)
    }
    this.sum = 0;
    this.material_details_list.forEach(x => {
      var Mindex = this.form.value.purchase_order_detail.findIndex(p => p.material == x.material)
      if (Mindex > -1) {
        this.sum += Math.round(x.sub_total)
      }
    })
    this.form.patchValue({
      grand_total: this.sum,
      grand_total_words: converter.toWords(this.sum)
    })

  }
  // freight list
  create_purchase_order_freight() {
    return this.formBuilder.group({
      freight_option: 1,
      vendor: null,
      freight_rate: 1,
      freight_amount: ['', Validators.required],
      freight_gst_rate: ['', Validators.required],
      freight_total: [0, Validators.required]
    });
  }

  getPurchaseOrderFreight(form){
    return form.get('purchase_order_freight').controls
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
  create_purchase_order_terms(id) {
    return this.formBuilder.group({
      po_terms: [id, Validators.required]
    });
  }

  add_purchase_order_terms(id) {
    const control = <FormArray>this.form.controls['purchase_order_terms'];
    control.push(this.create_purchase_order_terms(id));
  }

  delete_purchase_order_terms(index: number) {
    const control = <FormArray>this.form.controls['purchase_order_terms'];
    control.removeAt(index);
  }
  termsCheck(val, id) {
    if (val.currentTarget.checked) {
      this.add_purchase_order_terms(id)
    } else {
      var index = this.form.value.purchase_order_terms.findIndex(p => p.po_terms == id)
      this.delete_purchase_order_terms(index)
    }
  }
  getFreightTotal(rate, amount, gst, i) {
    if (rate != "" && amount != "" && gst != "") {
      if (gst > 0) {
        this.gstRatesService.getGSTDetails(gst).subscribe(res => {
          this.get_gst_deatils = res;
          this.form.value.purchase_order_freight[i].freight_total = Math.round(amount + Math.round(this.get_gst_deatils.igst));
        })
      }
    }
  }
  goToList(toNav) {
    this.router.navigateByUrl('/' + toNav);
  };
  addPurchaseOrder() {
    if (this.form.value.purchase_order_detail.length == 0) {
      this.toastr.error('Check atleast one item from list of item/s', '', {
        timeOut: 3000,
      });
      return;
    }
    const order_detail_control = <FormArray>this.form.controls['purchase_order_detail'];
    this.material_details_list.forEach(x => {
      if(x.gst_amount == "" || x.rate == "" || x.discount_percent == "" || x.delivery_date == ""){
        this.toastr.error('All fields are required in every row ', '', {
          timeOut: 3000,
        });
        return;
      }
      var  myDate = new Date(x.delivery_date.year, x.delivery_date.month-1, x.delivery_date.day)
      var Mindex = this.form.value.purchase_order_detail.findIndex(p => p.material == x.material)
      if (Mindex > -1) {
        order_detail_control.at(Mindex).patchValue({
          gst_amount: x.gst_amount,
          rate: x.rate,
          order_quantity: x.order_quantity,
          discount_percent: x.discount_percent,
          discount_value: Math.round((x.rate * x.order_quantity) - (x.sub_total - x.gst_amount)),
          sub_total: x.sub_total,
          material_value: Math.round((x.rate * x.order_quantity)),
          delivery_date: myDate.toISOString()
        });
      }
    })
    if (this.form.valid) {
      var QtnDate = new Date(this.form.value.quotation_date.year,this.form.value.quotation_date.month-1,this.form.value.quotation_date.day)
      this.form.patchValue({
        quotation_date: QtnDate.toISOString()
      })
      this.purchaseOrdersService.addNewPurchaseOrder(this.form.value).subscribe(
        response => {
          // console.log(response)
          this.toastr.success('Purchase order added successfully', '', {
            timeOut: 3000,
          });
          this.goToList('purchase-orders');
        },
        error => {
          console.log('error', error)
          // this.toastr.error('everything is broken', '', {
          //   timeOut: 3000,
          // });
        }
      );
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
