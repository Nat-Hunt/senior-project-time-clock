import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Week } from '../models/week.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  private databaseUrl: string = '';
  weeks: Week[] = [];
  maxWeekId: number;

  weekSelectedEvent = new EventEmitter<Week>();
  weekListChangedEvent = new Subject<Week[]>();

  constructor( private http: HttpClient) {
    this.maxWeekId = this.getMaxId();
  }

  getMaxId(): number {
    let maxId = 0;

    for (let contact of this.weeks) {
      let currentId = +contact.id;
      if (currentId > maxId) {
        maxId = currentId;
      }
    }

    return maxId;
  }

  storeWeeks() {
    const weeks = JSON.stringify(this.weeks);
    const httpHeaders = new HttpHeaders;
    httpHeaders.set('Content-type', 'application/json');
    this.http
      .put(this.databaseUrl, weeks, {headers: httpHeaders})
      .subscribe(()=>{
        this.weekListChangedEvent.next(this.weeks.slice());
      })
  }

  addWeek(newWeek: Week) {
    if (!newWeek) {
      return
    }

    newWeek.id = "";
    const headers = new HttpHeaders({'Content-type': 'application/json'});

    this.http
      .post<{message: String, week: Week}>(this.databaseUrl, newWeek, {headers: headers})
      .subscribe((responseData)=> {
        this.weeks.push(responseData.week);
        this.storeWeeks();
      })
  }

  getWeeks() {
    this.http
      .get<Week[]>(this.databaseUrl)
      .subscribe(
        (weeks: Week[]) => {
          this.weeks = weeks;
          this.maxWeekId = this.getMaxId();

          this.weeks.sort((a, b)=> {
            if (a.id > b.id) {
              return 1;
            } else {
              return -1;
            }
          })

          this.weekListChangedEvent.next(this.weeks.slice());
        }
      )
  }

  getWeek(id: string): Week | null {
    for (let week of this.weeks) {
      if (week.id === id) {
        return week
      }
    }
    return null
  }

  updateWeek(originalWeek: Week, newWeek: Week) {
    if (!originalWeek || !newWeek) {
      return;
    }

    const position = this.weeks.findIndex(week => week.id === originalWeek.id);
    if (position < 0) {
      return;
    }

    newWeek.id = originalWeek.id;
    // newWeek._id = originalWeek._id;

    const headers = new HttpHeaders({'Content-type': 'application/json'});
    this.http.put(`${this.databaseUrl}/${originalWeek.id}`, newWeek, {headers: headers}).subscribe(()=> {
      this.weeks[position] = newWeek;
      this.storeWeeks();
    })
  }

  deleteWeek(week: Week) {
    if (!week) {
      return;
    }

    const position = this.weeks.findIndex(week=> week.id === week.id);
    if (position < 0) {
      return;
    }

    this.http.delete(`${this.databaseUrl}/${week.id}`)
      .subscribe(()=> {
        this.weeks.splice(position, 1);
        this.storeWeeks();
      })
  }



}
