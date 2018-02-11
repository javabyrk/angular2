import { StudentUpdateComponent } from './student-update.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './student.service';
import { StudentListComponent } from './student-list.component';
import { RouterModule } from '@angular/router';
import { mainRoutes } from './app.routes';
import { ContactComponent } from './contact.component';
import { AboutComponent } from './about.component';
import { FooterComponent } from './footer.component';
import { HomeComponent } from './home.component';
import { MenuComponent } from './menu.component';
import { HeaderComponent } from './header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule,mainRoutes,RouterModule,HttpClientModule,FormsModule],
    declarations: [AppComponent,HeaderComponent,MenuComponent,HomeComponent,FooterComponent,AboutComponent,ContactComponent,StudentListComponent,StudentUpdateComponent],
    providers:[StudentService],
    bootstrap: [AppComponent],
})
export class AppModule { }
