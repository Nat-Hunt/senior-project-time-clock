import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProgressDisplayComponent } from './progress-display/progress-display.component';
import { TrackingInputComponent } from './tracking-input/tracking-input.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { ProgressDisplayDetailComponent } from './progress-display/progress-display-list/progress-display-detail/progress-display-detail.component';
import { ProgressDisplayListComponent } from './progress-display/progress-display-list/progress-display-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressDispalyListItemComponent } from './progress-display/progress-display-list/progress-dispaly-list-item/progress-dispaly-list-item.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActivityListItemComponent } from './progress-display/progress-display-list/progress-display-detail/activity-list-item/activity-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProgressDisplayComponent,
    TrackingInputComponent,
    DropdownDirective,
    ProgressDisplayDetailComponent,
    ProgressDisplayListComponent,
    ProgressDispalyListItemComponent,
    ActivityListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
