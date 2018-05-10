import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CompanyService } from '../company.service';

@Component({
  selector: 'app-storage-bin-edit',
  templateUrl: './storage-bin-edit.component.html',
  styleUrls: ['./storage-bin-edit.component.scss']
})
export class StorageBinEditComponent implements OnInit {
  @Input() companyStorageBinId: number;

  @Output() showStorageBinList = new EventEmitter();

  companyStorageBin;
  companyBranchList;
  companyStorageList;
  UOMList;

  constructor(private companyService: CompanyService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    console.log(this.companyStorageBinId);

    this.companyStorageBin = {
      id:'',
      bin_no: '',
      bin_volume:'',
      branch:0,
      storage:0,
      uom:0,
      company: this.route.snapshot.params['id']
    };

    this.getCompanyStorageBinDetails(this.companyStorageBinId);
    this.getCompanyBranchList(this.route.snapshot.params['id']);
    this.getCompanyStorageList(this.route.snapshot.params['id']);
    this.getUOMList();
  }

  getCompanyStorageBinDetails = function(id) {

    this.companyService.getCompanyStorageBinDetails(id).subscribe(
      (data: any[]) =>{
        this.companyStorageBin = data;
        console.log(this.companyStorageBin);
      }
     );
  }

  updateCompanyStorageBin = function(){
    this.companyService.updateCompanyStorageBin(this.companyStorageBin).subscribe(
      response => {
        //this.goToList('states');

        this.showStorageBinList.emit();
      },
      error => console.log('error',error)
    );
  }

  btnClickNav= function () {
    this.showStorageBinList.emit();
  };

 
  getCompanyBranchList= function(id){
    this.companyService.getCompanyBranchList(id).subscribe(
      (data: any[]) =>{   
        this.companyBranchList = data['results'];
        console.log(this.companyBranchList);
      }
     );
  };

  getCompanyStorageList= function(id){
    this.companyService.getCompanyStorageList(id).subscribe(
      (data: any[]) =>{   
        this.companyStorageList = data['results'];
        console.log(this.companyStorageList);
      }
     );
  };

  getUOMList= function(){
    this.companyService.getUOMList().subscribe(
      (data: any[]) =>{   
        this.UOMList = data['results'];
        console.log(this.UOMList);
      }
     );
  };

}
