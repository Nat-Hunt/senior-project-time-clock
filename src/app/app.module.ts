import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProgressDisplayComponent } from './progress-display/progress-display.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { ProgressDisplayDetailComponent } from './progress-display/progress-display-list/progress-display-detail/progress-display-detail.component';
import { ProgressDisplayListComponent } from './progress-display/progress-display-list/progress-display-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressDispalyListItemComponent } from './progress-display/progress-display-list/progress-dispaly-list-item/progress-dispaly-list-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActivityListItemComponent } from './progress-display/progress-display-list/progress-display-detail/activity-list-item/activity-list-item.component';
import { ProgressDisplayEditComponent } from './progress-display/progress-display-edit/progress-display-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProgressDisplayComponent,
    DropdownDirective,
    ProgressDisplayDetailComponent,
    ProgressDisplayListComponent,
    ProgressDispalyListItemComponent,
    ActivityListItemComponent,
    ProgressDisplayEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
