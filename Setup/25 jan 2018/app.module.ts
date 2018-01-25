import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './student.service';
import { StudentUpdateComponent } from './student-update.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule,HttpClientModule,FormsModule],
    declarations: [AppComponent,StudentUpdateComponent],
    providers:[StudentService],
    bootstrap: [AppComponent],
})
export class AppModule { }
