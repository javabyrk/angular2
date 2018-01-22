import { EmployeeListComponent } from './employee-list.component';
import { StudentListComponent } from './student-list.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { HomeComponent } from './home.component';
import { Routes,RouterModule } from "@angular/router";
const routes:Routes = [
    {
        path:"home",component:HomeComponent
    },
    {
        path:"contact",component:ContactComponent
    },
    {
        path:"about",component:AboutComponent
    },
    {
        path:"students",component:StudentListComponent
    },
    {
        path:"employees",component:EmployeeListComponent
    },
    {
        path:'',
        redirectTo:"/home",
        pathMatch:'full'
    }
]

export const mainRoutes = RouterModule.forRoot(routes);