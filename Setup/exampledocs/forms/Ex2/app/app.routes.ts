import {Routes, RouterModule} from '@angular/router';
import {StudentListComponent} from './student-list.component';
import {AddStudentComponent} from './add-student.component';
import {EditStudentComponent} from './edit-student.component';
import {DeleteStudentComponent} from './delete-student.component';

const routes: Routes = [
  { path: 'list', component: StudentListComponent },
  { path: 'add', component: AddStudentComponent },
  { path: 'edit/:id', component: EditStudentComponent },
  { path: 'delete/:id', component: DeleteStudentComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(routes);