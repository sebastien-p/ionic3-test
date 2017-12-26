import { Component, TrackByFunction } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IExercise } from '../../api/service.exercises';

import {
  // ReadAllExercises,
  CreateExercise,
  UpdateExercise,
  DeleteExercise
} from '../../actions/actions.exercises';

import { IState, selectAll } from '../../reducers/reducer.exercises';

interface IAppStore {
  exercises: IState;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  exercises: Observable<IExercise[]> = this.store.select(selectAll);

  constructor(private readonly store: Store<IAppStore>) {}

  // private ionViewDidEnter(): void {
  //   this.refreshExercisesList();
  // }

  // private refreshExercisesList(): void {
  //   this.store.dispatch(new ReadAllExercises());
  // }

  trackByKey(key: keyof IExercise): TrackByFunction<IExercise> {
    return (index, exercise) => exercise[key];
  }

  createExercise(): void {
    const name: string = Date.now().toString();
    this.store.dispatch(new CreateExercise(name));
  }

  updateExercise(exercise: IExercise): void {
    const name: string = Date.now().toString();
    this.store.dispatch(new UpdateExercise({ ...exercise, name }));
  }

  deleteExercise(exercise: IExercise): void {
    this.store.dispatch(new DeleteExercise(exercise.id));
  }
}
