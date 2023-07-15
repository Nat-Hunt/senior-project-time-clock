import { Component } from '@angular/core';
import { Activity } from 'src/app/models/activity.model';

@Component({
  selector: 'app-progress-display-detail',
  templateUrl: './progress-display-detail.component.html',
  styleUrls: ['./progress-display-detail.component.css']
})
export class ProgressDisplayDetailComponent {
  activities: Activity[] = [
    {
      id: "1",
      name: "Read Da Book",
      description: " I read the book. It was good",
      numHours: 1,
      numMinutes: 0,
      resource: "book",
      day: "Monday" 
    },
    {
      id: "1",
      name: "Watch Videos",
      description: " I read the book. It was good",
      numHours: 1,
      numMinutes: 10,
      resource: "book",
      day: "Monday" 
    },
    {
      id: "1",
      name: "Read Da Book",
      description: " I read the book. It was good",
      numHours: 3,
      numMinutes: 0,
      resource: "book",
      day: "Monday" 
    },
    {
      id: "1",
      name: "Read Da Book",
      description: " I read the book. It was good",
      numHours: 1,
      numMinutes: 5,
      resource: "book",
      day: "Monday" 
    },
    {
      id: "1",
      name: "Read Da Book",
      description: " I read the book. It was good",
      numHours: 1,
      numMinutes: 10,
      resource: "book",
      day: "Monday" 
    },
  ]

}
