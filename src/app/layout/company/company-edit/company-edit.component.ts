import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../company.service';
import { StatesService } from '../../states/states.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  constructor(
    private companyService: CompanyService,
    private statesService: StatesService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      company_name: [null, Validators.required],
      company_url: [null, Validators.required],
      company_email: [null, [Validators.required,Validators.email]],
      company_contact: [null, Validators.required],
      company_address: [null, Validators.required],
      company_state: ['', Validators.required],
      company_city: [null, Validators.required],
      company_pin: [null, Validators.required],
      company_gst: [null, Validators.required],
      company_pan: [null, Validators.required],
      company_cin: [null, Validators.required]
    });
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
