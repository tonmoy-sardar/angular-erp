import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PurchaseGroupService } from '../purchase-group.service';

@Component({
  selector: 'app-purchase-group-edit',
  templateUrl: './purchase-group-edit.component.html',
  styleUrls: ['./purchase-group-edit.component.scss']
})
export class PurchaseGroupEditComponent implements OnInit {
  purchaseGroup;

  constructor(private purchaseGroupService: PurchaseGroupService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.purchaseGroup = {
      id:'',
      name: '',
      description: ''
    };
    this.getPurchaseGroupDetails(this.route.snapshot.params['id']);
  }

  getPurchaseGroupDetails = function(id) {

    this.purchaseGroupService.getPurchaseGroupDetails(id).subscribe(
      (data: any[]) =>{  
        this.purchaseGroup = data;
      }
     );
  }
 
  goToList= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };


  updatePurchaseGroup = function(){
    this.purchaseGroupService.updatePurchaseGroup(this.purchaseGroup).subscribe(
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
