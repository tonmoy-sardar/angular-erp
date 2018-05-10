import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SaleOrganizationService } from '../sale-organization.service';

@Component({
  selector: 'app-sale-organization-add',
  templateUrl: './sale-organization-add.component.html',
  styleUrls: ['./sale-organization-add.component.scss']
})
export class SaleOrganizationAddComponent implements OnInit {
  saleOrganization;
  constructor(private saleOrganizationService: SaleOrganizationService, private router: Router) { }

  ngOnInit() {

    this.saleOrganization = {
      name: '',
      description: ''
    };
  }

  goToList= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };

  addNewSaleOrganization = function(){
    this.saleOrganizationService.addNewSaleOrganization(this.saleOrganization).subscribe(
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
