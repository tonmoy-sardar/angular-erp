import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms-condition-add',
  templateUrl: './terms-condition-add.component.html',
  styleUrls: ['./terms-condition-add.component.scss']
})
export class TermsConditionAddComponent implements OnInit {
  termsCondition;
  constructor(private router: Router) { }

  ngOnInit() {

    this.termsCondition = {
      terms_name: '',
      terms_conditions: ''
    };
  }

  btnClickNav= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };

}
