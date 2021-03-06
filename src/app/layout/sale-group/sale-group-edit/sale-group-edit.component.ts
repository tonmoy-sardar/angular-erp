import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SaleGroupService } from '../sale-group.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-sale-group-edit',
  templateUrl: './sale-group-edit.component.html',
  styleUrls: ['./sale-group-edit.component.scss']
})
export class SaleGroupEditComponent implements OnInit {
  saleGroup;
  form: FormGroup;
  constructor(
    private saleGroupService: SaleGroupService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      description: [null, Validators.required]
    });
    this.saleGroup = {
      id: '',
      name: '',
      description: ''
    };
    this.getSaleGroupDetails(this.route.snapshot.params['id']);
  }

  getSaleGroupDetails = function (id) {

    this.saleGroupService.getSaleGroupDetails(id).subscribe(
      (data: any[]) => {
        this.purchaseGroup = data;
      }
    );
  }

  goToList = function (toNav) {
    this.router.navigateByUrl('/' + toNav);
  };


  updateSaleGroup = function () {
    if (this.form.valid) {
      this.saleGroupService.updateSaleGroup(this.saleGroup).subscribe(
        response => {
          this.toastr.success('Sale group updated successfully', '', {
            timeOut: 3000,
          });
          this.goToList('sale-group');
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

  btnClickNav = function (toNav) {
    this.router.navigateByUrl('/' + toNav);
  };

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
