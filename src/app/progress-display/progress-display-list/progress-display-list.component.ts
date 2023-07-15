import { Component, Output, EventEmitter } from '@angular/core';
import { Week } from 'src/app/models/week.model';

@Component({
  selector: 'app-progress-display-list',
  templateUrl: './progress-display-list.component.html',
  styleUrls: ['./progress-display-list.component.css']
})
export class ProgressDisplayListComponent {
  weeks: Week[] = [
    {
      id: "1",
      name: "Week 01",
      totalHours: 10,
      totalMinutes: 0,
      activities: []
    },
    {
      id: "2",
      name: "Week 03",
      totalHours: 3,
      totalMinutes: 51,
      activities: []
    },
    {
      id: "3",
      name: "Week 03",
      totalHours: 10,
      totalMinutes: 0,
      activities: []
    },
    {
      id: "4",
      name: "Week 04",
      totalHours: 10,
      totalMinutes: 0,
      activities: []
    },
    {
      id: "5",
      name: "Week 05",
      totalHours: 10,
      totalMinutes: 0,
      activities: []
    },
    {
      id: "6",
      name: "Week 06",
      totalHours: 10,
      totalMinutes: 0,
      activities: []
    },
  ];

}
