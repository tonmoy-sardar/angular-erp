import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.scss']
})
export class DepartmentEditComponent implements OnInit {
  department
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getDepartment(this.route.snapshot.params['id']);
  }

  getDepartment(id) {
    this.department = {
      department_name: 'Demo department'
    };

  }
  btnClickNav= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };


}
