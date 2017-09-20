import { Component, OnInit } from '@angular/core';
import { Owner } from "./owner";

import { OwnerService } from "./owner.service";

@Component({
    moduleId: module.id,
    selector: 'owner-list',
    templateUrl: 'owner-list.component.html'
})

export class OwnerListComponent {

    owners:Owner[];

    constructor(private ownerService:OwnerService) { 
        this.owners = [];
    }

    load(){
        this.owners = this.ownerService.getOwners();
    }

}