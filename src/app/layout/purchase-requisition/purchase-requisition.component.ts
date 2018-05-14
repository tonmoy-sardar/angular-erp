import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaseRequisitionService } from './purchase-requisition.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-purchase-requisition',
  templateUrl: './purchase-requisition.component.html',
  styleUrls: ['./purchase-requisition.component.scss']
})
export class PurchaseRequisitionComponent implements OnInit {
  purchaseRequisitionList = []
  defaultPagination: number;
  totalpurchaseRequisitionList: number;
  search_key = '';
  constructor(
    private router: Router,
    private purchaseRequisitionService: PurchaseRequisitionService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.defaultPagination = 1;
    this.getPurchaseRequisitionList();
  }

  btnClickNav= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };

  getPurchaseRequisitionList(){
    let params: URLSearchParams = new URLSearchParams();
    params.set('page', this.defaultPagination.toString());
    params.set('search', this.search_key.toString());
    // this.purchaseRequisitionService.getPurchaseRequisitionList(params).subscribe(
    //   (data: any[]) => {
    //     this.totalpurchaseRequisitionList = data['count'];
    //     this.purchaseRequisitionList = data['results'];
    //   }
    // );
  }

  dataSearch() {
    this.defaultPagination = 1;
    this.getPurchaseRequisitionList();
  }
  pagination() {
    this.getPurchaseRequisitionList();
  };
}
