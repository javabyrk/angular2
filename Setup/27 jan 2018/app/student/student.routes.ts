import { StudentDeleteComponent } from './student-delete.component';
import { StudentUpdateComponent } from './student-update.component';
import { StudentListComponent } from './student-list.component';
import { Routes,RouterModule } from "@angular/router";

const routes:Routes=[
    {path:"students/list",component:StudentListComponent},
    {path:"students/update/:id",component:StudentUpdateComponent},
    {path:"students/delete/:id",component:StudentDeleteComponent},
    {path:"students",redirectTo:"students/list",pathMatch:'full'}
];

export const studentRoutes = RouterModule.forChild(routes);