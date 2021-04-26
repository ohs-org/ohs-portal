import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox-panel',
  templateUrl: './inbox-panel.component.html',
  styleUrls: ['./inbox-panel.component.scss'],
})
export class InboxPanelComponent implements OnInit {
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
  constructor() {}

  ngOnInit(): void {}
}
