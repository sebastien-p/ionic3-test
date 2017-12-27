import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ITempExercise, IExercise } from './models/exercices.model';

const api: string = 'http://localhost:3000/api/';

@Injectable()
export class ExercisesService {
  private readonly url: string = api + 'admin.exercises';

  constructor(private http: HttpClient) {} // DRY

  create(exercise: ITempExercise): Observable<IExercise> {
    return this.http.post<IExercise>(this.url, exercise);
  }

  read(): Observable<IExercise[]> {
    return this.http.get<IExercise[]>(this.url);
  }

  update(exercise: IExercise): Observable<IExercise> {
    return this.http.put<IExercise>(this.url + '/' + exercise.id, exercise);
  }

  destroy(id: number): Observable<number> {
    return this.http.delete<object>(this.url + '/' + id).map(() => id);
  }
}
