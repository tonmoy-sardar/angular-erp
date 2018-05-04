import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-purchase-group-edit',
  templateUrl: './purchase-group-edit.component.html',
  styleUrls: ['./purchase-group-edit.component.scss']
})
export class PurchaseGroupEditComponent implements OnInit {
  purchaseGroup;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPurchaseGroup(this.route.snapshot.params['id']);
  }

  getPurchaseGroup(id) {
    this.purchaseGroup = {
      pruchase_group_name: 'Demo Group',
      pruchase_group_description: 'Demo Group Description'
    };

  }

  btnClickNav= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };
}
