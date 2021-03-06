import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../company.service';
import { StatesService } from '../../states/states.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-branch-edit',
  templateUrl: './branch-edit.component.html',
  styleUrls: ['./branch-edit.component.scss']
})
export class BranchEditComponent implements OnInit {

  @Input() companyBranchId: number;

  @Output() showBranchList = new EventEmitter();

  companyBranch;
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
      branch_name: [null, Validators.required],
      branch_email: [null, [Validators.required,Validators.email]],
      branch_contact_no: [null, Validators.required],
      branch_address: [null, Validators.required],
      branch_state: [null, Validators.required],
      branch_city: [null, Validators.required],
      branch_pincode: [null, Validators.required],
      branch_gstin: [null, Validators.required],
      branch_pan: [null, Validators.required],
      branch_cin: [null, Validators.required]
    });
    // console.log(this.companyBranchId);
    this.companyBranch = {
      id: '',
      branch_name: '',
      branch_email: '',
      branch_contact_no: '',
      branch_address: '',
      branch_state: '',
      branch_city: '',
      branch_pincode: '',
      branch_gstin: '',
      branch_pan: '',
      branch_cin: '',
      company: this.route.snapshot.params['id']
    };

    this.getCompanyBranchDetails(this.companyBranchId);
    this.getStateList();
  }

  getCompanyBranchDetails = function (id) {

    this.companyService.getCompanyBranchDetails(id).subscribe(
      (data: any[]) => {
        this.companyBranch = data;
      }
    );
  }

  updateCompanyBranch = function () {
    if (this.form.valid) {
      this.companyService.updateCompanyBranch(this.companyBranch).subscribe(
        response => {
          //this.goToList('states');
          this.toastr.success('Branch updated successfully', '', {
            timeOut: 3000,
          });
          this.showBranchList.emit();
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

  btnClickNav = function () {
    this.showBranchList.emit();
  };

  getStateList = function () {
    this.statesService.getStateActiveList().subscribe(
      (data: any[]) => {
        this.stateList = data;
      }
    );
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
