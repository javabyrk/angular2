import { StudentUpdateComponent } from './student-update.component';
import { StudentListComponent } from './student-list.component';
import { ContactComponent } from './contact.component';
import { AboutComponent } from './about.component';
import { HomeComponent } from './home.component';
import { Routes,RouterModule } from "@angular/router";

const routes:Routes = [
    { path:"home",component:HomeComponent},
    { path:"about",component:AboutComponent},
    { path:"contact",component:ContactComponent},
    { path:"studentList",component:StudentListComponent},
    { path:"studentUpdate/:abc",component:StudentUpdateComponent},
    
    { path:"",redirectTo:"/home",pathMatch:'full'}
];

export const mainRoutes = RouterModule.forRoot(routes);