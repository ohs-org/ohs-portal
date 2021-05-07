import { MatStepper } from '@angular/material/stepper';
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

@Component({
  selector: 'app-simple-stepper',
  templateUrl: './simple-stepper.component.html',
  styleUrls: ['./simple-stepper.component.scss'],
})
export class SimpleStepperComponent
  implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('stepper') stepper: MatStepper;
  @Input() steps: string[];
  @Input() activeStepIndex: number;

  state = STEP_STATE.DONE;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    console.log('passed in: ', this.activeStepIndex);
    this.moveStepper();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.moveStepper();
  }

  moveStepper(): void {
    this.stepper.reset();
    for (let i = 0; i < this.activeStepIndex; i++) {
      this.stepper.next();
    }
  }
}
