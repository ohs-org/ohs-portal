import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

interface DropDownOption {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  // @Input() disabled: boolean;
  @Input() label: string;
  @Input() options: DropDownOption[];
  @Input() control: FormControl;
  @Input() required: boolean;
  @Input() errorMsg: string;
  @Input() appearance: string;

  selected: string;

  constructor() {}

  ngOnInit(): void {}

  onSelectionChange(event) {
    console.log(event);
  }
}
