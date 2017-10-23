import { NgModule } from '@angular/core';

import { BrowserModule } from "@angular/platform-browser";

import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';

@NgModule({
    imports: [BrowserModule,ReactiveFormsModule],
    declarations: [AppComponent,ParentComponent,ChildComponent],
    bootstrap: [AppComponent],
})
export class AppModule { }
