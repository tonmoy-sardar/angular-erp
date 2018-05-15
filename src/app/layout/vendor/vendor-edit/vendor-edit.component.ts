import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { StatesService } from '../../states/states.service';
import { VendorService } from '../vendor.service';
@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.scss']
})
export class VendorEditComponent implements OnInit {

  form: FormGroup;
  vendor_address: any[] = [];
  vendor_account: any[] = [];
  stateList = [];
  vendorTypeList = [];
  vendor_details;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private statesService: StatesService,
    private vendorService: VendorService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      vendor_fullname: ['', Validators.required],
      vendor_type: ['', Validators.required],
      pan_no: ['', Validators.required],
      cin_no: ['', Validators.required],
      gst_no: ['', Validators.required],
      amount_credit: ['', Validators.required],
      amount_debit: ['', Validators.required],
      vendor_address: this.formBuilder.array([this.createContactInfo()]),
      vendor_account: this.formBuilder.array([this.createBankInfo()])
    });
    this.vendor_details = {
      id: '',
      vendor_fullname: '',
      vendor_type: '',
      pan_no: '',
      cin_no: '',
      amount_credit: '',
      amount_debit: '',
      vendor_address: [
        {
          email: '',
          mobile: '',
          contact_person: '',
          designation: '',
          address: '',
          state: '',
          city: '',
          pincode: ''
        }
      ],
      vendor_account: [
        {
          bank_name: '',
          branch_name: '',
          account_no: '',
          ifsc_code: ''
        }
      ]
    }
    this.getVendorTypeList()
    this.getStateList()
    this.getVendorDetails(this.route.snapshot.params['id']);
  }
  getVendorTypeList() {
    this.vendorService.getVendorTypeList().subscribe(res => {
      this.vendorTypeList = res.results;
    })
  }
  getStateList() {
    this.statesService.getStateActiveList().subscribe(res => {
      this.stateList = res;
      // console.log(this.stateList);
    }
    );
  };
  getVendorDetails(id) {
    this.vendorService.getVendorDetails(id).subscribe(res => {
      this.vendor_details = res
    })
  }
  createContactInfo() {
    return this.formBuilder.group({
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      contact_person: ['', Validators.required],
      designation: ['', Validators.required],
      address: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', Validators.required]
    });
  }

  createBankInfo() {
    return this.formBuilder.group({
      bank_name: ['', Validators.required],
      branch_name: ['', Validators.required],
      account_no: ['', Validators.required],
      ifsc_code: ['', Validators.required]
    });
  }

  addContact() {
    
    const control = <FormArray>this.form.controls['vendor_address'];
    control.push(this.createContactInfo());
    // var vndr_addrs = {
    //   email: '',
    //   mobile: '',
    //   contact_person: '',
    //   designation: '',
    //   address: '',
    //   state: '',
    //   city: '',
    //   pincode: ''
    // }
    // this.vendor_details.vendor_address.push(vndr_addrs)
  }

  deleteContact(index: number) {
    const control = <FormArray>this.form.controls['vendor_address'];
    control.removeAt(index);
    // var arrIndx = this.vendor_details.vendor_address.indexOf(index);
    // if (arrIndx > -1) {
    //   this.vendor_details.vendor_address.splice(arrIndx, 1)
    // }

  }
  addBank() {
    
    const control = <FormArray>this.form.controls['vendor_account'];
    control.push(this.createBankInfo());
    // var vndr_accnt = {
    //   bank_name: '',
    //   branch_name: '',
    //   account_no: '',
    //   ifsc_code: ''
    // }
    // this.vendor_details.vendor_account.push(vndr_accnt)
  }
  deleteBank(index: number) {
    const control = <FormArray>this.form.controls['vendor_account'];
    control.removeAt(index);
    // var arrIndx = this.vendor_details.vendor_account.indexOf(index);
    // if (arrIndx > -1) {
    //   this.vendor_details.vendor_account.splice(arrIndx, 1)
    // }
  }
  btnClickNav(toNav) {
    this.router.navigateByUrl('/' + toNav);
  };
  goToList(toNav) {
    this.router.navigateByUrl('/' + toNav);
  };
  updateVendor() {
    if (this.form.valid) {
      console.log(this.vendor_details)
      this.vendorService.updateVendor(this.vendor_details).subscribe(
        response => {
          // console.log(response)
          this.toastr.success('Vendor updated successfully', '', {
            timeOut: 3000,
          });
          this.goToList('vendor');
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
