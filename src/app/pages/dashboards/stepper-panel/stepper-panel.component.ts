import { DropDownOption } from './../../../models/dropdown-option.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper-panel',
  templateUrl: './stepper-panel.component.html',
  styleUrls: ['./stepper-panel.component.scss'],
})
export class StepperPanelComponent implements OnInit {
  @Input() title: string;
  @Input() steps: string[];
  @Input() reportList: DropDownOption[];

  activeStepIndex = 0;
  constructor() {}

  ngOnInit(): void {}

  handleSelectionChange(event) {
    this.activeStepIndex = event;
  }
}
