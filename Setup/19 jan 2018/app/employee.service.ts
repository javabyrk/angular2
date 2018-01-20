import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

@Injectable()
export class EmployeeService {

    constructor(private http:HttpClient) { }

    getEmployeeById(id:number){
        return this.http.get('http://localhost:3000/employees/'+id);
    }

    deleteEmployeeById(id:number){
        return this.http.delete('http://localhost:3000/employees/'+id);
    }
}