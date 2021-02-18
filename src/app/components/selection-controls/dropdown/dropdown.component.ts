import { Component, Input, OnInit } from '@angular/core';

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
  @Input() options: DropDownOption[];
  @Input() disabled: boolean;
  selected: string;

  constructor() {}

  ngOnInit(): void {}

  onSelectionChange(event) {
    console.log(event);
  }
}
