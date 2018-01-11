import { Component2 } from './component2';
import { Service } from './service';
import { Component1 } from './component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent,Component1,Component2],
    providers:[Service],
    bootstrap: [AppComponent],
})
export class AppModule { }
