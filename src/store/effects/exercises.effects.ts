import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import * as actions from '../actions/exercises.actions';
import { ExercisesService } from '../../api/exercises.service';

@Injectable()
export class ExercisesEffects {
  @Effect()
  readonly create: Observable<actions.CreateSuccess> = this.actions$
    .ofType<actions.Create>(actions.create)
    .switchMap(({ payload }) => this.exercises.create(payload))
    .map(exercise => new actions.CreateSuccess(exercise))

  @Effect()
  readonly readAll: Observable<actions.ReadSuccess> = this.actions$
    .ofType<actions.Read>(actions.read)
    .switchMap(({ payload }) => this.exercises.read())
    .map(exercises => new actions.ReadSuccess(exercises))

  @Effect()
  readonly update: Observable<actions.UpdateSuccess> = this.actions$
    .ofType<actions.Update>(actions.update)
    .switchMap(({ payload }) => this.exercises.update(payload))
    .map(exercise => new actions.UpdateSuccess(exercise))

  @Effect()
  readonly destroy: Observable<actions.DestroySuccess> = this.actions$
    .ofType<actions.Destroy>(actions.destroy)
    .switchMap(({ payload }) => this.exercises.destroy(payload))
    .map(id => new actions.DestroySuccess(id))

  constructor(
    private actions$: Actions,
    private exercises: ExercisesService
  ) {}
}
