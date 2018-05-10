import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaseOrganizationService } from './purchase-organization.service';

@Component({
  selector: 'app-purchase-organization',
  templateUrl: './purchase-organization.component.html',
  styleUrls: ['./purchase-organization.component.scss']
})
export class PurchaseOrganizationComponent implements OnInit {
  purchaseOrganizationList;
  constructor(private purchaseOrganizationService: PurchaseOrganizationService, private router: Router) { }

  ngOnInit() {
    this.getPurchaseOrganizationList();
  }

  btnClickNav= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };

  getPurchaseOrganizationList= function(){
    this.purchaseOrganizationService.getPurchaseOrganizationList().subscribe(
      (data: any[]) =>{   
        this.purchaseOrganizationList = data['results'];
      }
     );
  };

  activePurchaseOrganization = function(id){
    let purchaseOrganization;

    purchaseOrganization = {
      id: id,
      status: true
    };
    this.purchaseOrganizationService.activeInactivePurchaseOrganization(purchaseOrganization).subscribe(
      response => {
        this.getPurchaseOrganizationList();
      },
      error => console.log('error',error)
    );
  };

  inactivePurchaseOrganization = function(id){
    let purchaseOrganization;

    purchaseOrganization = {
      id: id,
      status: false
    };

    this.purchaseOrganizationService.activeInactivePurchaseOrganization(purchaseOrganization).subscribe(
      response => {
        this.getPurchaseOrganizationList();
      },
      error => console.log('error',error)
    );
  };

}
