import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-organization-add',
  templateUrl: './purchase-organization-add.component.html',
  styleUrls: ['./purchase-organization-add.component.scss']
})
export class PurchaseOrganizationAddComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  btnClickNav= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };

}
