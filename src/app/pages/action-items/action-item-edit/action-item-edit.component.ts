import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-item-edit',
  templateUrl: './action-item-edit.component.html',
  styleUrls: ['./action-item-edit.component.scss'],
})
export class ActionItemEditComponent implements OnInit {
  // receive input action item object
  actionItem = {
    actionItemId: 'cdcf0775-98cb-4c41-9308-8b22fd4a9e32',
    actionItemTitle: 'Jerusalem',
    created: '2020-08-21 11:28:14',
    due: '2021-04-15 12:38:11',
    priority: 'medium',
    meetings: ['2020-05-25 13:11:18', '2020-05-12 10:00:00'],
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
    assignedTo: 'Ami Childes',
    color: '#274725',
    status: 'assigned',
  };

  constructor() {}

  ngOnInit(): void {}
}
