import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CompanyService } from '../company.service';
import { StatesService} from '../../states/states.service';

@Component({
  selector: 'app-storage-location-list',
  templateUrl: './storage-location-list.component.html',
  styleUrls: ['./storage-location-list.component.scss']
})
export class StorageLocationListComponent implements OnInit {
  companyStorageList;
  states;
  companyStorageCompShow;
  companyStorageId;

  constructor(private companyService: CompanyService, private statesService: StatesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.companyStorageCompShow = {
      showList: true,
      showAdd: false,
      showEdit: false
    };
    
    this.getCompanyStorageList(this.route.snapshot.params['id']);
  }

  btnClickNav= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };

  showStorageAdd= function () {
    this.companyStorageCompShow = {
      showList: false,
      showAdd: true,
      showEdit: false
    };
  };

  showStorageEdit= function (id) {
    this.companyStorageId = id;
    this.companyStorageCompShow = {
      showList: false,
      showAdd: false,
      showEdit: true
    };
  };

  reloadStorageList = function()
  {
    this.companyStorageCompShow = {
      showList: true,
      showAdd: false,
      showEdit: false
    };

    this.getCompanyStorageList(this.route.snapshot.params['id']);
  }

  getCompanyStorageList= function(id){
    this.companyService.getCompanyStorageList(id).subscribe(
      (data: any[]) =>{   
        this.companyStorageList = data['results'];
        console.log(this.companyStorageList);
      }
     );
  };

}
