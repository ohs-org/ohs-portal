import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DropDownOption } from './../../../models/dropdown-option.model';

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
  @Input() defaultValueIndex: string;
  @Output() selectionChangeEvent = new EventEmitter<string>();

  selectedDefault;
  constructor() {}

  ngOnInit(): void {
    this.selectedDefault = this.options[this.defaultValueIndex]?.value;
  }

  onSelectionChange(event) {
    this.selectionChangeEvent.emit(event.value);
  }
}
