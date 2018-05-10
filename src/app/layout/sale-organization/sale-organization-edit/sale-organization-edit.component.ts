import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SaleOrganizationService } from '../sale-organization.service';

@Component({
  selector: 'app-sale-organization-edit',
  templateUrl: './sale-organization-edit.component.html',
  styleUrls: ['./sale-organization-edit.component.scss']
})
export class SaleOrganizationEditComponent implements OnInit {
  saleOrganization;

  constructor(private saleOrganizationService: SaleOrganizationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.saleOrganization = {
      id:'',
      name: '',
      description: ''
    };
    this.getSaleOrganizationDetails(this.route.snapshot.params['id']);
  }

  getSaleOrganizationDetails = function(id) {

    this.saleOrganizationService.getSaleOrganizationDetails(id).subscribe(
      (data: any[]) =>{  
        this.saleOrganization = data;
      }
     );
  }
 
  goToList= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };


  updateSaleOrganization = function(){
    this.saleOrganizationService.updateSaleOrganization(this.saleOrganization).subscribe(
      response => {
        this.goToList('sale-organization');
      },
      error => console.log('error',error)
    );
  }

  btnClickNav= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };

}
