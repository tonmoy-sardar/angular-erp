import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-purchase-organization-edit',
  templateUrl: './purchase-organization-edit.component.html',
  styleUrls: ['./purchase-organization-edit.component.scss']
})
export class PurchaseOrganizationEditComponent implements OnInit {
  purchaseOrganization;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPurchaseOrganization(this.route.snapshot.params['id']);
  }

  getPurchaseOrganization(id) {
    this.purchaseOrganization = {
      pruchase_organization_name: 'Demo Organization',
      pruchase_organization_description: 'Demo Organization Description'
    };

  }


  btnClickNav= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };

}
