import { RouterModule } from '@angular/router';
import { mainRoutes } from './app.routes';
import { StudentFormComponent } from './student-form.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './student.service';
import { StudentListComponent } from './student-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule,HttpClientModule,FormsModule,mainRoutes,RouterModule],
    declarations: [AppComponent,StudentListComponent,StudentFormComponent],
    providers:[StudentService],
    bootstrap: [AppComponent],
})
export class AppModule { }
