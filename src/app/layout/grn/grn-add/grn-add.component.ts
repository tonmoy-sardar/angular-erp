import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GrnService } from '../grn.service';
import { PurchaseOrdersService } from '../../purchase-orders/purchase-orders.service';
@Component({
  selector: 'app-grn-add',
  templateUrl: './grn-add.component.html',
  styleUrls: ['./grn-add.component.scss']
})
export class GrnAddComponent implements OnInit {
  model: any;
  form: FormGroup;
  grn_detail: any[] = [];
  purchaseOrderList: any[] = [];
  visible_key: boolean;
  material_details_list: any[] = [];
  purchase_order_details: any
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private purchaseOrdersService: PurchaseOrdersService,
    private grnService: GrnService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      po_order: ['', Validators.required],
      pur_org: ['', Validators.required],
      pur_grp: ['', Validators.required],
      company: ['', Validators.required],
      vendor: ['', Validators.required],
      vendor_address: ['', Validators.required],
      waybill_no: ['', Validators.required],
      vehicle_no: ['', Validators.required],
      check_post: [0, Validators.required],
      challan_no: ['', Validators.required],
      challan_date: ['', Validators.required],
      grn_detail: this.formBuilder.array([])
    });
    this.getPurchaseOrderList()
  }

  getPurchaseOrderList() {
    this.purchaseOrdersService.getPurchaseOrderListWithoutPagination().subscribe(res => {
      this.purchaseOrderList = res;
      // console.log(this.purchaseOrderList)
    })
  }

  purchaseOrderChange(id) {
    const grn_detail_control = <FormArray>this.form.controls['grn_detail'];
    if (id) {
      this.clearFormArray(grn_detail_control)
      this.purchase_order_details = '';
      this.material_details_list = [];
      this.purchaseOrdersService.getPurchaseOrderDetails(id).subscribe(res => {
        this.purchase_order_details = res;
        this.purchase_order_details.purchase_order_detail.forEach(x => {
          var Mdtl = {
            material: x.material.id,
            uom: x.uom,
            order_quantity: x.order_quantity,
            receive_quantity: '',
            company_branch: x.company_branch.id,
            storage_location: x.storage_location.id,
            storage_bin: x.storage_bin.id
          }
          this.material_details_list.push(Mdtl)
        })
        this.form.patchValue({
          po_order: this.purchase_order_details.id,
          pur_org: this.purchase_order_details.pur_org.id,
          pur_grp: this.purchase_order_details.pur_grp.id,
          company: this.purchase_order_details.company.id,
          vendor: this.purchase_order_details.vendor.id,
          vendor_address: this.purchase_order_details.vendor_address.id,
        })
        this.visible_key = true;
      })
    }
    else {
      this.clearFormArray(grn_detail_control);
      this.material_details_list = [];
      this.visible_key = false;
    }

  }

  clearFormArray = (formArray: FormArray) => {
    while (formArray.length !== 0) {
      formArray.removeAt(0)
    }
  }
  // gnr deatils
  create_grn_detail(mat) {
    return this.formBuilder.group({
      company_branch: [mat.branch.id, Validators.required],
      storage_location: [mat.storage_location.id, Validators.required],
      storage_bin: [mat.storage_bin.id, Validators.required],
      material: [mat.material.id, Validators.required],
      uom: [mat.uom.id, Validators.required],
      receive_quantity: ['', Validators.required],
      order_quantity: ['', Validators.required]
    });
  }

  add_grn_detail(mat) {
    const control = <FormArray>this.form.controls['grn_detail'];
    control.push(this.create_grn_detail(mat));
  }

  delete_grn_detail(index: number) {
    const control = <FormArray>this.form.controls['grn_detail'];
    control.removeAt(index);
  }

  matCheck(val, mat) {
    if (val.currentTarget.checked) {
      console.log(mat)
      this.create_grn_detail(mat)
    } else {
      var index = this.form.value.grn_detail.findIndex(p => p.material == mat.material.id)
      this.delete_grn_detail(index)
    }
  }

  btnClickNav = function (toNav) {
    this.router.navigateByUrl('/' + toNav);
  };

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
