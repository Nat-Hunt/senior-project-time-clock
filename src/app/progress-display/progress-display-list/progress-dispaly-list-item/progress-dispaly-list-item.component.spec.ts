import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressDispalyListItemComponent } from './progress-dispaly-list-item.component';

describe('ProgressDispalyListItemComponent', () => {
  let component: ProgressDispalyListItemComponent;
  let fixture: ComponentFixture<ProgressDispalyListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressDispalyListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressDispalyListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
