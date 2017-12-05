import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent
{
    title: string = 'ngSwitch Example' ;
    num: number= 0;

    items: item[] = [{name: 'One', val: 1}, {name: 'Two', val: 2}, {name: 'Three', val: 3}];
    selectedValue: string= 'One';

}

class item {
  name: string;
  val: number;
}


