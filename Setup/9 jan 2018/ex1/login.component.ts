import { AutherizationService } from './autherization.service';
import { AuthenticationService } from './authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html'
})

export class LoginComponent{

    constructor(private autentication:AuthenticationService
        ,private autherization:AutherizationService) { 
        console.log("LoginComponent constructor");
    }

    login(){
        this.autentication.login();
        this.autherization.verify();
    }

}