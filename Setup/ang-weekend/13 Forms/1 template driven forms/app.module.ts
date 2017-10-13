import { NgModule } from '@angular/core';

import { BrowserModule } from "@angular/platform-browser";

import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';

import { StudentFormComponent } from './student-form.component';

@NgModule({
    imports: [BrowserModule,FormsModule],
    declarations: [AppComponent,StudentFormComponent],
    bootstrap:[AppComponent]
})
export class AppModule { }

