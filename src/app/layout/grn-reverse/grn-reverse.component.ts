import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grn-reverse',
  templateUrl: './grn-reverse.component.html',
  styleUrls: ['./grn-reverse.component.scss']
})
export class GrnReverseComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  btnClickNav= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };

}
