import { NgModule } from '@angular/core';

import { BrowserModule } from "@angular/platform-browser";

import { StudentService } from "./student.service";

import { StudentListComponent } from "./student-list.component";

import { AppComponent } from './app.component';

import { HttpModule } from "@angular/http";

@NgModule({
    imports: [BrowserModule,HttpModule],
    declarations: [AppComponent,StudentListComponent],
    providers:[StudentService],
    bootstrap: [AppComponent],
})
export class AppModule { }
