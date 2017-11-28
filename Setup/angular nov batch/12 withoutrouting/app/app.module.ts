import { StudentDeleteComponent } from './student-delete.component';
import { StudentUpdateComponent } from './student-update.component';
import { FormsModule } from '@angular/forms';
import { StudentFormComponent } from './student-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { StudentService } from './student.service';
import { StudentListComponent } from './student-list.component';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpModule } from "@angular/http";

@NgModule({
    imports: [BrowserModule,HttpModule,FormsModule],
    declarations: [AppComponent,StudentListComponent,StudentFormComponent,StudentUpdateComponent,StudentDeleteComponent],
    providers: [StudentService],
    bootstrap:[AppComponent]
})
export class AppModule { }
