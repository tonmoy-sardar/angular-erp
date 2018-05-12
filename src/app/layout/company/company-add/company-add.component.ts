import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../company.service';
import { StatesService } from '../../states/states.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.scss']
})
export class CompanyAddComponent implements OnInit {
  companyList;
  stateList;
  form: FormGroup;
  constructor(
    private companyService: CompanyService,
    private statesService: StatesService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      parent: ['', Validators.required],
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
    this.getCompanyDropdownList();
    this.getStateList();
  }


  goToList = function (toNav) {
    this.router.navigateByUrl('/' + toNav);
  };

  addNewCompany = function () {
    if (this.form.valid) {
      this.companyService.addNewCompany(this.form.value).subscribe(
        response => {
          // console.log(response)
          this.toastr.success('Company added successfully', '', {
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
        // console.log(this.stateList);
      }
    );
  };

  getCompanyDropdownList = function () {
    this.companyService.getCompanyDropdownList().subscribe(
      (data: any[]) => {
        this.companyList = data;
        // console.log(this.companyList);
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
