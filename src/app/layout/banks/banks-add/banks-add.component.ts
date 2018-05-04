import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banks-add',
  templateUrl: './banks-add.component.html',
  styleUrls: ['./banks-add.component.scss']
})
export class BanksAddComponent implements OnInit {
  banks;
  constructor(private router: Router) { }

  ngOnInit() {
    this.banks = {
      bank_name: '',
      bank_branch: '',
      bank_ifsc:'',
      opening_balance:''
    };
  }

  btnClickNav= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };


}
