import { StudentRegComponent } from './student-reg.component';
import { StudentService } from './student.service';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { ReactiveFormsModule } from "@angular/forms";
@NgModule({
    imports: [BrowserModule,HttpModule,ReactiveFormsModule],
    declarations: [AppComponent,StudentRegComponent],
    providers: [StudentService],
    bootstrap:[AppComponent]
})
export class AppModule { }
