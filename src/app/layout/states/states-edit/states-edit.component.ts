import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-states-edit',
  templateUrl: './states-edit.component.html',
  styleUrls: ['./states-edit.component.scss']
})
export class StatesEditComponent implements OnInit {
  states;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getStates(this.route.snapshot.params['id']);
  }

  getStates(id) {
    this.states = {
      state_name: 'ANDHRA PRADESH',
      tin_number: '0',
      state_code:'AP'
    };

  }

  btnClickNav= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };
}
