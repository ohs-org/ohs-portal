import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // for step progress bar
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None, // this for tooltip
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class AppComponent implements OnInit {
  title = 'OHS Portal';

  firstInputFormGroup: FormGroup;
  secondInputFormGroup: FormGroup;
  thirdInputFormGroup: FormGroup;

  // built in example
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = true;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstInputFormGroup = this.formBuilder.group({
      firstInput: ['', Validators.required],
      secondInput: ['', Validators.required],
    });

    this.secondInputFormGroup = this.formBuilder.group({
      firstInput: ['this is second', Validators.required],
    });

    this.thirdInputFormGroup = this.formBuilder.group({
      firstInput: ['third Form', Validators.required],
      secondInput: ['', Validators.required],
      thirdInput: ['', Validators.required],
    });

    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }
}
