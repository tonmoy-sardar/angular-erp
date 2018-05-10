import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SaleGroupService } from './sale-group.service';

@Component({
  selector: 'app-sale-group',
  templateUrl: './sale-group.component.html',
  styleUrls: ['./sale-group.component.scss']
})
export class SaleGroupComponent implements OnInit {
  saleGroupList;

  constructor(private saleGroupService: SaleGroupService,private router: Router) { }

  ngOnInit() {
    this.getSaleGroupList();
  }

  btnClickNav= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };

  getSaleGroupList= function(){
    this.saleGroupService.getSaleGroupList().subscribe(
      (data: any[]) =>{   
        this.saleGroupList = data['results'];
      }
     );
  };

  activeSaleGroup = function(id){
    let saleGroup;

    saleGroup = {
      id: id,
      status: true
    };
    this.saleGroupService.activeInactivePurchaseGroup(saleGroup).subscribe(
      response => {
        this.getSaleGroupList();
      },
      error => console.log('error',error)
    );
  };

  inactiveSaleGroup = function(id){
    let saleGroup;

    saleGroup = {
      id: id,
      status: false
    };

    this.saleGroupService.activeInactiveSaleGroup(saleGroup).subscribe(
      response => {
        this.getSaleGroupList();
      },
      error => console.log('error',error)
    );
  };
}
