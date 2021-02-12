import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-line-avatar-selection-list',
  templateUrl: './two-line-avatar-selection-list.component.html',
  styleUrls: ['./two-line-avatar-selection-list.component.scss'],
})
export class TwoLineAvatarSelectionListComponent implements OnInit {
  listItems = [
    {
      avatar: '../../../../assets/images/avatar.jpeg',
      itemText: 'Single-line item1',
      secondaryText: 'secondary item1',
    },
    {
      avatar: '../../../../assets/images/avatar.jpeg',
      itemText: 'Single-line item2',
      secondaryText: 'secondary item1',
    },
    {
      avatar: '../../../../assets/images/avatar.jpeg',
      itemText: 'Single-line item3',
      secondaryText: 'secondary item1',
    },
  ];

  selectedItems = [];

  constructor() {}

  ngOnInit(): void {}

  onSelectionChange(event, selected) {
    this.selectedItems = []; // clear
    selected.forEach((listItem) => {
      console.log(listItem.value);
      this.selectedItems.push(listItem.value);
    });
    console.log(this.selectedItems);
  }
}
