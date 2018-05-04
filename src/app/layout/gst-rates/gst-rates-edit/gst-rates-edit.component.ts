import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gst-rates-edit',
  templateUrl: './gst-rates-edit.component.html',
  styleUrls: ['./gst-rates-edit.component.scss']
})
export class GstRatesEditComponent implements OnInit {

  gstRates;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.getGSTRates(this.route.snapshot.params['id']);
  }

  getGSTRates(id) {

    this.gstRates = {
      identifiable_name: 'GST 15%-7.5%-7.5%',
      igst: '15.00',
      cgst:'7.50',
      sgst:'7.50'
    };
  }

  btnClickNav= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };

}
