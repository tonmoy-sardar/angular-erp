import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CompanyService } from '../company.service';
import { StatesService } from '../../states/states.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-storage-bin-list',
  templateUrl: './storage-bin-list.component.html',
  styleUrls: ['./storage-bin-list.component.scss']
})
export class StorageBinListComponent implements OnInit {
  companyStorageBinList = [];
  states;
  companyStorageBinCompShow;
  companyStorageBinId;
  defaultPagination: number;
  totalcompanyStorageBinList: number;
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
    this.companyStorageBinCompShow = {
      showList: true,
      showAdd: false,
      showEdit: false
    };

    this.getCompanyStorageBinList(this.route.snapshot.params['id']);
  }

  btnClickNav = function (toNav) {
    this.router.navigateByUrl('/' + toNav);
  };

  showStorageBinAdd = function () {
    this.companyStorageBinCompShow = {
      showList: false,
      showAdd: true,
      showEdit: false
    };
  };

  showStorageBinEdit = function (id) {
    this.companyStorageBinId = id;
    this.companyStorageBinCompShow = {
      showList: false,
      showAdd: false,
      showEdit: true
    };
  };

  reloadStorageBinList = function () {
    this.companyStorageBinCompShow = {
      showList: true,
      showAdd: false,
      showEdit: false
    };

    this.getCompanyStorageBinList(this.route.snapshot.params['id']);
  }

  getCompanyStorageBinList = function (id) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('page', this.defaultPagination.toString());
    params.set('search', this.search_key.toString());
    this.companyService.getCompanyStorageBinList(id,params).subscribe(
      (data: any[]) => {
        this.companyStorageBinList = data['results'];
        // console.log(this.companyStorageBinList);
      }
    );
  };

  dataSearch() {
    this.defaultPagination = 1;
    this.getCompanyStorageBinList(this.route.snapshot.params['id']);
  }

  pagination = function () {
    this.getCompanyStorageBinList(this.route.snapshot.params['id']);
  };


}
