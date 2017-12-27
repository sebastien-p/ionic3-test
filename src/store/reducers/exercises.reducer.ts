import { createFeatureSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { IExercise } from '../../api/models/exercices.model';
import * as actions from '../actions/exercises.actions';

export interface IState extends EntityState<IExercise> {}

const adapter: EntityAdapter<IExercise> = createEntityAdapter<IExercise>();

export function exercises(
  state: IState = adapter.getInitialState(),
  { type, payload }: actions.All
): IState {
  switch (type) {
    case actions.createSuccess:
      return adapter.addOne(<IExercise>payload, state); // FIXME
    case actions.readSuccess:
      return adapter.addAll(<IExercise[]>payload, state); // FIXME
    case actions.updateSuccess:
      return adapter.updateOne({ id: (<IExercise>payload).id, changes: <IExercise>payload }, state); // FIXME
    case actions.destroySuccess:
      return adapter.removeOne(<number>payload, state); // FIXME
  }
  return state;
}

export const { selectAll } = adapter.getSelectors(createFeatureSelector('exercises')); // FIXME
