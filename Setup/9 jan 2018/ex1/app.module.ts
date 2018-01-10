import { AuthenticationService } from './authentication.service';
import { AutherizationService } from './autherization.service';
import { LoginComponent } from './login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent,LoginComponent],
    providers:[AutherizationService,AuthenticationService],
    bootstrap: [AppComponent],
})
export class AppModule { }
