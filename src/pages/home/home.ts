import { Component, TrackByFunction } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { IExercise } from '../../api/models/exercices.model';
import { ExercisesService } from '../../store/services/exercises.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  readonly exercises$: Observable<IExercise[]> = this.exercices.all$;

  constructor(private readonly exercices: ExercisesService) {}

  private ionViewDidEnter(): void {
    this.exercices.read();
  }

  createExercise(): void {
    this.exercices.create({ name: Date.now().toString() });
  }

  updateExercise(exercise: IExercise): void {
    this.exercices.update({ ...exercise, name: Date.now().toString() });
  }

  destroyExercise(exercise: IExercise): void {
    this.exercices.destroy(exercise.id);
  }

  trackByKey(key: keyof IExercise): TrackByFunction<IExercise> {
    return (index, exercise) => exercise[key]; // DRY
  }
}
