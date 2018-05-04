import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-terms-condition-edit',
  templateUrl: './terms-condition-edit.component.html',
  styleUrls: ['./terms-condition-edit.component.scss']
})
export class TermsConditionEditComponent implements OnInit {
  termsCondition;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getTermsCondition(this.route.snapshot.params['id']);
  }

  getTermsCondition(id) {
    this.termsCondition = {
      terms_name: 'Demo Term',
      terms_conditions: 'Demo Term Demo Term Demo Term Demo Term'
    };

  }

  btnClickNav= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };

}
