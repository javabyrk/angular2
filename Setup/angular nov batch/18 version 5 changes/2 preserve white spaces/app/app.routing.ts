
import { StudentFormComponent } from "./student-form.component";

import { StudentListComponent } from "./student-list.component";

import { Routes,RouterModule } from "@angular/router";

import { StudentDeleteComponent } from "./student-delete.component";


import { LoginComponent } from "./login.component";


import { LogOutComponent } from "./logout.component";

import { AuthGuard } from "./auth.guard";

const routes : Routes = [
    {path:'list',component:StudentListComponent,canActivate:[AuthGuard]},
    {path:'insert',component:StudentFormComponent,canActivate:[AuthGuard]},
    {path:'edit/:studentid',component:StudentFormComponent,canActivate:[AuthGuard]},
    {path:'logout',component:LogOutComponent},
    {path:'login',component:LoginComponent},
    {path:'',redirectTo:'/login',pathMatch:'full'},
];

export const routing = RouterModule.forRoot(routes);