import { StudentModule } from './student/student.module';
import { mainRoutes } from './app.routes';
import { RouterModule } from '@angular/router';import { ContactComponent } from './contact.component';
import { AboutComponent } from './about.component';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule,RouterModule,mainRoutes,StudentModule],
    declarations: [AppComponent,HomeComponent,AboutComponent,ContactComponent],
    bootstrap: [AppComponent],
})
export class AppModule { }
