import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaseGroupService } from '../purchase-group.service';

@Component({
  selector: 'app-purchase-group-add',
  templateUrl: './purchase-group-add.component.html',
  styleUrls: ['./purchase-group-add.component.scss']
})
export class PurchaseGroupAddComponent implements OnInit {
  purchaseGroup;
  constructor(private purchaseGroupService: PurchaseGroupService,private router: Router) { }

  ngOnInit() {

    this.purchaseGroup = {
      name: '',
      description: ''
    };
  }
  
  goToList= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };

  addNewPurchaseGroup = function(){
    this.purchaseGroupService.addNewPurchaseGroup(this.purchaseGroup).subscribe(
      response => {
        this.goToList('purchase-group');
      },
      error => console.log('error',error)
    );
  }
  
  btnClickNav= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };

}
