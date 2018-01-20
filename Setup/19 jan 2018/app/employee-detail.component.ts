import { EmployeeService } from './employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'employee-detail',
    templateUrl: 'employee-detail.component.html'
})

export class EmployeeDetailComponent{
    employee;
    constructor(private employeeService:EmployeeService) { 
        this.employee = {};
    }

    loadEmployee(id:number){
        this.employeeService.getEmployeeById(id).subscribe(
            (data)=>this.employee=data,
            (error)=>console.log(error)
        )
    }
}