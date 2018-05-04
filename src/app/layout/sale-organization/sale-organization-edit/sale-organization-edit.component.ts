import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sale-organization-edit',
  templateUrl: './sale-organization-edit.component.html',
  styleUrls: ['./sale-organization-edit.component.scss']
})
export class SaleOrganizationEditComponent implements OnInit {
  saleOrganization;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getSaleOrganization(this.route.snapshot.params['id']);
  }

  getSaleOrganization(id) {
    this.saleOrganization = {
      sale_organization_name: 'Demo Organization',
      sale_organization_description: 'Demo Organization Description'
    };

  }

  btnClickNav= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };

}
