import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {


  private _translateXSubject: BehaviorSubject<string> = new BehaviorSubject<string>('translateX(0px)');
  translateX$: Observable<string> = this._translateXSubject.asObservable();

  constructor() { }
  
  toggleSidebar() {
    const currentValue = this._translateXSubject.getValue();
    const newValue = currentValue === 'translateX(-320px)' ? 'translateX(-20px)' : 'translateX(-320px)';
    this._translateXSubject.next(newValue);
  }

}
