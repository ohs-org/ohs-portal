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
      itemText: 'Single-line item',
    },
    {
      avatar: '../../../../assets/images/avatar.jpeg',
      itemText: 'Single-line item',
    },
    {
      avatar: '../../../../assets/images/avatar.jpeg',
      itemText: 'Single-line item',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
