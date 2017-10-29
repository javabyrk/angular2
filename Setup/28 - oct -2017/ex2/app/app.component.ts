import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'project',
    template: 'data <student-list></student-list>'
})

export class AppComponent {

    url = 'www.google.com';

    m1(){
        this.url = 'www.fb.com'
    }
   
}