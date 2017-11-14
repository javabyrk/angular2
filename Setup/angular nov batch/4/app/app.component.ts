import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'project',
    templateUrl: 'app.component.html'
})

export class AppComponent {

    message:string;

    location:string;

    constructor(){
        this.message =" property binding";
        this.location = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_uroZRI94ttrLzKwD0jDCas9UntVcFLBDs0gpfTeMR56J81eRZg";
    }

    changeMessage(){
        this.message =" event binding";
    }

    changeLocation(){
        this.location ="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Taj_Mahal_East_Side.JPG/1024px-Taj_Mahal_East_Side.JPG";
    }
   
}