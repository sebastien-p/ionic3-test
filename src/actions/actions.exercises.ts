import { Action } from '@ngrx/store';

import { IExercise } from '../api/service.exercises';

export const enum Actions {
  Create = '[Exercises] Create',
  ReadAll = '[Exercises] Read all',
  ReadOne = '[Exercises] Read one',
  Update = '[Exercises] Update',
  Delete = '[Exercises] Delete'
}

export class CreateExercise implements Action {
  readonly type: Actions = Actions.Create;
  constructor(readonly payload: string) {}
}

export class ReadAllExercises implements Action {
  readonly type: Actions = Actions.ReadAll;
  constructor(readonly payload?: void) {} // FIXME
}

export class ReadOneExercise implements Action {
  readonly type: Actions = Actions.ReadOne;
  constructor(readonly payload: number) {}
}

export class UpdateExercise implements Action {
  readonly type: Actions = Actions.Update;
  constructor(readonly payload: IExercise) {}
}

export class DeleteExercise implements Action {
  readonly type: Actions = Actions.Delete;
  constructor(readonly payload: number) {}
}

export type ExercisesActions
  = CreateExercise
  | ReadAllExercises
  | ReadOneExercise
  | UpdateExercise
  | DeleteExercise;
