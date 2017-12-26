import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { IExercise, ExercisesService } from '../../api/service.exercises';
import { TrackByFunction } from '@angular/core/src/change_detection/differs/iterable_differs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  exercises: Observable<IExercise[]>;

  constructor(private exercisesService: ExercisesService) {}

  private ionViewDidEnter(): void {
    this.refreshExercisesList();
  }

  private refreshExercisesList(): void {
    this.exercises = this.exercisesService.readAll();
  }

  trackByKey(key: keyof IExercise): TrackByFunction<IExercise> {
    return (index, exercise) => exercise[key];
  }

  createExercise(): void {
    const name: string = Date.now().toString();
    this.exercisesService.create({ name }).subscribe(exercise => {
      this.refreshExercisesList();
      console.log(exercise);
    });
  }

  updateExercise(exercise: IExercise): void {
    const name: string = Date.now().toString();
    this.exercisesService.update({ ...exercise, name }).subscribe(exercise => {
      this.refreshExercisesList();
      console.log(exercise);
    });
  }

  deleteExercise(exercise: IExercise): void {
    this.exercisesService.delete(exercise).subscribe(exercise => {
      this.refreshExercisesList();
      console.log(exercise);
    });
  }
}
