import { Component, OnInit } from '@angular/core';

import {Student} from './student';

import {StudentService} from './student.service';

@Component({
    selector: 'project-app',
    templateUrl: `app/app.template.html`,
    providers: [StudentService]
})

export class AppComponent{
}