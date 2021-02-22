import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-progress-bar',
  templateUrl: './step-progress-bar.component.html',
  styleUrls: ['./step-progress-bar.component.scss'],
})
export class StepProgressBarComponent implements OnInit {
  step1Label: string = 'Label1 here';
  step2Label: string = 'Label2 here';
  step3Label: string = 'Label3 here';

  constructor() {}

  ngOnInit(): void {}
}
