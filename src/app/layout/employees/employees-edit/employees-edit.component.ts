import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employees-edit',
  templateUrl: './employees-edit.component.html',
  styleUrls: ['./employees-edit.component.scss']
})
export class EmployeesEditComponent implements OnInit {
  employee;
  model: any;
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.geEmployee(this.route.snapshot.params['id']);
  }

  geEmployee(id) {
    this.employee = {
      first_name:'Suraj',
      last_name:'Mondal',
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
