import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatesService} from '../states.service';

@Component({
  selector: 'app-states-add',
  templateUrl: './states-add.component.html',
  styleUrls: ['./states-add.component.scss']
})
export class StatesAddComponent implements OnInit {
  states;
  constructor(private statesService: StatesService,private router: Router) { }

  ngOnInit() {
    this.states = {
      state_name: '',
      tin_number: '',
      state_code:''
    };
  }

  goToList= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };


  addState = function(){
    this.statesService.addNewState(this.states).subscribe(
      response => {
        this.goToList('states');
      },
      error => console.log('error',error)
    );
  }



  btnClickNav= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };

}
