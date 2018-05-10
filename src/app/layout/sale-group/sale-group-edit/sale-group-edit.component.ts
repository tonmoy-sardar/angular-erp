import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SaleGroupService } from '../sale-group.service';

@Component({
  selector: 'app-sale-group-edit',
  templateUrl: './sale-group-edit.component.html',
  styleUrls: ['./sale-group-edit.component.scss']
})
export class SaleGroupEditComponent implements OnInit {
 saleGroup;

  constructor(private saleGroupService: SaleGroupService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.saleGroup = {
      id:'',
      name: '',
      description: ''
    };
    this.getSaleGroupDetails(this.route.snapshot.params['id']);
  }

  getSaleGroupDetails = function(id) {

    this.saleGroupService.getSaleGroupDetails(id).subscribe(
      (data: any[]) =>{  
        this.purchaseGroup = data;
      }
     );
  }
 
  goToList= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };


  updateSaleGroup = function(){
    this.saleGroupService.updateSaleGroup(this.saleGroup).subscribe(
      response => {
        this.goToList('sale-group');
      },
      error => console.log('error',error)
    );
  }

  btnClickNav= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };
}
