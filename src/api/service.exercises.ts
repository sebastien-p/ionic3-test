import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export interface ITempExercise {
  name: string;
}

export interface IExercise extends ITempExercise {
  id: number;
}

const api: string = 'http://localhost:3000/api/';

@Injectable()
export class ExercisesService {
  private readonly url: string = api + 'admin.exercises';

  constructor(private http: HttpClient) {}

  create(exercise: ITempExercise): Observable<IExercise> {
    return this.http.post<IExercise>(this.url, exercise);
  }

  readAll(): Observable<IExercise[]> {
    return this.http.get<IExercise[]>(this.url);
  }

  readOne(id: number): Observable<IExercise> {
    return this.http.get<IExercise>(this.url + '/' + id);
  }

  update(exercise: IExercise): Observable<IExercise> {
    return this.http.put<IExercise>(this.url + '/' + exercise.id, exercise);
  }

  delete(exercise: IExercise): Observable<object> {
    return this.http.delete<object>(this.url + '/' + exercise.id);
  }
}
