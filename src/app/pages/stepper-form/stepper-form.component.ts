import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // for step progress bar
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  selector: 'app-stepper-form',
  templateUrl: './stepper-form.component.html',
  styleUrls: ['./stepper-form.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class StepperFormComponent implements OnInit {
  minDate;
  maxDate;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = true;

  operatingHA;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.operatingHA = [
      { value: 'phsa', viewValue: 'PHSA' },
      { value: 'bc-children', viewValue: "BC Children's Hospital" },
      { value: 'bc-mental', viewValue: 'BC Mental Health' },
      { value: 'bc-cdc', viewValue: 'BC Centre for Disease Control' },
      { value: 'bc-transplant', viewValue: 'BC Transplant' },
      { value: 'bc-renal', viewValue: 'BC Renal' },
      { value: 'bcehs', viewValue: 'BCEHS' },
    ];

    this.minDate = new Date();
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18); // age should be bigger than 18

    this.firstFormGroup = this.formBuilder.group({
      committeeNameCtrl: ['', Validators.required],
      operatingHACtrl: ['', Validators.required],
      lastNameCtrl: ['', Validators.required],
      emailCtrl: ['', Validators.required],
      descCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }
}
