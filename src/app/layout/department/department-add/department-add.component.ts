import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.scss']
})
export class DepartmentAddComponent implements OnInit {
  department;
  constructor(private router: Router) { }

  ngOnInit() {
    this.department = {
      department_name: ''
    };
  }

  btnClickNav= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };

}
