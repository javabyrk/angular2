import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'project',
    template: '<a [href]="url">Link1</a><button (click)="m1();">click</button>'
})

export class AppComponent {

    url = 'www.google.com';

    m1(){
        this.url = 'www.fb.com'
    }

   
}