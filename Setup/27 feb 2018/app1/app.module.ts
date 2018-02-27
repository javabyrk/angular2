import { StudentDeleteComponent } from './student-delete.component';
import { StudentFormComponent } from './student-form.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './student.service';
import { StudentListComponent } from './student-list.component';
import { RouterModule } from '@angular/router';
import { mainRoutes } from './app.routes';
import { FooterComponent } from './footer.component';
import { ContactComponent } from './contact.component';
import { HomeComponent } from './home.component';
import { MenuComponent } from './menu.component';
import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from "@angular/forms";

import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    imports: [BrowserModule,mainRoutes,RouterModule,HttpClientModule,FormsModule],
    declarations: [AppComponent,HeaderComponent,MenuComponent,HomeComponent,ContactComponent,FooterComponent,StudentListComponent,StudentFormComponent,StudentDeleteComponent],
    providers:[StudentService],
    bootstrap: [AppComponent],
})
export class AppModule { }
