import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Week } from 'src/app/models/week.model';
import { ProgressService } from '../progress-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-progress-display-list',
  templateUrl: './progress-display-list.component.html',
  styleUrls: ['./progress-display-list.component.css']
})
export class ProgressDisplayListComponent implements OnDestroy, OnInit {
  weeks: Week[] = [];
  subscription: Subscription

  constructor(private progressService: ProgressService) {}
  ngOnInit(): void {
    this.progressService.getWeeks();
    this.subscription = this.progressService.weekListChangedEvent.subscribe(
      (weeks: Week[]) => {
        this.weeks = weeks;
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSelected(week: Week){
    this.progressService.weekSelectedEvent.emit(week);
  }

}
