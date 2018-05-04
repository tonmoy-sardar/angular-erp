import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gst-rates-add',
  templateUrl: './gst-rates-add.component.html',
  styleUrls: ['./gst-rates-add.component.scss']
})
export class GstRatesAddComponent implements OnInit {
  gstRates;

  constructor(private router: Router) { }

  ngOnInit() {

    this.gstRates = {
      identifiable_name: '',
      igst: '',
      cgst:'',
      sgst:''
    };
  }

  btnClickNav= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };
}
