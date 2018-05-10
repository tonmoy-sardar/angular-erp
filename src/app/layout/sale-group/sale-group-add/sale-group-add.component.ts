import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SaleGroupService } from '../sale-group.service';

@Component({
  selector: 'app-sale-group-add',
  templateUrl: './sale-group-add.component.html',
  styleUrls: ['./sale-group-add.component.scss']
})
export class SaleGroupAddComponent implements OnInit {
  saleGroup;
  constructor(private saleGroupService: SaleGroupService,private router: Router) { }

  ngOnInit() {

    this.saleGroup = {
      name: '',
      description: ''
    };
  }
  
  goToList= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };

  addNewSaleGroup = function(){
    this.saleGroupService.addNewSaleGroup(this.saleGroup).subscribe(
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
