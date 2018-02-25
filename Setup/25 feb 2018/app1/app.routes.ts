import { StudentFormComponent } from './student-form.component';
import { StudentListComponent } from './student-list.component';
import { ContactComponent } from './contact.component';
import { HomeComponent } from './home.component';
import { Routes,RouterModule } from "@angular/router";

const routes:Routes = [

    {path:"home",component:HomeComponent},
    {path:"contact",component:ContactComponent},
    {path:"list",component:StudentListComponent},
    {path:"form",component:StudentFormComponent},
    
    {path:"",redirectTo:"/home",pathMatch:"full"},

]

export const mainRoutes = RouterModule.forRoot(routes);