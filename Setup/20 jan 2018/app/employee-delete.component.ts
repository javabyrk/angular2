import { EmployeeService } from './employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'employee-delete',
    templateUrl: 'employee-delete.component.html'
})

export class EmployeeDeleteComponent{
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
    deleteEmployee(id:number){
        this.employeeService.deleteEmployeeById(id).subscribe(
            (data)=>console.log(data),
            (error)=>console.log(error)
        )
    }

}