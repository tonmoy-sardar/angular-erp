import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-designation-edit',
  templateUrl: './designation-edit.component.html',
  styleUrls: ['./designation-edit.component.scss']
})
export class DesignationEditComponent implements OnInit {
  designation;
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getDesignation(this.route.snapshot.params['id']);
  }

  getDesignation(id) {
    this.designation = {
      designation_name: 'Demo designation'
    };

  }
  btnClickNav= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };

}
