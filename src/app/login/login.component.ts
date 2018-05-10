import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { LoginService} from './login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    login;
    constructor(private loginService: LoginService, public router: Router) {}

    ngOnInit() {
    this.login = {
        username: '',
        password: ''
        };
    }
    
    goToPage= function (toNav) {
        this.router.navigateByUrl('/'+toNav);
    };

    onLoggedin() {

        this.loginService.login(this.login).subscribe(
            response => {
                localStorage.setItem('isLoggedin', 'true');
                localStorage.setItem('logedUserEmail', response.email);
                localStorage.setItem('logedUserToken', response.token);
                localStorage.setItem('logedUserUserId', response.user_id);
                localStorage.setItem('logedUserUserName', response.username);

                this.goToPage('company');

            },
            error => console.log('error',error)
          );
       // console.log(this.login);
        //localStorage.setItem('isLoggedin', 'true');
    }
}
