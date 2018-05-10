import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StatesService} from '../states.service';


@Component({
  selector: 'app-states-edit',
  templateUrl: './states-edit.component.html',
  styleUrls: ['./states-edit.component.scss']
})
export class StatesEditComponent implements OnInit {
  states;
  state;
  constructor(private statesService: StatesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.states = {
      id: '',
      state_name: '',
      tin_number: '',
      state_code:''
    };
    this.getStateDetails(this.route.snapshot.params['id']);
  }

  getStateDetails = function(id) {

    this.statesService.getStateDetails(id).subscribe(
      (data: any[]) =>{  
        this.states = data;
      }
     );
  }

  goToList= function (toNav) {
    this.router.navigateByUrl('/'+toNav);
  };


  updateState = function(){
    this.statesService.updateState(this.states).subscribe(
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


