import { Service1 } from './service1';
import { Service3 } from './service3';
import { Service2 } from './service2';

import { Component1 } from './component1';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent,Component1],
    providers:[Service1,Service2,Service3],
    bootstrap: [AppComponent],
})
export class AppModule { }
