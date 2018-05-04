import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transport-add',
  templateUrl: './transport-add.component.html',
  styleUrls: ['./transport-add.component.scss']
})
export class TransportAddComponent implements OnInit {
  transport;

  constructor(private router: Router) { }


  ngOnInit() {
    this.transport = {
      transporter_name: '',
      email: '',
      contact_no:'',
      city:'',
      pincode:'',
      pan:'',
      gstin:'',
      amount_credit:'',
      amount_debit:''
    };
  }

  btnClickNav= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };

}
