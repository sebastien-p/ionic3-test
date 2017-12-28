import { Injectable, Type } from '@angular/core';
import { Store as BaseStore, Action as BaseAction } from '@ngrx/store';

export function type(value: string, namespace?: string): string {
  return new String(namespace ? `[${namespace}] ${value}` : value) as string; // FIXME
}

export function success(value: string, namespace?: string): string {
  return type(`${value} success`, namespace);
}

export abstract class Action<T> implements BaseAction {
  readonly type: string;
  constructor(readonly payload: T = null) {}
}

@Injectable()
export abstract class Store {
  constructor(protected readonly store: BaseStore<any>) {} // FIXME

  protected dispatch<T extends Type<Action<U>>, U = void>(
    action: T,
    payload?: U
  ): void {
    this.store.dispatch(new action(payload));
  }
}
