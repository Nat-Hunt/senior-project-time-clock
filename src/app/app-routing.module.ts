import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProgressDisplayComponent } from './progress-display/progress-display.component';
import { ProgressDisplayDetailComponent } from './progress-display/progress-display-list/progress-display-detail/progress-display-detail.component';
import { ProgressDisplayEditComponent } from './progress-display/progress-display-edit/progress-display-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/display', pathMatch: 'full' },
  { path: 'display', component: ProgressDisplayComponent, children: [
    {path: 'new', component: ProgressDisplayEditComponent},
    {path: ':id', component: ProgressDisplayDetailComponent},
    {path: ':id/edit', component: ProgressDisplayEditComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
