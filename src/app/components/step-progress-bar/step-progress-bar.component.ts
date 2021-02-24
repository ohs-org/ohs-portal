import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-step-progress-bar',
  templateUrl: './step-progress-bar.component.html',
  styleUrls: ['./step-progress-bar.component.scss'],
})
export class StepProgressBarComponent implements OnInit {
  // Approach1)
  // step1Label: string = 'Label1 here';
  // step2Label: string = 'Label2 here';
  // step3Label: string = 'Label3 here';

  // Approach2) https://indepth.dev/posts/1284/building-a-custom-stepper-using-angular-cdk
  // how to build a custom stepper wizard using angular material-cdk: https://www.mokkapps.de/blog/how-i-built-a-custom-stepper-wizard-using-angular-material-cdk/
  // Angular Material - Creating a custom stepper using the CDK stepper: https://material.angular.io/guide/creating-a-custom-stepper-using-the-cdk-stepper

  // custom wizard progress stepper component in angular: https://youtu.be/BVlpD1PaF58

  constructor() {}

  ngOnInit(): void {}
}
