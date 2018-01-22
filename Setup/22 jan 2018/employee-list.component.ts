import { EmployeeService } from './employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'employee-list',
    templateUrl: 'employee-list.component.html'
})

export class EmployeeListComponent{
    employees;
    constructor(private empService:EmployeeService) {
        this.employees = [];
     }

     load(){
         this.empService.getEmployees().subscribe(
             (data)=>this.employees=data
         )
     }

}