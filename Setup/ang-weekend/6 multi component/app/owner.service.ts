import { Injectable } from '@angular/core';

import { Owner } from "./owner";

@Injectable()
export class OwnerService {

   getOwners(){
       return [new Owner("raj","k","hyderabad"),new Owner("satya","t","warangal"),new Owner("venkatesh","p","vijayawada")];
   }
}