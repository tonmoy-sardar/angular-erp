import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sale-group-add',
  templateUrl: './sale-group-add.component.html',
  styleUrls: ['./sale-group-add.component.scss']
})
export class SaleGroupAddComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  btnClickNav= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };

}
