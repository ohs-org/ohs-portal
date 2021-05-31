import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperPanelComponent } from './stepper-panel.component';

describe('StepperPanelComponent', () => {
  let component: StepperPanelComponent;
  let fixture: ComponentFixture<StepperPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
