import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../../company/company.service';
import { TermsConditionService } from '../terms-condition.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-terms-condition-edit',
  templateUrl: './terms-condition-edit.component.html',
  styleUrls: ['./terms-condition-edit.component.scss']
})
export class TermsConditionEditComponent implements OnInit {
  termsCondition;
  form: FormGroup;
  companyList = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private termsConditionService: TermsConditionService,
    private companyService: CompanyService
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      term_type: new FormControl('', Validators.required),
      company: new FormControl('', Validators.required),
      term_text: new FormControl('', Validators.required)
    });
    this.termsCondition = {
      term_type: '',
      company: '',
      term_text: ''
    };
    this.getCompanyDropdownList()
    this.getTermsCondition(this.route.snapshot.params['id']);
  }
  getCompanyDropdownList() {
    this.companyService.getCompanyDropdownList().subscribe(
      (data: any[]) => {
        this.companyList = data;
        // console.log(this.companyList);
      }
    );
  };
  getTermsCondition(id) {
    this.termsConditionService.getTermsDetails(id).subscribe(
      (data: any[]) => {
        this.termsCondition = data;
      }
    );

  }

  btnClickNav = function (toNav) {
    this.router.navigateByUrl('/' + toNav);
  };
  goToList(toNav) {
    this.router.navigateByUrl('/' + toNav);
  };
  updateTerms () {
    if (this.form.valid) {
      this.termsConditionService.updateTerms(this.termsCondition).subscribe(
        response => {
          // console.log(response)
          this.toastr.success('Terms and services updated successfully', '', {
            timeOut: 3000,
          });
          this.goToList('terms-condition');
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

  reSet() {
    this.form.reset();
  }

  displayFieldCss(field: string) {
    return {
      'is-invalid': this.form.controls[field].invalid && (this.form.controls[field].dirty || this.form.controls[field].touched),
      'is-valid': this.form.controls[field].valid && (this.form.controls[field].dirty || this.form.controls[field].touched)
    };
  }

}
