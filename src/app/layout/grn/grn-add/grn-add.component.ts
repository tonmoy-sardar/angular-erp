import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GrnService } from '../grn.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-grn-add',
  templateUrl: './grn-add.component.html',
  styleUrls: ['./grn-add.component.scss']
})
export class GrnAddComponent implements OnInit {
  model: any;
  constructor(
    private router: Router,
    private grnService: GrnService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  btnClickNav= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };
}
