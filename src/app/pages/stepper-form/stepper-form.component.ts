import { FormSummary } from './../../data-types/form-summary';
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
  @ViewChild('stepper') stepper: MatStepper;

  minDate;
  maxDate;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  isEditable = true;

  healthAuthorities;
  committeeLocation;
  numbers;

  lastCompleted;
  lastState;

  lastFormOn: boolean;
  summaryOn: boolean;
  editmodeBtn: boolean;

  // section summary array
  formSectionInfo: FormSummary[] = [];

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

    this.lastFormOn = true;
    this.summaryOn = false;
    this.editmodeBtn = false;

    this.minDate = new Date();
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18); // age should be bigger than 18

    this.firstFormGroup = this.formBuilder.group({
      committeeNameCtrl: [''],
      operatingHACtrl: ['', Validators.required],
      hostingHACtrl: ['', Validators.required],
      locationCtrl: ['', Validators.required],
      multiEmployerCtrl: [false, Validators.required],
      noteCtrl: ['', Validators.required],

      // lastNameCtrl: ['', Validators.required],
      // emailCtrl: ['', Validators.required],
    });

    this.secondFormGroup = this.formBuilder.group({
      attendeeNumCtrl: ['', Validators.required],
      employerNumCtrl: ['', Validators.required],
      employeeNumCtrl: ['', Validators.required],
      fraserHealthCtrl: ['', Validators.required],
      hospitalUnionCtrl: ['', Validators.required],
      nurseUnionCtrl: ['', Validators.required],
      govServiceUnionCtrl: ['', Validators.required],
    });

    // this.secondFormGroup = this.formBuilder.group({
    //   attendeeNumCtrl: [''],
    //   employerNumCtrl: [''],
    //   employeeNumCtrl: [''],
    //   fraserHealthCtrl: [''],
    //   hospitalUnionCtrl: [''],
    //   nurseUnionCtrl: [''],
    //   govServiceUnionCtrl: [''],
    // });

    this.thirdFormGroup = this.formBuilder.group({
      employerCoChairCtrl: ['', Validators.required],
      employerCoChairEmailCtrl: ['', Validators.required],
      employerCoChairRepresentCtrl: ['', Validators.required],
      employeeCoChairCtrl: ['', Validators.required],
      employeeCoChairEmailCtrl: ['', Validators.required],
      employeeCoChairRepresentCtrl: ['', Validators.required],
    });
  }

  // on last form filled up and clicked on review, show the summaries
  onLastCompleted() {
    this.lastCompleted = true;
    this.lastState = 'done';
    this.lastFormOn = !this.lastFormOn;
    this.summaryOn = !this.summaryOn;
  }

  onFirstFormSubmit() {
    if (this.firstFormGroup.status == 'VALID') {
      const committeeInfo = this.firstFormGroup.value;
      const firstFormInfo = {
        title: 'Committee information',
        stepperIndex: 0,
        styles: {
          fieldUIPortion: 8,
          backgroundColor: '',
        },
        sections: [
          {
            sectionName: '',
            fields: [
              {
                fieldName: 'Operating health authority',
                value: committeeInfo.operatingHACtrl,
              },
              {
                fieldName: 'Hosting health authority',
                value: committeeInfo.hostingHACtrl,
              },
              {
                fieldName: 'Base location of committee',
                value: committeeInfo.locationCtrl,
              },
              {
                fieldName: 'Multi-Employer',
                value: committeeInfo.multiEmployerCtrl ? 'Yes' : 'No',
              },
            ],
          },
        ],
      };

      if (this.editmodeBtn) {
        this.formSectionInfo[0] = firstFormInfo;
        this.stepper.selectedIndex = 2;
      } else {
        this.formSectionInfo.push(firstFormInfo);
      }
      console.log(this.formSectionInfo);
      this.stepper.next();
    }
  }

  // {
  //   title: 'Committee information',
  //   fieldUIPortion: 6,
  //   sections: [
  //     {
  //       sectionName: '',
  //       fields: [
  //         {
  //           fieldName: 'Committee Name',
  //           value: committeeInfo.committeeNameCtrl,
  //         },
  //         {
  //           fieldName: 'Operating health authority',
  //           value: committeeInfo.operatingHACtrl,
  //         },
  //         {
  //           fieldName: 'Hosting health authority',
  //           value: committeeInfo.hostingHACtrl,
  //         },
  //         {
  //           fieldName: 'Base location of committee',
  //           value: committeeInfo.locationCtrl,
  //         },
  //         {
  //           fieldName: 'Multi-Employer',
  //           value: committeeInfo.multiEmployerCtrl ? 'Yes' : 'No',
  //         },
  //         { fieldName: 'Notes', value: committeeInfo.noteCtrl },
  //       ],
  //     },
  //   ],
  // }

  onSecondFormSubmit() {
    if (this.secondFormGroup.status == 'VALID') {
      const termsOfRef = this.secondFormGroup.value;
      const secondFormInfo = {
        title: 'Terms of Reference',
        stepperIndex: 1,
        styles: {
          fieldUIPortion: 11,
          backgroundColor: '#E1F5FE',
        },
        sections: [
          {
            sectionName: 'Quroum',
            fields: [
              {
                fieldName: 'Minimum # of attendees',
                value: termsOfRef.attendeeNumCtrl,
              },
              {
                fieldName: 'Minimum # of employers',
                value: termsOfRef.employerNumCtrl,
              },
              {
                fieldName: 'Minimum # of employees',
                value: termsOfRef.employeeNumCtrl,
              },
            ],
          },
          {
            sectionName: 'Representation structure',
            fields: [
              {
                fieldName: 'Fraser Health Authority',
                value: termsOfRef.fraserHealthCtrl,
              },
              {
                fieldName: 'Hospital Employees’ Union',
                value: termsOfRef.hospitalUnionCtrl,
              },
              {
                fieldName: 'BC Nurses’ Union',
                value: termsOfRef.nurseUnionCtrl,
              },
              {
                fieldName: 'BC Government and Service Employees’ Union',
                value: termsOfRef.govServiceUnionCtrl,
              },
            ],
          },
        ],
      };
      if (this.editmodeBtn) {
        this.formSectionInfo[1] = secondFormInfo;
        this.stepper.selectedIndex = 2;
      } else {
        this.formSectionInfo.push(secondFormInfo);
      }
      console.log(this.formSectionInfo);
      this.stepper.next();
    }
  }

  onThirdFormSubmit() {
    if (this.thirdFormGroup.status == 'VALID') {
      const committeeCochairs = this.thirdFormGroup.value;
      const thirdFormInfo = {
        title: 'Committee Co-chairs',
        stepperIndex: 2,
        styles: {
          fieldUIPortion: 5,
          backgroundColor: '',
        },
        sections: [
          {
            sectionName: '',
            fields: [
              {
                fieldName: 'Employer co-chair',
                value: committeeCochairs.employerCoChairCtrl,
              },
              {
                fieldName: 'Email',
                value: committeeCochairs.employerCoChairEmailCtrl,
              },
              {
                fieldName: 'Represents',
                value: committeeCochairs.employerCoChairRepresentCtrl,
              },
            ],
          },
          {
            sectionName: '',
            fields: [
              {
                fieldName: 'Fraser Health Authority',
                value: committeeCochairs.employeeCoChairCtrl,
              },
              {
                fieldName: 'Email',
                value: committeeCochairs.employeeCoChairEmailCtrl,
              },
              {
                fieldName: 'Represents',
                value: committeeCochairs.employeeCoChairRepresentCtrl,
              },
            ],
          },
        ],
      };

      if (this.editmodeBtn) {
        this.formSectionInfo[2] = thirdFormInfo;
      } else {
        this.formSectionInfo.push(thirdFormInfo);
      }

      console.log(this.formSectionInfo);
      this.onLastCompleted();
    }
  }

  handleEditClick(event) {
    console.log(event);
    if (event == 0) {
      this.stepper.selectedIndex = 0; // not recommended but no other option
      this.editmodeBtn = true;
    } else if (event == 1) {
      this.stepper.previous();
      this.editmodeBtn = true;
    } else {
      this.summaryOn = false;
      this.lastFormOn = true;
      this.editmodeBtn = true;
    }
  }
}
