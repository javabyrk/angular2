import { Routes,RouterModule } from "@angular/router";

import { StudentListComponent } from './student-list.component';

import { StudentFormComponent } from './student-form.component';

import { StudentDeleteComponent } from './student-delete.component';

const routes:Routes=[
    { path:'add',component:StudentFormComponent},
    { path:'edit/:id',component:StudentFormComponent},
    { path:'delete/:id',component:StudentDeleteComponent},
    { path:'list',component:StudentListComponent},
    {path:'',redirectTo:'/list',pathMatch:'full'}
];

export const routing = RouterModule.forRoot(routes);