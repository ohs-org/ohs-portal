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
  @Input() selected: string;

  selected2 = '';

  constructor() {}

  ngOnInit(): void {
    console.log(this.selected);
    this.selected2 = this.options[0].value;
    console.log(this.selected2);
  }

  onSelectionChange(event) {
    console.log(event);
  }
}
