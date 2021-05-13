import { MatStep, MatStepper } from '@angular/material/stepper';
import { STEP_STATE, CdkStep } from '@angular/cdk/stepper';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper'; // custom icon for custom state (check providers)

import {
  Component,
  Input,
  OnInit,
  ViewChild,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
STEP_STATE;
@Component({
  selector: 'app-simple-stepper',
  templateUrl: './simple-stepper.component.html',
  styleUrls: ['./simple-stepper.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class SimpleStepperComponent
  implements OnInit, AfterViewInit, OnChanges
{
  @ViewChild('stepper') stepper: MatStepper;
  @ViewChild('lastStep') lastStep: MatStep;
  @Input() steps: string[];
  @Input() activeStepIndex: number;

  lastCompleted: boolean = false;
  lastState: string;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.moveStepper();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.resetStepper();
    this.moveStepper();
    if (this.activeStepIndex == this.steps.length - 1) {
      this.lastStep.completed = true;
      this.lastStep.state = 'done';
    }
  }

  moveStepper = (): void => {
    for (let i = 0; i < this.activeStepIndex; i++) {
      this.stepper.next();
    }
  };

  resetStepper = (): void => {
    if (this.lastStep) {
      this.lastStep.completed = false;
      this.lastStep.state = 'last';
    }
    this.stepper?.reset();
  };
}
