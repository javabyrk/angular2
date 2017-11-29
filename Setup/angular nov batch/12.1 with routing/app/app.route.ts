import { StudentListComponent } from './student-list.component';
import { StudentDeleteComponent } from './student-delete.component';
import { StudentUpdateComponent } from './student-update.component';
import { StudentFormComponent } from './student-form.component';
import { Routes,RouterModule } from "@angular/router";

const routes:Routes=[
    {
        path:'create',
        component:StudentFormComponent
    },
    {
        path:'update/:id',
        component:StudentUpdateComponent
    },
    {
        path:'delete/:id',
        component:StudentDeleteComponent
    },
    {
        path:'list',
        component:StudentListComponent
    },
    {
        path:'',
        redirectTo:'/list',
        pathMatch:'full'
    }
];


export const routingModule = RouterModule.forRoot(routes);
