import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-orders-add',
  templateUrl: './purchase-orders-add.component.html',
  styleUrls: ['./purchase-orders-add.component.scss']
})
export class PurchaseOrdersAddComponent implements OnInit {

  constructor(private router: Router) { }
  model: any;
  ngOnInit() {
  }

  btnClickNav= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };
}
