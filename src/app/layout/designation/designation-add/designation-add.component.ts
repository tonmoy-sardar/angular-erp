import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-designation-add',
  templateUrl: './designation-add.component.html',
  styleUrls: ['./designation-add.component.scss']
})
export class DesignationAddComponent implements OnInit {
  designation;
  constructor(private router: Router) { }

  ngOnInit() {
    this.designation = {
      designation_name:''
    };
  }

  btnClickNav= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };

}
