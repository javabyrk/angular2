import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {StudentListComponent} from './studentlist.component';
import {StudentComponent} from './student.component';
import {AppComponent} from './app.component';
@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent,StudentListComponent,StudentComponent],
    bootstrap:[AppComponent]
})
export class AppModule{}