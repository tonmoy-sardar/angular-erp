import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CompanyService } from '../company.service';
import { StatesService} from '../../states/states.service';

@Component({
  selector: 'app-company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.scss']
})
export class CompanyAddComponent implements OnInit {
  company;
  companyList;
  stateList;
  constructor(private companyService: CompanyService, private statesService: StatesService, private router: Router) { }

  ngOnInit() {
    this.company = {
      id: '',
      company:0,
      company_name: '',
      company_url: '',
      company_email: '',
      company_contact: '',
      company_address:'',
      company_state:0,
      company_city:'',
      company_pin:'',
      company_gst:'',
      company_pan:'',
      company_cin:''
    };
    this.getCompanyDropdownList();
    this.getStateList();
  }


  goToList= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };

  addNewCompany = function(){
    this.companyService.addNewCompany(this.company).subscribe(
      response => {
        this.goToList('company');
      },
      error => console.log('error',error)
    );
  }

  getStateList= function(){
    this.statesService.getStateActiveList().subscribe(
      (data: any[]) =>{   
        this.stateList = data;
        console.log(this.stateList);
      }
     );
  };

  getCompanyDropdownList= function(){
    this.companyService.getCompanyDropdownList().subscribe(
      (data: any[]) =>{   
        this.companyList = data;
        console.log(this.companyList);
      }
     );
  };

  btnClickNav= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };

}
