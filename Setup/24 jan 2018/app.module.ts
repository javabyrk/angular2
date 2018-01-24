import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './student.service';
import { StudentFormComponent } from './student-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule,HttpClientModule,ReactiveFormsModule],
    declarations: [AppComponent,StudentFormComponent],
    providers:[StudentService],
    bootstrap: [AppComponent],
})
export class AppModule { }
