import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sale-organization-add',
  templateUrl: './sale-organization-add.component.html',
  styleUrls: ['./sale-organization-add.component.scss']
})
export class SaleOrganizationAddComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  btnClickNav= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };

}
