import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingPanelComponent } from './tracking-panel.component';

describe('TrackingPanelComponent', () => {
  let component: TrackingPanelComponent;
  let fixture: ComponentFixture<TrackingPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackingPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
