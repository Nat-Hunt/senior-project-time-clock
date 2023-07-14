import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProgressDisplayComponent } from './progress-display/progress-display.component';
import { TrackingInputComponent } from './tracking-input/tracking-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProgressDisplayComponent,
    TrackingInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
