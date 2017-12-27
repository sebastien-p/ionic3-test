import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { exercises } from './reducers/exercises.reducer';
import { ExercisesEffects } from './effects/exercises.effects';
import { ExercisesService } from './services/exercises.service';

@NgModule({
  imports: [
    StoreModule.forRoot({ exercises }), // TODO: move (feature)
    EffectsModule.forRoot([ExercisesEffects]), // TODO: move (feature)
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  exports: [
    StoreModule,
    EffectsModule
  ],
  providers: [
    ExercisesService
  ]
})
export class AppStoreModule {}
