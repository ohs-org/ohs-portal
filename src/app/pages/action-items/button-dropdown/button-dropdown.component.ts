import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ButtonDropdownItem } from './button-dropdown-item.model';

@Component({
  selector: 'app-button-dropdown',
  templateUrl: './button-dropdown.component.html',
  styleUrls: ['./button-dropdown.component.scss'],
})
export class ButtonDropdownComponent implements OnInit {
  // @Input() dropdownItems: ButtonDropdownItem[];
  @Input() selectedId: number;
  @Output() statusUpdateEvent = new EventEmitter<string>();
  options = [
    { id: 1, label: 'created', color: '#000000' },
    { id: 2, label: 'assigned', color: '#197BB1' },
    { id: 3, label: 'in-progress', color: '#E5C103' },
    { id: 4, label: 'completed', color: '#339D01' },
  ];

  selected = { id: 2, label: 'assigned', color: '#197BB1' };

  constructor() {}

  ngOnInit(): void {
    this.selectedId = this.selectedId ? this.selectedId : 1;
    this.selected = this.options.find((option) => option.id == this.selectedId);
  }

  handleUpdateStatus(statusId) {
    this.selected = this.options.find((option) => option.id == statusId);
  }
}
