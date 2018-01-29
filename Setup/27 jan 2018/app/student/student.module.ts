import { StudentDeleteComponent } from './student-delete.component';
import { FormsModule } from '@angular/forms';
import { StudentUpdateComponent } from './student-update.component';
import { studentRoutes } from './student.routes';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { StudentService } from './student.service';
import { NgModule } from '@angular/core';

import { StudentListComponent } from './student-list.component';

@NgModule({
    imports: [CommonModule,HttpClientModule,RouterModule,studentRoutes,FormsModule],
    declarations: [StudentListComponent,StudentUpdateComponent,StudentDeleteComponent],
    providers: [StudentService],
})
export class StudentModule { }
