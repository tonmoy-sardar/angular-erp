import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sale-group-edit',
  templateUrl: './sale-group-edit.component.html',
  styleUrls: ['./sale-group-edit.component.scss']
})
export class SaleGroupEditComponent implements OnInit {
  saleGroup;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getSaleGroup(this.route.snapshot.params['id']);
  }

  getSaleGroup(id) {
    this.saleGroup = {
      sale_group_name: 'Demo Group',
      sale_group_description: 'Demo Group Description'
    };

  }

  btnClickNav= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };
}
