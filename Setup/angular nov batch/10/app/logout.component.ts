import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";

@Component({
    selector: 'logout',
    templateUrl: 'logout.component.html'
})

export class LogOutComponent implements OnInit {
    constructor(private router:Router) { }

    ngOnInit() { }

    logout(){
        localStorage.clear();

        this.router.navigate(["/login"])
    }
}