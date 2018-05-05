import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees-add',
  templateUrl: './employees-add.component.html',
  styleUrls: ['./employees-add.component.scss']
})
export class EmployeesAddComponent implements OnInit {
  employee;
  model: any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.employee = {
      first_name:'',
      last_name:'',
      email:'',
      contact_no:'',
      alternate_contact_no:'',
      pan_number:'',
      aadhaar_name:'',
      amount_given:''
    };
  }

  btnClickNav= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };

}
