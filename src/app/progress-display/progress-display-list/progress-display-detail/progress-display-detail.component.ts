import { Component } from '@angular/core';
import { Activity } from 'src/app/models/activity.model';

@Component({
  selector: 'app-progress-display-detail',
  templateUrl: './progress-display-detail.component.html',
  styleUrls: ['./progress-display-detail.component.css']
})
export class ProgressDisplayDetailComponent {
  activities: Activity[] = []

}
