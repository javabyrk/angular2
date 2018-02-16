import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserModule } from "@angular/platform-browser";

import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [BrowserModule,FormsModule],
    declarations: [AppComponent,LoginComponent],
    bootstrap: [AppComponent],
})
export class AppModule { }
