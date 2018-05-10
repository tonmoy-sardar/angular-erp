import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SaleOrganizationService } from './sale-organization.service';

@Component({
  selector: 'app-sale-organization',
  templateUrl: './sale-organization.component.html',
  styleUrls: ['./sale-organization.component.scss']
})
export class SaleOrganizationComponent implements OnInit {
  saleOrganizationList;
  constructor(private saleOrganizationService: SaleOrganizationService, private router: Router) { }

  ngOnInit() {
    this.getSaleOrganizationList();
  }

  btnClickNav= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };

  getSaleOrganizationList= function(){
    this.saleOrganizationService.getSaleOrganizationList().subscribe(
      (data: any[]) =>{   
        this.saleOrganizationList = data['results'];
      }
     );
  };

  activeSaleOrganization = function(id){
    let saleOrganization;

    saleOrganization = {
      id: id,
      status: true
    };
    this.saleOrganizationService.activeInactiveSaleOrganization(saleOrganization).subscribe(
      response => {
        this.getSaleOrganizationList();
      },
      error => console.log('error',error)
    );
  };

  inactiveSaleOrganization = function(id){
    let saleOrganization;

    saleOrganization = {
      id: id,
      status: false
    };

    this.saleOrganizationService.activeInactiveSaleOrganization(saleOrganization).subscribe(
      response => {
        this.getSaleOrganizationList();
      },
      error => console.log('error',error)
    );
  };
}
