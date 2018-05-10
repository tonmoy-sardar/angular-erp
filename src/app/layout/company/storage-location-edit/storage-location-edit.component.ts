import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CompanyService } from '../company.service';
import { StatesService} from '../../states/states.service';

@Component({
  selector: 'app-storage-location-edit',
  templateUrl: './storage-location-edit.component.html',
  styleUrls: ['./storage-location-edit.component.scss']
})
export class StorageLocationEditComponent implements OnInit {
  @Input() companyStorageId: number;

  @Output() showStorageList = new EventEmitter();

  companyStorage;
  stateList;
  companyBranchList;
  
  constructor(private companyService: CompanyService, private statesService: StatesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    console.log(this.companyStorageId);
    this.companyStorage = {
      id: '',
      storage_email: '',
      storage_contact_no:'',
      storage_address:'',
      storage_state:0,
      storage_city:'',
      storage_pincode:'',
      company: this.route.snapshot.params['id'],
      branch:0
    };

    this.getCompanyStorageDetails(this.companyStorageId);
    this.getStateList();
    this.getCompanyBranchList(this.route.snapshot.params['id'])
  }

  getCompanyStorageDetails = function(id) {

    this.companyService.getCompanyStorageDetails(id).subscribe(
      (data: any[]) =>{
        this.companyStorage = data;
        console.log(this.companyStorage);
      }
     );
  }

  updateCompanyStorage = function(){
    this.companyService.updateCompanyStorage(this.companyStorage).subscribe(
      response => {
        //this.goToList('states');

        this.showStorageList.emit();
      },
      error => console.log('error',error)
    );
  }

  btnClickNav= function () {
    this.showStorageList.emit();
  };

  getStateList= function(){
    this.statesService.getStateList().subscribe(
      (data: any[]) =>{   
        this.stateList = data['results'];
      }
     );
  };

  getCompanyBranchList= function(id){
    this.companyService.getCompanyBranchList(id).subscribe(
      (data: any[]) =>{   
        this.companyBranchList = data['results'];
        //console.log(this.companyBranchList);
      }
     );
  };

}
