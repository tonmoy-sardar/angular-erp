import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CompanyService } from '../company.service';
import { StatesService } from '../../states/states.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.scss']
})
export class BranchListComponent implements OnInit {
  companyBranchList = [];
  states;
  companyBranchCompShow;
  companyBranchId;
  defaultPagination: number;
  totalcompanyBranchList: number;
  search_key = '';
  constructor(
    private companyService: CompanyService,
    private statesService: StatesService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.defaultPagination = 1;
    this.companyBranchCompShow = {
      showList: true,
      showAdd: false,
      showEdit: false
    };

    this.getCompanyBranchList(this.route.snapshot.params['id']);
  }

  btnClickNav = function (toNav) {
    this.router.navigateByUrl('/' + toNav);
  };

  showBranchAdd = function () {
    this.companyBranchCompShow = {
      showList: false,
      showAdd: true,
      showEdit: false
    };
  };

  showBranchEdit = function (id) {
    this.companyBranchId = id;
    this.companyBranchCompShow = {
      showList: false,
      showAdd: false,
      showEdit: true
    };
  };

  reloadBranchList = function () {
    this.companyBranchCompShow = {
      showList: true,
      showAdd: false,
      showEdit: false
    };

    this.getCompanyBranchList(this.route.snapshot.params['id']);
  }

  getCompanyBranchList = function (id) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('page', this.defaultPagination.toString());
    params.set('search', this.search_key.toString());
    this.companyService.getCompanyBranchList(id,params).subscribe(
      (data: any[]) => {
        this.totalcompanyBranchList = data['count'];
        this.companyBranchList = data['results'];
        // console.log(this.companyBranchList);
      }
    );
  };

  dataSearch() {
    this.defaultPagination = 1;
    this.getCompanyBranchList(this.route.snapshot.params['id']);
  }

  pagination = function () {
    this.getCompanyBranchList(this.route.snapshot.params['id']);
  };

}
