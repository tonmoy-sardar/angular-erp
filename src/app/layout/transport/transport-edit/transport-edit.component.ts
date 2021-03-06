import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StatesService } from '../../states/states.service';
import { CompanyService } from '../../company/company.service';
import { TransportService } from '../transport.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-transport-edit',
  templateUrl: './transport-edit.component.html',
  styleUrls: ['./transport-edit.component.scss']
})
export class TransportEditComponent implements OnInit {
  transport;
  form: FormGroup;
  companyList = [];
  storageList = [];
  stateList = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private transportService: TransportService,
    private companyService: CompanyService,
    private statesService: StatesService
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      transporter_name: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(12)
      ]),
      company: new FormControl('', Validators.required),
      storage: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      pan: new FormControl('', Validators.required),
      pin: new FormControl('', Validators.required),
      gstin: new FormControl('', Validators.required),
      amount_credit: new FormControl('', Validators.required),
      amount_debit: new FormControl('', Validators.required)
    });
    this.getCompanyList();
    this.getStorageList();
    this.getStateList();
    this.getTransport(this.route.snapshot.params['id']);
    this.transport = {
      transporter_name: '',
      email: '',
      phone: '',
      company: '',
      storage: '',
      city: '',
      pan: '',
      pin: '',
      gstin: '',
      amount_credit: '',
      amount_debit: ''
    };
  }
  goToList(toNav) {
    this.router.navigateByUrl('/' + toNav);
  };
  getStateList() {
    this.statesService.getStateActiveList().subscribe(res => {
      this.stateList = res;
      // console.log(this.stateList);
    }
    );
  };
  getStorageList() {
    this.companyService.getStorageList().subscribe(res => {
      this.storageList = res.results;
      // console.log(this.storageList)
    })
  }
  getCompanyList() {
    this.companyService.getCompanyDropdownList().subscribe(
      (data: any[]) => {
        this.companyList = data;
        // console.log(this.companyList);
      }
    );
  };
  getTransport(id) {
    this.transportService.getTransporterDetails(id).subscribe(res => {
      this.transport = res
    })
  }
  btnClickNav = function (toNav) {
    this.router.navigateByUrl('/' + toNav);
  };
  updateTransport() {
    if (this.form.valid) {
      this.transportService.updateTransporter(this.transport).subscribe(
        response => {
          // console.log(response)
          this.toastr.success('Transporter updated successfully', '', {
            timeOut: 3000,
          });
          this.goToList('transport');
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
