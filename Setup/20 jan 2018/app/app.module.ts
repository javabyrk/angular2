import { RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { HomeComponent } from './home.component';
import { mainRoutes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule,mainRoutes,RouterModule],
    declarations: [AppComponent,HomeComponent,ContactComponent,AboutComponent],
    bootstrap: [AppComponent],
})
export class AppModule { }
