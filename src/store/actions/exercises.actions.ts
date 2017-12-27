import { Action } from '@ngrx/store';

import { IExercise, ITempExercise } from '../../api/models/exercices.model';

export const create: string = '[Exercises] Create';
export const createSuccess: string = '[Exercises] Create success';
export const read: string = '[Exercises] Read';
export const readSuccess: string = '[Exercises] Read success';
export const update: string = '[Exercises] Update';
export const updateSuccess: string = '[Exercises] Update success';
export const destroy: string = '[Exercises] Destroy';
export const destroySuccess: string = '[Exercises] Destroy success';

export class Create implements Action {
  readonly type: string = create;
  constructor(readonly payload: ITempExercise) {}
}

export class CreateSuccess implements Action {
  readonly type: string = createSuccess;
  constructor(readonly payload: IExercise) {}
}

export class Read implements Action {
  readonly type: string = read;
  constructor(readonly payload?: void) {} // FIXME
}

export class ReadSuccess implements Action {
  readonly type: string = readSuccess;
  constructor(readonly payload: IExercise[]) {}
}

export class Update implements Action {
  readonly type: string = update;
  constructor(readonly payload: IExercise) {}
}

export class UpdateSuccess implements Action {
  readonly type: string = updateSuccess;
  constructor(readonly payload: IExercise) {}
}

export class Destroy implements Action {
  readonly type: string = destroy;
  constructor(readonly payload: number) {}
}

export class DestroySuccess implements Action {
  readonly type: string = destroySuccess;
  constructor(readonly payload: number) {}
}

export type All
  = Create
  | CreateSuccess
  | Read
  | ReadSuccess
  | Update
  | UpdateSuccess
  | Destroy
  | DestroySuccess;
