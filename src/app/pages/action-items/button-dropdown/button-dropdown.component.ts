import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { reduce } from 'rxjs/operators';
import { ButtonDropdownItem } from './button-dropdown-item.model';

@Component({
  selector: 'app-button-dropdown',
  templateUrl: './button-dropdown.component.html',
  styleUrls: ['./button-dropdown.component.scss'],
})
export class ButtonDropdownComponent implements OnInit {
  // @Input() dropdownItems: ButtonDropdownItem[];
  @Input() selectedId: string;
  @Output() statusUpdateEvent = new EventEmitter<string>();
  options = [
    { id: 'created', label: 'created', color: '#000000' },
    { id: 'assigned', label: 'assigned', color: '#197BB1' },
    { id: 'in-progress', label: 'in-progress', color: '#E5C103' },
    { id: 'completed', label: 'completed', color: '#339D01' },
  ];

  selected = { id: 'assigned', label: 'assigned', color: '#197BB1' };

  constructor() {}

  ngOnInit(): void {
    this.selectedId = this.selectedId ? this.selectedId : 'created';
    this.selected = this.options.find((option) => option.id == this.selectedId);
  }

  handleUpdateStatus(statusId) {
    this.selected = this.options.find((option) => option.id == statusId);
    this.statusUpdateEvent.emit(statusId);
  }

  getSelectedColor() {
    return {
      color: this.selected.color,
      borderColor: this.selected.color,
    };
  }

  getButtonColor(passedColor: string) {
    return {
      color: passedColor,
      borderColor: passedColor,
    };
  }
}
