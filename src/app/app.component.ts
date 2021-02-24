import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // for step progress bar

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None, // this for tooltip
})
export class AppComponent implements OnInit {
  title = 'OHS Portal';

  firstInputFormGroup: FormGroup;
  secondInputFormGroup: FormGroup;
  thirdInputFormGroup: FormGroup;

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
  }
}
