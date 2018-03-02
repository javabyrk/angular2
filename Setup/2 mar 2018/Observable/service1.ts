import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class Service1 {

    private subject = new Subject<any>();

    setMessage(data){
        this.subject.next(data);
    }

    getMessage(){
        return this.subject.asObservable();
    }

}