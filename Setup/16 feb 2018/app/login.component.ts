import { User } from './user';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html'
})

export class LoginComponent {
    
    user:User = new User();

    login(){
        //alert("user name is "+this.userName);
       // alert("password is "+this.password);
        alert('in the login method');
    }
}