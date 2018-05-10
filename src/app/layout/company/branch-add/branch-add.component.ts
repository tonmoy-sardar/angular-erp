import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CompanyService } from '../company.service';
import { StatesService} from '../../states/states.service';


@Component({
  selector: 'app-branch-add',
  templateUrl: './branch-add.component.html',
  styleUrls: ['./branch-add.component.scss']
})
export class BranchAddComponent implements OnInit {

  @Output() showBranchList = new EventEmitter();

  companyBranch;
  stateList;
  constructor(private companyService: CompanyService, private statesService: StatesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.companyBranch = {
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
    this.getStateList();
  }

  addNewCompanyBranch = function(){
    this.companyService.addNewCompanyBranch(this.companyBranch).subscribe(
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
