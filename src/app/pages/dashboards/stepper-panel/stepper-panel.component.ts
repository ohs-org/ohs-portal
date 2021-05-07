import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper-panel',
  templateUrl: './stepper-panel.component.html',
  styleUrls: ['./stepper-panel.component.scss'],
})
export class StepperPanelComponent implements OnInit {
  @Input() title: string;

  reportsList = [
    { value: '0', viewValue: 'Report Name 1' },
    { value: '1', viewValue: 'Report Name 2' },
    { value: '2', viewValue: 'Report Name 3' },
    { value: '3', viewValue: 'Report Name 4' },
  ];

  stepsToPass: string[] = [
    'Incident Report',
    'Incident Investigation',
    'Investigation Report Review',
    'Claimed',
  ];

  activeStepIndex = 0;

  constructor() {}

  ngOnInit(): void {}

  handleSelectionChange(event) {
    this.activeStepIndex = event;
  }
}
