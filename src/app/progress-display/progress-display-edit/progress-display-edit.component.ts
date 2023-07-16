import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators , NgForm, Form, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Week } from 'src/app/models/week.model';
import { Activity } from 'src/app/models/activity.model';
import { ProgressService } from '../progress-service.service';

@Component({
  selector: 'app-progress-display-edit',
  templateUrl: './progress-display-edit.component.html',
  styleUrls: ['./progress-display-edit.component.css']
})
export class ProgressDisplayEditComponent implements OnInit {
  originalWeek: Week;
  week: Week;
  id: string;
  editMode = false;
  weekForm: FormGroup;
  newId = 0;

  constructor(
    private fb: FormBuilder,
    private progressService: ProgressService, 
    private router: Router, 
    private route: ActivatedRoute
    ) {

  }
  ngOnInit(): void {
    let name = '';
    let hours = 0;
    let minutes = 0;
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];

        if (!this.id || this.id === null) {
          this.editMode = false;
          this.newId = this.progressService.getMaxId() + 1;
          name = `Week ${this.newId}`;
          this.week = new Week(`${this.newId}`, name, hours, minutes, [])
          return;
        }
        this.originalWeek = this.progressService.getWeek(this.id);
        if (!this.originalWeek || this.originalWeek === null) {
          return;
        }

        this.editMode = true;
        
        this.week = JSON.parse(JSON.stringify(this.originalWeek));
        name = this.week.name;
        hours = this.week.totalHours;
        minutes = this.week.totalMinutes;
      }
    )
    this.weekForm = this.fb.group({
      name: [name, Validators.required],
      totalHours: [hours, Validators.required],
      totalMinutes: [minutes, Validators.required],
      activities: this.fb.array([]),
    })
    
    if (this.week.activities) {
      for (let activity of this.week.activities) {
        const activityForm = this.fb.group({
          name: [activity.name, Validators.required],
          description: [activity.description, Validators.required],
          numHours: [activity.numHours, Validators.required],
          numMinutes: [activity.numMinutes, Validators.required]
        })
    
        this.activities.push(activityForm);
      }
    }

  }

  get activities() {
    return this.weekForm.controls["activities"] as FormArray;
  }

  addActivity() {
    const activityForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      numHours: [0, Validators.required],
      numMinutes: [0, Validators.required]
    })

    this.activities.push(activityForm);
  }

  deleteActivity(activityIndex: number) {
    this.activities.removeAt(activityIndex);
  }

  onSubmit(form: FormGroup) {
    const value = form.value;
    const newWeek = new Week(
      `${this.newId}`,
      value.name,
      value.totalHours,
      value.totalMinutes,
      value.activities
    )

    if (this.editMode) {
      this.progressService.updateWeek(this.originalWeek, newWeek);
    } else {
      this.progressService.addWeek(newWeek);
    }

    this.router.navigate(['/display'], {relativeTo: this.route})
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
