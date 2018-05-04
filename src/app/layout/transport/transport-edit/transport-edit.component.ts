import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-transport-edit',
  templateUrl: './transport-edit.component.html',
  styleUrls: ['./transport-edit.component.scss']
})
export class TransportEditComponent implements OnInit {
  transport;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getTransport(this.route.snapshot.params['id']);
  }

  getTransport(id) {
    this.transport = {
      transporter_name: 'Demo Transporter name',
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
