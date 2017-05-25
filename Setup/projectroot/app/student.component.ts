import { Component } from '@angular/core';

@Component({
    selector: "student-app",
    template: `<div>Hello {{name}}</div>`,
})

export class StudentComponent{
    name="satya";  
}
