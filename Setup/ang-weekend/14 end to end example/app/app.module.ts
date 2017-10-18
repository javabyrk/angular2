import { NgModule } from '@angular/core';

import { BrowserModule } from "@angular/platform-browser";

import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';

import { StudentListComponent } from './student-list.component';

import { FormsModule } from "@angular/forms";

import { StudentFormComponent } from './student-form.component';

import { StudentDeleteComponent } from './student-delete.component';

import { routing } from "./app.routes";

import { StudentService } from "./student.service";

@NgModule({
    imports: [BrowserModule,HttpModule,routing,FormsModule],
    declarations: [AppComponent,StudentListComponent,StudentFormComponent,StudentDeleteComponent],
    providers:[StudentService],
    bootstrap: [AppComponent],
})
export class AppModule { }
