import { Component, OnInit, } from '@angular/core';
import { ProgressService } from './progress-service.service';
import { Week } from '../models/week.model';

@Component({
  selector: 'app-progress-display',
  templateUrl: './progress-display.component.html',
  styleUrls: ['./progress-display.component.css']
})
export class ProgressDisplayComponent implements OnInit {
  selectedWeek: Week
  hours: number = 91;
  minutes: number = 0;
  progress: number = 70;
  userProgress: string = `width: ${this.progress}%`
  
  constructor(private progressService: ProgressService) {}

  ngOnInit(): void {
    this.progressService.weekSelectedEvent.subscribe(
      (week: Week) => {
        this.selectedWeek = week;
      }
    )

    this.progressService.weekListChangedEvent.subscribe(
      (weeks: Week[]) => {
        this.hours = 0;
        for (let week of weeks) {
          this.addProgress(week);
        }
      }
    )
  }

  addProgress(week: Week) {
    this.hours += week.totalHours;
    this.minutes += week.totalMinutes;

    if (this.minutes >= 60) {
      this.hours += 1;
      this.minutes -= 60;
    }

    const progress = ((this.hours / 130) * 100).toFixed(0);
    console.log(progress)
  }

}
