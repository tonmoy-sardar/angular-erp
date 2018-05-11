import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatesService} from './states.service';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss']
})
export class StatesComponent implements OnInit {
  stateList;
  defaultPagination: number;
  totalstateList:number;

  constructor(private statesService: StatesService, private router: Router) { 
  }


  ngOnInit() {
    this.defaultPagination = 1;
    this.getStateList(this.defaultPagination);
  }

  btnClickNav= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };

  getStateList= function(pageNo){
    this.statesService.getStateList(pageNo).subscribe(
      (data: any[]) =>{ 
        this.totalstateList = data['count']; 
        this.stateList = data['results'];
      }
     );
  };

  activeState = function(id){
    let state;

    state = {
      id: id,
      status: true
    };
    this.statesService.activeInactiveState(state).subscribe(
      response => {
        this.getStateList();
      },
      error => console.log('error',error)
    );
  };

  inactiveState = function(id){
    let state;

    state = {
      id: id,
      status: false
    };

    this.statesService.activeInactiveState(state).subscribe(
      response => {
        this.getStateList();
      },
      error => console.log('error',error)
    );
  };

  deleteState = function(id){
    let state;

    state = {
      id: id
    };

    this.statesService.deleteState(state).subscribe(
      response => {
        this.getStateList();
      },
      error => console.log('error',error)
    );
  };

  pagination = function() {
    this.getStateList(this.defaultPagination);
  };

}
