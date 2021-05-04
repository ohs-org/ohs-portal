import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper-panel',
  templateUrl: './stepper-panel.component.html',
  styleUrls: ['./stepper-panel.component.scss'],
})
export class StepperPanelComponent implements OnInit {
  stepsToPass: string[] = [
    'Incident Report',
    'Incident Investigation',
    'Investigation Report Review',
    'Claimed',
  ];

  constructor() {}

  ngOnInit(): void {}
}
