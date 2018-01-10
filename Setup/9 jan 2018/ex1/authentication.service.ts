import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

    constructor() {
        console.log("AuthenticationService constructor");
     }

    login(){
        console.log("AuthenticationService.login");
    }
}