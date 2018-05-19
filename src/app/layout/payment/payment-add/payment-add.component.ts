import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../../company/company.service';
import { PaymentService } from '../payment.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-add',
  templateUrl: './payment-add.component.html',
  styleUrls: ['./payment-add.component.scss']
})
export class PaymentAddComponent implements OnInit {
  payment;
  form: FormGroup;
  constructor(
    private companyService: CompanyService,
    private paymentService: PaymentService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      company: [null, Validators.required],
      po_inv: [null, Validators.required],
      total_amount: [null, Validators.required],
      bank: [null, Validators.required],
      payment_date: [null, Validators.required],
      payment_mode: [null, Validators.required],
      payment_refrence:[null, Validators.required],
      special_note:[null, Validators.required],
    });
    this.payment = {
      company: '',
      po_inv:'',
      total_amount:'',
      bank:'',
      payment_date:'',
      payment_mode:'',
      payment_refrence:'',
      special_note:'',
    };
  }

  addPayment()  
  {

  }
  btnClickNav(toNav) {
    this.router.navigateByUrl('/'+toNav);
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
