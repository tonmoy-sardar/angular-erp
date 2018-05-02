import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-purchase-group',
  templateUrl: './purchase-group.component.html',
  styleUrls: ['./purchase-group.component.scss']
})
export class PurchaseGroupComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  btnClickNav= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };
}
