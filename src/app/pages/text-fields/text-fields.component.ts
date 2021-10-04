import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-fields',
  templateUrl: './text-fields.component.html',
  styleUrls: ['./text-fields.component.scss'],
})
export class TextFieldsComponent implements OnInit {
  hide = true;

  constructor() {}

  ngOnInit(): void {}

  errorTxtInput = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
  ]);

  getErrorMessage = () => {
    return this.errorTxtInput.hasError
      ? 'Error: <insert how to recover from error>'
      : '';
  };
}
