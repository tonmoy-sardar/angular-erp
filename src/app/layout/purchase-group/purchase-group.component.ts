import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaseGroupService } from './purchase-group.service';
@Component({
  selector: 'app-purchase-group',
  templateUrl: './purchase-group.component.html',
  styleUrls: ['./purchase-group.component.scss']
})
export class PurchaseGroupComponent implements OnInit {
  purchaseGroupList;

  constructor(private purchaseGroupService: PurchaseGroupService,private router: Router) { }

  ngOnInit() {
    this.getPurchaseGroupList();
  }

  btnClickNav= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };

  getPurchaseGroupList= function(){
    this.purchaseGroupService.getPurchaseGroupList().subscribe(
      (data: any[]) =>{   
        this.purchaseGroupList = data['results'];
      }
     );
  };

  activePurchaseGroup = function(id){
    let purchaseGroup;

    purchaseGroup = {
      id: id,
      status: true
    };
    this.purchaseGroupService.activeInactivePurchaseGroup(purchaseGroup).subscribe(
      response => {
        this.getPurchaseGroupList();
      },
      error => console.log('error',error)
    );
  };

  inactivePurchaseGroup = function(id){
    let purchaseGroup;

    purchaseGroup = {
      id: id,
      status: false
    };

    this.purchaseGroupService.activeInactivePurchaseGroup(purchaseGroup).subscribe(
      response => {
        this.getPurchaseGroupList();
      },
      error => console.log('error',error)
    );
  };
}
