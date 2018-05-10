import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CompanyService } from '../company.service';
import { StatesService} from '../../states/states.service';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {
  company;
  stateList;
  constructor(private companyService: CompanyService, private statesService: StatesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.company = {
      id: '',
      company_name: '',
      company_url: '',
      company_email: '',
      company_contact: '',
      company_address:'',
      company_state:'',
      company_city:'',
      company_pin:'',
      company_gst:'',
      company_pan:'',
      company_cin:''
    };
    this.getCompanyDetails(this.route.snapshot.params['id']);
    this.getStateList();
  }

  getCompanyDetails = function(id) {

    this.companyService.getCompanyDetails(id).subscribe(
      (data: any[]) =>{
        this.company = data;
        console.log(this.company);
      }
     );
  }

  goToList= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };


  updateCompany = function(){
    this.companyService.updateCompany(this.company).subscribe(
      response => {
        this.goToList('company');
      },
      error => console.log('error',error)
    );
  }

  getStateList= function(){
    this.statesService.getStateList().subscribe(
      (data: any[]) =>{   
        this.stateList = data['results'];
      }
     );
  };

  btnClickNav= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };

}
