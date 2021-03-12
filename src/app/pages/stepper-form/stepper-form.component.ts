import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // for step progress bar
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatStepper } from '@angular/material/stepper';

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

  healthAuthorities;
  committeeLocation;
  numbers;

  // @ViewChild('stepper') stepper: MatStepper;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.healthAuthorities = [
      { value: 'phsa', viewValue: 'PHSA' },
      { value: 'bc-children', viewValue: "BC Children's Hospital" },
      { value: 'bc-mental', viewValue: 'BC Mental Health' },
      { value: 'bc-cdc', viewValue: 'BC Centre for Disease Control' },
      { value: 'bc-transplant', viewValue: 'BC Transplant' },
      { value: 'bc-renal', viewValue: 'BC Renal' },
      { value: 'bcehs', viewValue: 'BCEHS' },
    ];

    this.committeeLocation = [
      { value: 'vancouver', viewValue: 'Vancouver' },
      { value: 'burnaby', viewValue: 'Burnaby' },
      { value: 'kamloops', viewValue: 'Kamloops' },
      { value: 'abbotsford', viewValue: 'Abbotsford' },
      { value: 'langley', viewValue: 'Langley' },
    ];

    this.numbers = [
      { value: '1', viewValue: '1' },
      { value: '2', viewValue: '2' },
      { value: '3', viewValue: '3' },
      { value: '4', viewValue: '4' },
      { value: '5', viewValue: '5' },
      { value: '6', viewValue: '6' },
    ];

    this.minDate = new Date();
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18); // age should be bigger than 18

    this.firstFormGroup = this.formBuilder.group({
      committeeNameCtrl: [''],
      // operatingHACtrl: ['', Validators.required],
      // hostingHACtrl: ['', Validators.required],
      // locationCtrl: ['', Validators.required],
      // noteCtrl: ['', Validators.required],
      // multiEmployerCtrl: [''],

      // lastNameCtrl: ['', Validators.required],
      // emailCtrl: ['', Validators.required],
    });

    this.secondFormGroup = this.formBuilder.group({
      attendeeNumCtrl: ['', Validators.required],
    });

    // this.firstFormGroup.statusChanges.subscribe((status) => {
    //   if (status === 'VALID') {
    //     // this.stepper.next();
    //     console.log('first form is valid');
    //   }
    //   console.log(status);
    // });
  }
}
