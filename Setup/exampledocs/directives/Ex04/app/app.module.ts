import { NgModule } from '@angular/core';

import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from './app.component';

import { ConfirmDirective } from './app.directive';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent,ConfirmDirective],
    bootstrap: [AppComponent]
})
export class AppModule { }
