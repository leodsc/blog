import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuLoginService {
  logado: boolean = false;
  logadoBehavior: BehaviorSubject<boolean>;

  constructor() {
    this.logadoBehavior = new BehaviorSubject(this.logado);
  }

  editMenu(status: boolean) {
    this.logadoBehavior.next(status);
  }
}
