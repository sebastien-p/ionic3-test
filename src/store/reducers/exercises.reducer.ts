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
    case actions.createSuccess: {
      return adapter.addOne(payload as IExercise, state);
    }
    case actions.readSuccess: {
      return adapter.addAll(payload as IExercise[], state);
    }
    case actions.updateSuccess: {
      const { id, ...changes } = payload as IExercise;
      return adapter.updateOne({ id, changes }, state);
    }
    case actions.destroySuccess: {
      return adapter.removeOne(payload as number, state);
    }
  }
  return state;
}

export const { selectAll } = adapter.getSelectors(createFeatureSelector(actions.namespace)); // FIXME
