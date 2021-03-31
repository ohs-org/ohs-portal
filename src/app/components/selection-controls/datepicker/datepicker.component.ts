import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
// date format ref: https://stackoverflow.com/questions/53359598/how-to-change-angular-material-datepicker-format/57493537
// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment } from 'moment';
import { defaultThrottleConfig } from 'rxjs/internal/operators/throttle';
const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'L',
  },
  display: {
    dateInput: 'MMM DD, YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'll',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class DatepickerComponent implements OnInit {
  @Input() label: string;
  @Input() control: FormControl;

  selectedDate: string;
  dateFormCtrl: FormControl;

  constructor() {}

  ngOnInit(): void {
    this.dateFormCtrl = this.control ? this.control : new FormControl();
  }

  onDateChange(event) {
    const selectedDate = event.value; // type will be moment
    if (selectedDate) {
      console.log('Date Selected: ' + selectedDate.toDate());
    }
  }
}
