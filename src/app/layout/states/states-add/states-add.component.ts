import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-states-add',
  templateUrl: './states-add.component.html',
  styleUrls: ['./states-add.component.scss']
})
export class StatesAddComponent implements OnInit {
  states;
  constructor(private router: Router) { }

  ngOnInit() {

    this.states = {
      state_name: '',
      tin_number: '',
      state_code:''
    };
  }

  btnClickNav= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };

}
