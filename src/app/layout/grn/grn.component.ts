import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GrnService } from './grn.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-grn',
  templateUrl: './grn.component.html',
  styleUrls: ['./grn.component.scss']
})
export class GrnComponent implements OnInit {
  grnList = []
  defaultPagination: number;
  totalGrnList: number;
  search_key = '';

  constructor(
    private router: Router,
    private grnService: GrnService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.defaultPagination = 1;
    this.getGrnList();
  }

  btnClickNav= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };

  getGrnList(){
    let params: URLSearchParams = new URLSearchParams();
    params.set('page', this.defaultPagination.toString());
    params.set('search', this.search_key.toString());
    this.grnService.getGrnList(params).subscribe(
      (data: any[]) => {
        this.totalGrnList = data['count'];
        this.grnList = data['results'];
        console.log(this.grnList);
      }
    );
  }

  changeStatus(value,id)
  {
    let grn;

    grn = {
      id: id,
      is_finalised: value
    };

    this.grnService.changeStatusGrn(grn).subscribe(
      response => {
        this.toastr.success('GRN status changed successfully', '', {
          timeOut: 3000,
        });
        this.getGrnList();
      },
      error => {
        console.log('error', error)
        // this.toastr.error('everything is broken', '', {
        //   timeOut: 3000,
        // });
      }
    );
  }

  changeApproveStatus(value,id)
  {
    let grn;

    grn = {
      id: id,
      is_approve: value
    };

    this.grnService.changeApproveStatusGrn(grn).subscribe(
      response => {
        this.toastr.success('GRN approve status changed successfully', '', {
          timeOut: 3000,
        });
        this.getGrnList();
      },
      error => {
        console.log('error', error)
        // this.toastr.error('everything is broken', '', {
        //   timeOut: 3000,
        // });
      }
    );
  }

  dataSearch() {
    this.defaultPagination = 1;
    this.getGrnList();
  }
  pagination() {
    this.getGrnList();
  };

}
