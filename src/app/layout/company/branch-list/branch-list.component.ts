import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CompanyService } from '../company.service';
import { StatesService} from '../../states/states.service';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.scss']
})
export class BranchListComponent implements OnInit {
  companyBranchList;
  states;
  companyBranchCompShow;
  companyBranchId;

  constructor(private companyService: CompanyService, private statesService: StatesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.companyBranchCompShow = {
      showList: true,
      showAdd: false,
      showEdit: false
    };
    
    this.getCompanyBranchList(this.route.snapshot.params['id']);
  }

  btnClickNav= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };

  showBranchAdd= function () {
    this.companyBranchCompShow = {
      showList: false,
      showAdd: true,
      showEdit: false
    };
  };

  showBranchEdit= function (id) {
    this.companyBranchId = id;
    this.companyBranchCompShow = {
      showList: false,
      showAdd: false,
      showEdit: true
    };
  };

  reloadBranchList = function()
  {
    this.companyBranchCompShow = {
      showList: true,
      showAdd: false,
      showEdit: false
    };

    this.getCompanyBranchList(this.route.snapshot.params['id']);
  }

  getCompanyBranchList= function(id){
    this.companyService.getCompanyBranchList(id).subscribe(
      (data: any[]) =>{   
        this.companyBranchList = data['results'];
        console.log(this.companyBranchList);
      }
     );
  };

}
