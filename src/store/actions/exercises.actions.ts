import { ITempExercise, IExercise } from '../../api/models/exercices.model';
import { type, success, Action } from '../app.store';

export const namespace: string = 'exercises';

/* Create */

export const create: string = type('Create', namespace);

export class Create extends Action<ITempExercise> {
  readonly type: string = create;
}

export const createSuccess: string = success(create);

export class CreateSuccess extends Action<IExercise> {
  readonly type: string = createSuccess;
}

/* Read */

export const read: string = type('Read', namespace);

export class Read extends Action<void> {
  readonly type: string = read;
}

export const readSuccess: string = success(read);

export class ReadSuccess extends Action<IExercise[]> {
  readonly type: string = readSuccess;
}

/* Update */

export const update: string = type('Update', namespace);

export class Update extends Action<IExercise> {
  readonly type: string = update;
}

export const updateSuccess: string = success(update);

export class UpdateSuccess extends Action<IExercise> {
  readonly type: string = updateSuccess;
}

/* Destroy */

export const destroy: string = type('Destroy', namespace);

export class Destroy extends Action<number> {
  readonly type: string = destroy;
}

export const destroySuccess: string = success(destroy);

export class DestroySuccess extends Action<number> {
  readonly type: string = destroySuccess;
}

/* All */

export type All // TODO: typeof keyof
  = Create
  | CreateSuccess
  | Read
  | ReadSuccess
  | Update
  | UpdateSuccess
  | Destroy
  | DestroySuccess;
