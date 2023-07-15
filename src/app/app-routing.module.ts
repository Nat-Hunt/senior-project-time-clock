import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProgressDisplayComponent } from './progress-display/progress-display.component';
import { TrackingInputComponent } from './tracking-input/tracking-input.component';
import { ProgressDisplayDetailComponent } from './progress-display/progress-display-list/progress-display-detail/progress-display-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/display', pathMatch: 'full' },
  { path: 'display', component: ProgressDisplayComponent, children: [
    {path: ':id', component: ProgressDisplayDetailComponent}
  ] },
  { path: 'track', component: TrackingInputComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
