import {Component} from '@angular/core';
@Component({
			selector: 'project-app',
			template: `<student-list></student-list>`
			})
export class AppComponent implements OnInit,OnChanges,OnDestroy {
	

	ngOnInit() {
		console.log(`ngOnInit`);
	}

	ngOnChanges() {
		console.log(`ngOnChanges`);
	}

	ngOnDestroy() {
		console.log(`ngOnDestroy`);
	}


}