import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-banks-edit',
  templateUrl: './banks-edit.component.html',
  styleUrls: ['./banks-edit.component.scss']
})
export class BanksEditComponent implements OnInit {
  banks;
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getBanks(this.route.snapshot.params['id']);
  }

  getBanks(id) {
    this.banks = {
      bank_name: 'AXIS',
      bank_branch: '',
      bank_ifsc:'',
      opening_balance:''
    };

  }

  btnClickNav= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };

}
