import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-purchase-requisition-add',
  templateUrl: './purchase-requisition-add.component.html',
  styleUrls: ['./purchase-requisition-add.component.scss']
})
export class PurchaseRequisitionAddComponent implements OnInit {
  form: FormGroup;
  items: FormArray;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) { }
  ngOnInit() {
    this.form = this.formBuilder.group({
      purchase_organization: ['', Validators.required],
      purchase_group: ['', Validators.required],
      company: ['', Validators.required],
      date: ['', Validators.required],
      note: ['', Validators.required],
      items: this.formBuilder.array([ this.createItem() ])
    });
  }
  createItem() {
    return this.formBuilder.group({
      material: ['', Validators.required],
      quantity: ['', Validators.required],
      UMO: ['', Validators.required],
      plant: ['', Validators.required],
      storage: ['', Validators.required],
      bin: ['', Validators.required],
      vendor: ['', Validators.required],
      vendor_address: ['', Validators.required]
    });
  }

  addItem(){
    this.items = this.form.get('items') as FormArray;
    this.items.push(this.createItem());
  }
  btnClickNav= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };

  addPurchaseRequisition () {
    console.log(this.form.value)
    if (this.form.valid) {
      
    } else {
      Object.keys(this.form.controls).forEach(field => {
        const control = this.form.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }

  }

  reSet() {
    this.form.reset();
  }
  isFieldValid(field: string) {
    return !this.form.get(field).valid && this.form.get(field).touched;
  }
  displayFieldCss(field: string) {
    return {
      'is-invalid': this.form.get(field).invalid && (this.form.get(field).dirty || this.form.get(field).touched),
      'is-valid': this.form.get(field).valid && (this.form.get(field).dirty ||this.form.get(field).touched)
    };
  }

}
