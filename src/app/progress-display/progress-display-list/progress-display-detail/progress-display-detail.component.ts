import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Activity } from 'src/app/models/activity.model';
import { Week } from 'src/app/models/week.model';
import { ProgressService } from '../../progress-service.service';

@Component({
  selector: 'app-progress-display-detail',
  templateUrl: './progress-display-detail.component.html',
  styleUrls: ['./progress-display-detail.component.css']
})
export class ProgressDisplayDetailComponent implements OnInit {
  activities: Activity[] = []
  @Input() week: Week;
  @Input() id: string;

  constructor(
    private progressService: ProgressService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.week = this.progressService.getWeek(this.id);
        this.activities = this.week.activities;
      }
    )
  }

  onEditWeek(){
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

  onDeleteWeek(){
    this.progressService.deleteWeek(this.week);
    this.router.navigate(['/recipes'], {relativeTo: this.route})
  }
}
