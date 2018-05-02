import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-group-add',
  templateUrl: './purchase-group-add.component.html',
  styleUrls: ['./purchase-group-add.component.scss']
})
export class PurchaseGroupAddComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  btnClickNav= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };

}
