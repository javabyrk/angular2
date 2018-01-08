import { StudentService } from './student.service';
import { StudentListComponent } from './student-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent,StudentListComponent],
    providers:[StudentService],
    bootstrap: [AppComponent],
})
export class AppModule { }
