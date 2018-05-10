import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CompanyService } from '../company.service';
import { StatesService} from '../../states/states.service';

@Component({
  selector: 'app-branch-edit',
  templateUrl: './branch-edit.component.html',
  styleUrls: ['./branch-edit.component.scss']
})
export class BranchEditComponent implements OnInit {

  @Input() companyBranchId: number;

  @Output() showBranchList = new EventEmitter();

  companyBranch;
  stateList;
  constructor(private companyService: CompanyService, private statesService: StatesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    console.log(this.companyBranchId);
    this.companyBranch = {
      id: '',
      branch_name: '',
      branch_email: '',
      branch_contact_no:'',
      branch_address:'',
      branch_state:0,
      branch_city:'',
      branch_pincode:'',
      branch_gstin:'',
      branch_pan:'',
      branch_cin:'',
      company: this.route.snapshot.params['id']
    };

    this.getCompanyBranchDetails(this.companyBranchId);
    this.getStateList();
  }

  getCompanyBranchDetails = function(id) {

    this.companyService.getCompanyBranchDetails(id).subscribe(
      (data: any[]) =>{
        this.companyBranch = data;
      }
     );
  }

  updateCompanyBranch = function(){
    this.companyService.updateCompanyBranch(this.companyBranch).subscribe(
      response => {
        //this.goToList('states');

        this.showBranchList.emit();
      },
      error => console.log('error',error)
    );
  }

  btnClickNav= function () {
    this.showBranchList.emit();
  };

  getStateList= function(){
    this.statesService.getStateList().subscribe(
      (data: any[]) =>{   
        this.stateList = data['results'];
      }
     );
  };

}
