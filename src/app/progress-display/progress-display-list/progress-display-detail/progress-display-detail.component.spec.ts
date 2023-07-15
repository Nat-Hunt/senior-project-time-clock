import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressDisplayDetailComponent } from './progress-display-detail.component';

describe('ProgressDisplayDetailComponent', () => {
  let component: ProgressDisplayDetailComponent;
  let fixture: ComponentFixture<ProgressDisplayDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressDisplayDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressDisplayDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
