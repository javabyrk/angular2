import { EmployeeListComponent } from './employee-list.component';
import { EmployeeService } from './employee.service';
import { StudentService } from './student.service';
import { StudentListComponent } from './student-list.component';
import { RouterModule } from '@angular/router';
import { mainRoutes } from './app.routes';
import { ContactComponent } from './contact.component';
import { AboutComponent } from './about.component';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule,mainRoutes,RouterModule,HttpClientModule],
    declarations: [AppComponent,HomeComponent,AboutComponent,ContactComponent,StudentListComponent,EmployeeListComponent],
    providers:[StudentService,EmployeeService],
    bootstrap: [AppComponent],
})
export class AppModule { }
