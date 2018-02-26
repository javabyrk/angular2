import { StudentDeleteComponent } from './student-delete.component';
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
    {path:"update/:abc",component:StudentFormComponent},        
    {path:"delete/:abc",component:StudentDeleteComponent},
    
    {path:"",redirectTo:"/home",pathMatch:"full"},

]

export const mainRoutes = RouterModule.forRoot(routes);