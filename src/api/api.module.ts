import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ExercisesService } from './exercises.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  providers: [
    ExercisesService
  ]
})
export class AppAPIModule {}
