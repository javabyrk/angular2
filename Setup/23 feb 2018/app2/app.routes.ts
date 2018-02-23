import { StudentListComponent } from './student-list.component';
import { StudentFormComponent } from './student-form.component';
import { Routes,RouterModule } from "@angular/router";

const routes:Routes = [

    {path:"form",component:StudentFormComponent},
    {path:"list",component:StudentListComponent},
    
    {path:"",redirectTo:"/list",pathMatch:"full"},
];

export const mainRoutes = RouterModule.forRoot(routes);