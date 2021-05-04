import { MatStepper } from '@angular/material/stepper';
import { STEP_STATE, CdkStep } from '@angular/cdk/stepper';
import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-simple-stepper',
  templateUrl: './simple-stepper.component.html',
  styleUrls: ['./simple-stepper.component.scss'],
})
export class SimpleStepperComponent implements OnInit {
  @ViewChild('stepper') stepper: MatStepper;
  @Input() steps: string[];
  @Input() activeStepIndex: number;

  state = STEP_STATE.DONE;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    for (let i = 0; i < this.activeStepIndex; i++) {
      this.stepper.next();
    }
  }

  // getState = (index: number): boolean => {
  //   console.log('in get state');
  //   return index < this.activeStepIndex ? true : false;
  // };
}
