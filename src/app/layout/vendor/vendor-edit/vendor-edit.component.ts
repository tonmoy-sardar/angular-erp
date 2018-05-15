import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { StatesService } from '../../states/states.service';
@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.scss']
})
export class VendorEditComponent implements OnInit {

  form: FormGroup;
  contact_info: FormArray;
  bank_info: FormArray;
  stateList = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private statesService: StatesService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      vendor_name: ['', Validators.required],
      pan: ['', Validators.required],
      cin: ['', Validators.required],
      gstin: ['', Validators.required],
      note: ['', Validators.required],
      amount_credit: ['', Validators.required],
      amount_debit: ['', Validators.required],
      contact_info: this.formBuilder.array([this.createContactInfo()]),
      bank_info: this.formBuilder.array([this.createBankInfo()])
    });
    this.getStateList()
    this.getVendorDetails(this.route.snapshot.params['id']);
  }
  getStateList() {
    this.statesService.getStateActiveList().subscribe(res => {
      this.stateList = res;
      // console.log(this.stateList);
    }
    );
  };
  getVendorDetails(id){

  }
  createContactInfo() {
    return this.formBuilder.group({
      email: ['', Validators.required],
      phone: ['', Validators.required],
      contact_person: ['', Validators.required],
      designation: ['', Validators.required],
      address: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      pin: ['', Validators.required]
    });
  }

  createBankInfo() {
    return this.formBuilder.group({
      bank_name: ['', Validators.required],
      branch: ['', Validators.required],
      account_no: ['', Validators.required],
      ifsc: ['', Validators.required]
    });
  }

  addContact() {
    this.contact_info = this.form.get('contact_info') as FormArray;
    this.contact_info.push(this.createContactInfo());
  }
  addBank() {
    this.bank_info = this.form.get('bank_info') as FormArray;
    this.bank_info.push(this.createBankInfo());
  }
  btnClickNav = function (toNav) {
    this.router.navigateByUrl('/' + toNav);
  };
  goToList(toNav) {
    this.router.navigateByUrl('/' + toNav);
  };
  updateVendor() {
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
      'is-valid': this.form.get(field).valid && (this.form.get(field).dirty || this.form.get(field).touched)
    };
  }

}
