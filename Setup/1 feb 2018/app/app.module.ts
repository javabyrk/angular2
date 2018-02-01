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

import { LoginComponent } from "./login.component";


import { LogOutComponent } from "./logout.component";

import { AuthGuard } from "./auth.guard";

@NgModule({
    imports: [BrowserModule,FormsModule,HttpModule,routing],
    declarations: [AppComponent,StudentFormComponent,StudentListComponent,StudentDeleteComponent,LoginComponent,LogOutComponent],
    providers:[StudentService,AuthGuard],
    bootstrap: [AppComponent],
})
export class AppModule { }
