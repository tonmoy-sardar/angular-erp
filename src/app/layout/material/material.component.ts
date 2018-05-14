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

  materialList = [];
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
    this.defaultPagination = 1;
    this.getMaterialList();
  }

  dataSearch() {
    this.defaultPagination = 1;
    this.getMaterialList();
  }

  getMaterialList() {
    let params: URLSearchParams = new URLSearchParams();
    params.set('page', this.defaultPagination.toString());
    params.set('search', this.search_key.toString());
    this.materialService.getMaterialList(params).subscribe(
      (data: any[]) => {
        this.totalMaterialList = data['count'];
        
        this.materialList = data['results']
        console.log(this.materialList);
      }
    );
  };

 
  btnClickNav(toNav) {
    this.router.navigateByUrl('/' + toNav);
  };

  pagination() {
    this.getMaterialList();
  };
}
