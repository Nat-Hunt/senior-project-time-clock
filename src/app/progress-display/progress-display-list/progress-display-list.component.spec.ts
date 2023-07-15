import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressDisplayListComponent } from './progress-display-list.component';

describe('ProgressDisplayListComponent', () => {
  let component: ProgressDisplayListComponent;
  let fixture: ComponentFixture<ProgressDisplayListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressDisplayListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressDisplayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
