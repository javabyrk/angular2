import { NgModule } from '@angular/core';

import { BrowserModule } from "@angular/platform-browser";

import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import { StudentListComponent } from "./student-list.component";

import { AddStudentComponent } from "./add-student.component";

import { EditStudentComponent } from "./edit-student.component";

import { DeleteStudentComponent } from "./delete-student.component";

import {StudentService} from './student.service';

import {routing} from './app.routes';

@NgModule({
    imports: [BrowserModule,routing,ReactiveFormsModule],
    declarations: [AppComponent,StudentListComponent,AddStudentComponent,EditStudentComponent,DeleteStudentComponent],
    providers: [StudentService],
    bootstrap: [AppComponent]
})
export class AppModule { }
