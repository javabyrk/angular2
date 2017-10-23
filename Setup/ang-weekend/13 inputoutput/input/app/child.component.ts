import { Component, OnInit , Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'child',
    template: '{{c1}}'
})

export class ChildComponent implements OnInit {
    
    @Input() c1 = 0;

    constructor() { }

    ngOnInit() { }
}