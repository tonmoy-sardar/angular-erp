import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PurchaseOrganizationService } from '../purchase-organization.service';

@Component({
  selector: 'app-purchase-organization-edit',
  templateUrl: './purchase-organization-edit.component.html',
  styleUrls: ['./purchase-organization-edit.component.scss']
})
export class PurchaseOrganizationEditComponent implements OnInit {
  purchaseOrganization;

  constructor(private purchaseOrganizationService: PurchaseOrganizationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.purchaseOrganization = {
      id:'',
      name: '',
      description: ''
    };
    this.getPurchaseOrganizationDetails(this.route.snapshot.params['id']);
  }

  getPurchaseOrganizationDetails = function(id) {

    this.purchaseOrganizationService.getPurchaseOrganizationDetails(id).subscribe(
      (data: any[]) =>{  
        this.purchaseOrganization = data;
      }
     );
  }
 
  goToList= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };


  updatePurchaseOrganization = function(){
    this.purchaseOrganizationService.updatePurchaseOrganization(this.purchaseOrganization).subscribe(
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
