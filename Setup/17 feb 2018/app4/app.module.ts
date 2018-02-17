import { FormsModule } from '@angular/forms';
import { StudentInsertComponent } from './student-insert.component';
import { StudentService } from './student.service';
import { StudentListComponent } from './student-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule,FormsModule],
    declarations: [AppComponent,StudentListComponent,StudentInsertComponent],
    providers:[StudentService],
    bootstrap: [AppComponent],
})
export class AppModule { }
