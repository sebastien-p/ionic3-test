import { Injectable, Type } from '@angular/core';
import { Store, Action } from '@ngrx/store';

@Injectable()
export abstract class AppStore {
  constructor(protected readonly store: Store<any>) {} // FIXME

  protected dispatch<T extends Type<Action>>(Action: T, payload?: any): void { // FIXME
    this.store.dispatch(new Action(payload));
  }
}
