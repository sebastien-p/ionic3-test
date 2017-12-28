import { Observable } from 'rxjs/Observable';

import { Store } from '../app.store';
import { ITempExercise, IExercise } from '../../api/models/exercices.model';
import { selectAll } from '../reducers/exercises.reducer';
import * as actions from '../actions/exercises.actions';

export class ExercisesService extends Store {
  readonly all$: Observable<IExercise[]> = this.store.select(selectAll);

  create(exercise: ITempExercise): void {
    this.dispatch(actions.Create, exercise);
  }

  read(): void {
    this.dispatch(actions.Read);
  }

  update(exercise: IExercise): void {
    this.dispatch(actions.Update, exercise);
  }

  destroy(id: number): void {
    this.dispatch(actions.Destroy, id);
  }
}
