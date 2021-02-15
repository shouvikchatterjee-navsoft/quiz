import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private subject = new Subject<any>();

    openModal(data) {
        this.subject.next({status:true,html:data});
    }

    onModalStatus(): Observable<any> {
        return this.subject.asObservable();
    }
}