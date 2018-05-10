import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CompanyService } from '../company.service';
import { StatesService} from '../../states/states.service';

@Component({
  selector: 'app-storage-location-add',
  templateUrl: './storage-location-add.component.html',
  styleUrls: ['./storage-location-add.component.scss']
})
export class StorageLocationAddComponent implements OnInit {
  @Output() showStorageList = new EventEmitter();

  companyStorage;
  stateList;
  companyBranchList;

  constructor(private companyService: CompanyService, private statesService: StatesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.companyStorage = {
      storage_email: '',
      storage_contact_no:'',
      storage_address:'',
      storage_state:0,
      storage_city:'',
      storage_pincode:'',
      company: this.route.snapshot.params['id'],
      branch:0
    };
    this.getStateList();
    this.getCompanyBranchList(this.route.snapshot.params['id']);
  }

  addNewCompanyStorage = function(){
    this.companyService.addNewCompanyStorage(this.companyStorage).subscribe(
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
        console.log(this.companyBranchList);
      }
     );
  };
  
}
