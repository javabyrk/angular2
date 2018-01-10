import { Injectable } from '@angular/core';

@Injectable()
export class AutherizationService {

    constructor() { 
        console.log("AutherizationService constructor");
    }

    verify(){
        console.log("AutherizationService.verify");
    }
}