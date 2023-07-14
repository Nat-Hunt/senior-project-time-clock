import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProgressDisplayComponent } from './progress-display/progress-display.component';
import { TrackingInputComponent } from './tracking-input/tracking-input.component';

const routes: Routes = [
  { path: '', redirectTo: '/display', pathMatch: 'full' },
  { path: 'display', component: ProgressDisplayComponent },
  { path: 'track', component: TrackingInputComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
