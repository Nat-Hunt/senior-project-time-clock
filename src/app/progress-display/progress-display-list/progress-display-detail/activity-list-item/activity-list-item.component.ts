import { Component, Input } from '@angular/core';
import { Activity } from 'src/app/models/activity.model';

@Component({
  selector: 'app-activity-list-item',
  templateUrl: './activity-list-item.component.html',
  styleUrls: ['./activity-list-item.component.css']
})
export class ActivityListItemComponent {
  @Input() activity: Activity;

}
