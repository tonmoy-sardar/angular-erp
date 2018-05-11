import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialService } from './material.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {

  defaultPagination: number;
  totalMaterialList: number;
  search_key = '';

  constructor(
    private materialService: MaterialService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.defaultPagination = 1;
    this.totalMaterialList = 20;
  }

  dataSearch() {
    
  }

  btnClickNav = function (toNav) {
    this.router.navigateByUrl('/' + toNav);
  };

  pagination = function () {
    
  };
}
