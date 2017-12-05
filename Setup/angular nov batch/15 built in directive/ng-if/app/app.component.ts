import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent{
    loginPage:boolean = false;	
	public showLogin(){
        this.loginPage = true; 
    }	
	public hideLogin(){
        this.loginPage = false; 
    }

    login(){
        this.loginPage = false; 
    }
}