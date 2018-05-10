import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaseOrganizationService } from '../purchase-organization.service';

@Component({
  selector: 'app-purchase-organization-add',
  templateUrl: './purchase-organization-add.component.html',
  styleUrls: ['./purchase-organization-add.component.scss']
})
export class PurchaseOrganizationAddComponent implements OnInit {
  purchaseOrganization;
  constructor(private purchaseOrganizationService: PurchaseOrganizationService, private router: Router) { }

  ngOnInit() {

    this.purchaseOrganization = {
      name: '',
      description: ''
    };
  }

  goToList= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };

  addNewPurchaseOrganization = function(){
    this.purchaseOrganizationService.addNewPurchaseOrganization(this.purchaseOrganization).subscribe(
      response => {
        this.goToList('purchase-organization');
      },
      error => console.log('error',error)
    );
  }
  
  btnClickNav= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };

}
