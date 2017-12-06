import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";

@Component({
    selector: 'login',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    constructor(private router:Router) { }

    ngOnInit() { }

    login(){
        localStorage.setItem('token',"1");

        this.router.navigate(["/list"])
    }
}