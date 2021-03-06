import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../company.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-storage-bin-edit',
  templateUrl: './storage-bin-edit.component.html',
  styleUrls: ['./storage-bin-edit.component.scss']
})
export class StorageBinEditComponent implements OnInit {
  @Input() companyStorageBinId: number;

  @Output() showStorageBinList = new EventEmitter();

  companyStorageBin;
  companyBranchList;
  companyStorageList;
  UOMList;
  form: FormGroup;
  constructor(
    private companyService: CompanyService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      bin_no: [null, Validators.required],
      bin_volume: [null, Validators.required],
      branch: [null, Validators.required],
      storage: [null, Validators.required],
      uom: [null, Validators.required]
    });
    // console.log(this.companyStorageBinId);

    this.companyStorageBin = {
      id: '',
      bin_no: '',
      bin_volume: '',
      branch: '',
      storage: '',
      uom: '',
      company: this.route.snapshot.params['id']
    };

    this.getCompanyStorageBinDetails(this.companyStorageBinId);
    this.getCompanyBranchList(this.route.snapshot.params['id']);
    this.getCompanyStorageList(this.route.snapshot.params['id']);
    this.getUOMList();
  }

  getCompanyStorageBinDetails = function (id) {

    this.companyService.getCompanyStorageBinDetails(id).subscribe(
      (data: any[]) => {
        this.companyStorageBin = data;
        // console.log(this.companyStorageBin);
      }
    );
  }

  updateCompanyStorageBin = function () {
    if (this.form.valid) {
      this.companyService.updateCompanyStorageBin(this.companyStorageBin).subscribe(
        response => {
          //this.goToList('states');
          this.toastr.success('Storeage bin updated successfully', '', {
            timeOut: 3000,
          });
          this.showStorageBinList.emit();
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
    this.showStorageBinList.emit();
  };


  getCompanyBranchList = function (id) {
    this.companyService.getCompanyBranchList(id).subscribe(
      (data: any[]) => {
        this.companyBranchList = data['results'];
        // console.log(this.companyBranchList);
      }
    );
  };

  getCompanyStorageList = function (id) {
    this.companyService.getCompanyStorageList(id).subscribe(
      (data: any[]) => {
        this.companyStorageList = data['results'];
        // console.log(this.companyStorageList);
      }
    );
  };

  getUOMList = function () {
    this.companyService.getUOMList().subscribe(
      (data: any[]) => {
        this.UOMList = data['results'];
        // console.log(this.UOMList);
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
