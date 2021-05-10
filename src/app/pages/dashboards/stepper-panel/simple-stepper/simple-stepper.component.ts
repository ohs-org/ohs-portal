import { MatStep, MatStepper } from '@angular/material/stepper';
import { STEP_STATE, CdkStep } from '@angular/cdk/stepper';
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
})
export class SimpleStepperComponent
  implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('stepper') stepper: MatStepper;
  @ViewChild('lastStep') lastStep: MatStep;
  @Input() steps: string[];
  @Input() activeStepIndex: number;

  lastCompleted: boolean = false;
  lastState: string;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    console.log('passed in: ', this.activeStepIndex);
    this.moveStepper();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.moveStepper();
    if (this.activeStepIndex == this.steps.length - 1) {
      console.log(this.activeStepIndex);
      console.log(this.steps.length - 1);
      this.lastStep.completed = true;
      this.lastStep.state = 'done';
    }
  }

  moveStepper(): void {
    this.stepper.reset();
    for (let i = 0; i < this.activeStepIndex; i++) {
      this.stepper.next();
    }
  }
}
