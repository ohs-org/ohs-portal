import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-line-avatar-selection-list',
  templateUrl: './single-line-avatar-selection-list.component.html',
  styleUrls: ['./single-line-avatar-selection-list.component.scss'],
})
export class SingleLineAvatarSelectionListComponent implements OnInit {
  listItems = [
    {
      avatar: '../../../../assets/images/avatar.jpeg',
      itemText: 'Single-line item1',
    },
    {
      avatar: '../../../../assets/images/avatar.jpeg',
      itemText: 'Single-line item2',
    },
    {
      avatar: '../../../../assets/images/avatar.jpeg',
      itemText: 'Single-line item3',
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
