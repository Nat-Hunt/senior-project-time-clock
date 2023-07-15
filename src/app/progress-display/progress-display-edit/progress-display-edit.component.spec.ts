import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressDisplayEditComponent } from './progress-display-edit.component';

describe('ProgressDisplayEditComponent', () => {
  let component: ProgressDisplayEditComponent;
  let fixture: ComponentFixture<ProgressDisplayEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressDisplayEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressDisplayEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
