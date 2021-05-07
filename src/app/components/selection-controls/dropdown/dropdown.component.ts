import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Output() selectionChangeEvent = new EventEmitter<string>();

  selected2 = '';

  constructor() {}

  ngOnInit(): void {
    this.selected2 = this.options[0].value;
  }

  onSelectionChange(event) {
    this.selectionChangeEvent.emit(event.value);
  }
}
