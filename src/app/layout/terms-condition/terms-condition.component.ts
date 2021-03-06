import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TermsConditionService } from './terms-condition.service';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from '../company/company.service';
@Component({
  selector: 'app-terms-condition',
  templateUrl: './terms-condition.component.html',
  styleUrls: ['./terms-condition.component.scss']
})
export class TermsConditionComponent implements OnInit {
  termsList = [];
  defaultPagination: number;
  totaltermsList: number;
  search_key = '';
  companyList = [];
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private termsConditionService: TermsConditionService,
    private companyService: CompanyService
  ) { }

  ngOnInit() {
    this.defaultPagination = 1;
    this.getTermsList();
    this.getCompanyDropdownList()
  }

  dataSearch() {
    this.defaultPagination = 1;
    this.getTermsList();
  }

  btnClickNav = function (toNav) {
    this.router.navigateByUrl('/' + toNav);
  };

  getCompanyDropdownList() {
    this.companyService.getCompanyDropdownList().subscribe(
      (data: any[]) => {
        this.companyList = data;
        // console.log(this.companyList);
      }
    );
  };
  getTermsList() {
    let params: URLSearchParams = new URLSearchParams();
    params.set('page', this.defaultPagination.toString());
    params.set('search', this.search_key.toString());
    this.termsConditionService.getTermsList(params).subscribe(
      (data: any[]) => {
        this.totaltermsList = data['count'];
        this.termsList = data['results'];
        // console.log(this.termsList)
      }
    );
  };
  getCompanyName(id) {
    var data = { id: 0, company_name: '' }
    data = this.companyList.filter(x => x.id === id)[0];
    if (data != undefined) {
      return data.company_name
    }
  }
  activeState(id) {
    let terms;

    terms = {
      id: id,
      status: true
    };
    this.termsConditionService.activeInactiveTerms(terms).subscribe(
      response => {
        this.toastr.success('Status changed successfully', '', {
          timeOut: 3000,
        });
        this.getTermsList();
      },
      error => {
        console.log('error', error)
        // this.toastr.error('everything is broken', '', {
        //   timeOut: 3000,
        // });
      }
    );
  };

  inactiveState(id) {
    let terms;

    terms = {
      id: id,
      status: false
    };

    this.termsConditionService.activeInactiveTerms(terms).subscribe(
      response => {
        this.toastr.success('Status changed successfully', '', {
          timeOut: 3000,
        });
        this.getTermsList();
      },
      error => {
        console.log('error', error)
        // this.toastr.error('everything is broken', '', {
        //   timeOut: 3000,
        // });
      }
    );
  };

  deleteTerm(id) {
    let terms;

    terms = {
      id: id
    };

    this.termsConditionService.deleteTerms(terms).subscribe(
      response => {
        this.toastr.success('Terms deleted successfully', '', {
          timeOut: 3000,
        });
        this.getTermsList();
      },
      error => {
        console.log('error', error)
        // this.toastr.error('everything is broken', '', {
        //   timeOut: 3000,
        // });
      }
    );
  };

  pagination() {
    this.getTermsList();
  };
}
