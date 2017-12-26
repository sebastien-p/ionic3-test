import { createFeatureSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { IExercise } from '../api/service.exercises';
import { Actions, ExercisesActions } from '../actions/actions.exercises';

export interface IState extends EntityState<IExercise> {}

const adapter: EntityAdapter<IExercise> = createEntityAdapter<IExercise>();

export function exercises(
  state: IState = adapter.getInitialState(),
  { type, payload }: ExercisesActions
): IState {
  switch (type) {
    case Actions.Create:
      return adapter.addOne({ id: state.ids.length, name: <string>payload }, state); // FIXME
    case Actions.ReadAll:
      return state;
    case Actions.ReadOne:
      return state;
    case Actions.Update:
      return adapter.updateOne({ id: (<IExercise>payload).id, changes: <IExercise>payload }, state); // FIXME
    case Actions.Delete:
      return adapter.removeOne(<number>payload, state); // FIXME
    default:
      return state;
    }
}

export const { selectAll } = adapter.getSelectors(createFeatureSelector('exercises')); // FIXME
