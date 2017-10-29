
import { StudentFormComponent } from "./student-form.component";

import { StudentListComponent } from "./student-list.component";

import { Routes,RouterModule } from "@angular/router";

import { StudentDeleteComponent } from "./student-delete.component";

const routes : Routes = [
    {path:'list',component:StudentListComponent},
    {path:'insert',component:StudentFormComponent},
    {path:'edit/:studentid',component:StudentFormComponent},
    {path:'delete/:studentid',component:StudentDeleteComponent},
    {path:'',redirectTo:'/list',pathMatch:'full'},
];

export const routing = RouterModule.forRoot(routes);