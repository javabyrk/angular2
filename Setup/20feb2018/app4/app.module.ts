import { Component2 } from './component2';
import { Service2 } from './service2';
import { Service1 } from './service1';
import { Component1 } from './component1';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent,Component1,Component2],
    providers:[Service1,Service2],
    bootstrap: [AppComponent],
})
export class AppModule { }
