import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../company.service';
import { StatesService } from '../../states/states.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {
  company;
  stateList;
  form: FormGroup;
  company_name: FormControl;
  company_url: FormControl;
  company_email: FormControl;
  company_contact: FormControl;
  company_address: FormControl;
  company_state: FormControl;
  company_city: FormControl;
  company_pin: FormControl;
  company_gst: FormControl;
  company_pan: FormControl;
  company_cin: FormControl;
  constructor(
    private companyService: CompanyService,
    private statesService: StatesService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    // this.form = this.formBuilder.group({
    //   company_name: [null, Validators.required],
    //   company_url: [null, Validators.required],
    //   company_email: [null, [Validators.required,Validators.email]],
    //   company_contact: [null, Validators.required],
    //   company_address: [null, Validators.required],
    //   company_state: ['', Validators.required],
    //   company_city: [null, Validators.required],
    //   company_pin: [null, Validators.required],
    //   company_gst: [null, Validators.required],
    //   company_pan: [null, Validators.required],
    //   company_cin: [null, Validators.required]
    // });
    this.createFormControls();
    this.createForm();
    this.company = {
      id: '',
      company_name: '',
      company_url: '',
      company_email: '',
      company_contact: '',
      company_address: '',
      company_state: '',
      company_city: '',
      company_pin: '',
      company_gst: '',
      company_pan: '',
      company_cin: ''
    };
    this.getCompanyDetails(this.route.snapshot.params['id']);
    this.getStateList();
  }
  createFormControls() {
    this.company_name = new FormControl('', Validators.required);
    this.company_url = new FormControl('', Validators.required);
    this.company_email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.company_contact = new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(12)
    ]);
    this.company_address = new FormControl('', Validators.required);
    this.company_state = new FormControl('', Validators.required);
    this.company_city = new FormControl('', Validators.required);
    this.company_pin = new FormControl('', Validators.required);
    this.company_gst = new FormControl('', Validators.required);
    this.company_pan = new FormControl('', Validators.required);
    this.company_cin = new FormControl('', Validators.required);
  }
  createForm() {
    this.form = new FormGroup({
      company_name: this.company_name,
      company_url: this.company_url,
      company_email: this.company_email,
      company_contact: this.company_contact,
      company_address: this.company_address,
      company_state: this.company_state,
      company_city: this.company_city,
      company_pin: this.company_pin,
      company_gst: this.company_gst,
      company_pan: this.company_pan,
      company_cin: this.company_cin
    });
  }
  getCompanyDetails = function (id) {

    this.companyService.getCompanyDetails(id).subscribe(
      (data: any[]) => {
        this.company = data;
        // console.log(this.company);
      }
    );
  }

  goToList = function (toNav) {
    this.router.navigateByUrl('/' + toNav);
  };


  updateCompany = function () {
    if (this.form.valid) {
      this.companyService.updateCompany(this.company).subscribe(
        response => {
          this.toastr.success('Company updated successfully', '', {
            timeOut: 3000,
          });
          this.goToList('company');
        },
        error => {
          console.log('error', error)
          // this.toastr.error('everything is broken', '', {
          //   timeOut: 3000,
          // });
        }
      );
    } else {
      Object.keys(this.form.controls).forEach(field => {
        const control = this.form.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }
    
  }

  getStateList = function () {
    this.statesService.getStateActiveList().subscribe(
      (data: any[]) => {
        this.stateList = data;
      }
    );
  };

  btnClickNav = function (toNav) {
    this.router.navigateByUrl('/' + toNav);
  };

  reSet() {
    this.form.reset();
  }

  isFieldValid(field: string) {
    return !this.form.get(field).valid && this.form.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      'is-invalid': !this.form.get(field).valid && this.form.get(field).touched,
      'is-valid': this.form.get(field).valid
    };
  }

}
