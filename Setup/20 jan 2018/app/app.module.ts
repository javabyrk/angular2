import { EmployeeDeleteComponent } from './employee-delete.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employee.service';
import { EmployeeDetailComponent } from './employee-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule,HttpClientModule],
    declarations: [AppComponent,EmployeeDetailComponent,EmployeeDeleteComponent],
    providers:[EmployeeService],
    bootstrap: [AppComponent],
})
export class AppModule { }
