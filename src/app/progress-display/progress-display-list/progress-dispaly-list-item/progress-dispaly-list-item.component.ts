import { Component, Input } from '@angular/core';
import { Week } from 'src/app/models/week.model';

@Component({
  selector: 'app-progress-dispaly-list-item',
  templateUrl: './progress-dispaly-list-item.component.html',
  styleUrls: ['./progress-dispaly-list-item.component.css']
})
export class ProgressDispalyListItemComponent {
  @Input() week: Week;

  
}
