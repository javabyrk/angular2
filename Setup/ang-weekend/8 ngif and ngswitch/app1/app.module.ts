import { NgModule } from '@angular/core';

import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from './app.component';

import { StudentListComponent } from "./student-list.component";

import { StudentService } from "./student.service";

import { OwnerListComponent } from "./owner-list.component";

import { OwnerService } from "./owner.service";

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent,StudentListComponent,OwnerListComponent],
    providers:[StudentService,OwnerService],
    bootstrap: [AppComponent],
})
export class AppModule { }
