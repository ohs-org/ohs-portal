import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleStepperComponent } from './simple-stepper.component';

describe('SimpleStepperComponent', () => {
  let component: SimpleStepperComponent;
  let fixture: ComponentFixture<SimpleStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
