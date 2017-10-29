import { NgModule } from '@angular/core';

import { BrowserModule } from "@angular/platform-browser";

import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';

import { HttpModule } from "@angular/http";

import { StudentFormComponent } from "./student-form.component";


import { StudentListComponent } from "./student-list.component";

import { StudentDeleteComponent } from "./student-delete.component";


import { routing } from "./app.routing";

import { StudentService } from "./student.service";

@NgModule({
    imports: [BrowserModule,FormsModule,HttpModule,routing],
    declarations: [AppComponent,StudentFormComponent,StudentListComponent,StudentDeleteComponent],
    providers:[StudentService],
    bootstrap: [AppComponent],
})
export class AppModule { }
