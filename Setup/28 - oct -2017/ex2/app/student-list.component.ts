import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'student-list',
    templateUrl: 'student-list.component.html'
})

export class StudentListComponent implements OnInit {
    students;
    
    constructor() { 
        this.students= [
                            {
                                "id": 1,
                                "name": "student1"
                            },
                            {
                                "id": 2,
                                "name": "student2"
                            },
                            {
                                "id": 3,
                                "name": "student3"
                            }
                        ];
    }

    ngOnInit() { }
}