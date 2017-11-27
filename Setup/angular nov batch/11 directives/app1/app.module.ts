import { NgModule } from '@angular/core';

import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from './app.component';

import { HighLightDirective } from './app.directive';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent,HighLightDirective],
    bootstrap: [AppComponent]
})
export class AppModule { }
