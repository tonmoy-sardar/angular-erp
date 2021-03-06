import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../company.service';
import { StatesService } from '../../states/states.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-storage-location-add',
  templateUrl: './storage-location-add.component.html',
  styleUrls: ['./storage-location-add.component.scss']
})
export class StorageLocationAddComponent implements OnInit {
  @Output() showStorageList = new EventEmitter();

  companyStorage;
  stateList;
  companyBranchList;
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
      storage_email: [null, [Validators.required,Validators.email]],
      storage_contact_no: [null, Validators.required],
      storage_address: [null, Validators.required],
      storage_state: [null, Validators.required],
      storage_city: [null, Validators.required],
      storage_pincode: [null, Validators.required],
      branch: [null, Validators.required]
    });
    this.companyStorage = {
      storage_email: '',
      storage_contact_no: '',
      storage_address: '',
      storage_state: '',
      storage_city: '',
      storage_pincode: '',
      company: this.route.snapshot.params['id'],
      branch: ''
    };
    this.getStateList();
    this.getCompanyBranchList(this.route.snapshot.params['id']);
  }

  addNewCompanyStorage = function () {
    if (this.form.valid) {
      this.companyService.addNewCompanyStorage(this.companyStorage).subscribe(
        response => {
          this.toastr.success('Store added successfully', '', {
            timeOut: 3000,
          });
          //this.goToList('states');
          this.showStorageList.emit();
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
    this.showStorageList.emit();
  };

  getStateList = function () {
    this.statesService.getStateActiveList().subscribe(
      (data: any[]) => {
        this.stateList = data;
      }
    );
  };

  getCompanyBranchList = function (id) {
    this.companyService.getCompanyBranchList(id).subscribe(
      (data: any[]) => {
        this.companyBranchList = data['results'];
        // console.log(this.companyBranchList);
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
